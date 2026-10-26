/* The datasets as a cloud (layouts/partials/dataset-cloud.html): bubbles by kind, lines for what a dataset is made
   from and for the links between sources and authorities. The layout is computed here, the same on every load (no
   randomness): the entity pages in the middle, the authorities around them, the sources further out, the
   complements outside, pulled towards what they belong to. Plain JavaScript, no library. */
(function () {
  "use strict";
  var fig = document.querySelector(".dataset-cloud");
  if (!fig) return;
  var data = JSON.parse(fig.querySelector(".dataset-cloud-data").textContent);
  var svg = fig.querySelector("svg"), tip = fig.querySelector(".dataset-cloud-tip");
  var NS = "http://www.w3.org/2000/svg";
  var W = 900, H = 660, CX = W / 2, CY = H / 2;

  // the source of an identity declaration -> the authority dataset (judaicalink-data, jl.authorities)
  var AUTHORITY = { gnd: "gnd", viaf: "viaf", "lc-names": "lc", geonames: "geonames", wikidata: "wikidata",
    "wikipedia-en": "dbpedia", "wikipedia-de": "dbpedia" };
  var AUTH_COLOUR = { gnd: "#1f6fb2", viaf: "#c8922a", lc: "#7a4fb5", geonames: "#2e9b6a", wikidata: "#c0392b",
    dbpedia: "#d07a1c" };
  var KIND_COLOUR = { records: "#2a78d6", authority: "#c8922a", complement: "#1baf7a", linkset: "#8a63c9",
    correction: "#d95926", "entity-pages": "#004284", support: "#9aa5b1" };
  // rings (radius in y; x is stretched by SX): the entity pages, the authorities, the sources, the complements
  var RING = { "entity-pages": 0, authority: 118, records: 212, linkset: 212, support: 212, complement: 292, correction: 292 };
  var SX = 1.36;
  var KIND_ORDER = ["entity-pages", "authority", "records", "linkset", "support", "complement", "correction"];
  var AUTH_ORDER = ["gnd", "viaf", "lc", "wikidata", "dbpedia", "geonames"];

  var byId = {};
  data.nodes.forEach(function (n) { byId[n.id] = n; });
  // our linksets (jl:sameAs, decision 0029 of judaicalink-data) are lines, not bubbles
  function isLineLinkset(n) {
    // (Hugo gives the keys of the identity table in lower case)
    return n.kind === "linkset" && n.identity.some(function (d) { return d.p.toLowerCase() === "jl:sameas"; });
  }
  var used = {};
  data.nodes.forEach(function (n) { n.inputs.forEach(function (i) { used[i] = true; }); });
  var nodes = data.nodes.filter(function (n) { return !isLineLinkset(n) && (n.kind !== "support" || used[n.id]); });
  nodes.forEach(function (n) { byId[n.id] = n; });
  var shown = {};
  nodes.forEach(function (n) { shown[n.id] = true; });

  // ---- the lines --------------------------------------------------------------------------------------------
  var edges = [], seen = {};
  function edge(a, b, type, via) {
    if (!shown[a] || !shown[b] || a === b) return;
    var k = a + ">" + b + ">" + type;
    if (seen[k]) { if (via && seen[k].via.indexOf(via) < 0) seen[k].via.push(via); return; }
    var e = { a: a, b: b, type: type, via: via ? [via] : [] };
    seen[k] = e; edges.push(e);
  }
  var lineLinksets = data.nodes.filter(isLineLinkset);
  function linksetOf(auth) {   // the linkset of an authority: ls-<authority>
    var l = byId["ls-" + auth];
    return l && isLineLinkset(l) ? l.id : null;
  }
  // a linkset of its own for one source and one authority (judged links, decision 0037): the links of that source go
  // through it, not through the linkset of the authority
  var judged = {};
  lineLinksets.forEach(function (l) {
    var auths = l.inputs.filter(function (i) { return byId[i] && byId[i].kind === "authority"; });
    if (auths.length !== 1 || l.id === "ls-" + auths[0]) return;
    l.inputs.forEach(function (i) { if (byId[i] && byId[i].kind === "records") judged[i + ">" + auths[0]] = l.id; });
  });
  data.nodes.forEach(function (n) {
    if (isLineLinkset(n)) return;
    // made from: complements, corrections, the older linksets
    if (n.kind !== "records" && n.kind !== "authority") n.inputs.forEach(function (i) { edge(i, n.id, "input"); });
    // identity: a record (or authority) dataset linked to an authority by the linkset of that authority
    n.identity.forEach(function (d) {
      d.s.forEach(function (src) {
        var auth = AUTHORITY[src];
        if (!auth || !shown[auth] || auth === n.id) return;
        if (n.kind === "linkset") edge(n.id, auth, "link", n.id);
        else edge(n.id, auth, "link", judged[n.id + ">" + auth] || linksetOf(auth));
      });
    });
  });
  lineLinksets.forEach(function (l) {   // extra inputs of a linkset: the datasets whose records it links
    var auths = l.inputs.filter(function (i) { return byId[i] && byId[i].kind === "authority"; });
    l.inputs.forEach(function (i) {
      if (!byId[i] || byId[i].kind === "authority" || byId[i].kind === "complement" || judged[i + ">" + auths[0]]) return;
      auths.forEach(function (a) { edge(i, a, "link", l.id); });
    });
  });
  var ep = nodes.filter(function (n) { return n.kind === "entity-pages"; })[0];
  if (ep) nodes.forEach(function (n) { if (n.kind === "records" || n.kind === "authority") edge(n.id, ep.id, "ep"); });

  // ---- sizes and layout ---------------------------------------------------------------------------------------
  nodes.forEach(function (n) {
    n.r = n.kind === "entity-pages" ? 34 : 5 + 2.4 * Math.log10(Math.max(n.triples, 10));
  });
  var groups = {};
  nodes.forEach(function (n) { (groups[n.kind] = groups[n.kind] || []).push(n); });
  function place(n, angle) {
    n.a = angle;
    n.x = CX + Math.cos(angle) * RING[n.kind] * SX;
    n.y = CY + Math.sin(angle) * RING[n.kind];
  }
  function meanAngle(list) {   // the circular mean of the angles of the given nodes, or null
    var sx = 0, sy = 0;
    list.forEach(function (m) { if (m && m.a !== undefined) { sx += Math.cos(m.a); sy += Math.sin(m.a); } });
    return sx || sy ? Math.atan2(sy, sx) : null;
  }
  function spread(list, minGap) {   // keep the order by angle, but at least minGap apart (radians)
    list.sort(function (p, q) { return p.want - q.want || (p.id < q.id ? -1 : 1); });
    var n = list.length;
    if (!n) return;
    var gap = Math.max(minGap, 0.92 * 2 * Math.PI / n);   // evenly around the ring, in the order of the angles
    for (var pass = 0; pass < 60; pass++) {
      for (var i = 0; i < n; i++) {
        var p = list[i], q = list[(i + 1) % n];
        var d = q.want - p.want + (i === n - 1 ? 2 * Math.PI : 0);
        if (d < gap) { var m = (gap - d) / 2; p.want -= m; q.want += m; }
      }
    }
    list.forEach(function (m) { place(m, m.want); });
  }
  var neighbours = {};
  edges.forEach(function (e) {
    if (e.type === "ep") return;
    (neighbours[e.a] = neighbours[e.a] || []).push(e.b);
    (neighbours[e.b] = neighbours[e.b] || []).push(e.a);
  });
  if (ep) { ep.x = CX; ep.y = CY; ep.a = 0; }
  var auths = (groups.authority || []).sort(function (p, q) {
    var i = AUTH_ORDER.indexOf(p.id), j = AUTH_ORDER.indexOf(q.id);
    return (i < 0 ? 99 : i) - (j < 0 ? 99 : j) || (p.id < q.id ? -1 : 1);
  });
  auths.forEach(function (n, i) { place(n, -Math.PI / 2 + 2 * Math.PI * i / auths.length); });
  var middle = (groups.records || []).concat(groups.linkset || [], groups.support || []);
  middle.forEach(function (n, i) {
    var m = meanAngle((neighbours[n.id] || []).map(function (id) { return byId[id]; })
      .filter(function (x) { return x && x.kind === "authority"; }));
    n.want = m === null ? 2 * Math.PI * i / middle.length : m;
  });
  spread(middle, 0.2);
  // support data and sources without authority links: next to what they feed
  middle.forEach(function (n) {
    var linked = (neighbours[n.id] || []).some(function (id) { return byId[id] && byId[id].kind === "authority"; });
    if (!linked) { var m = meanAngle((neighbours[n.id] || []).map(function (id) { return byId[id]; })); if (m !== null) n.want = m; }
  });
  spread(middle, 0.2);
  var outer = (groups.complement || []).concat(groups.correction || []);
  outer.forEach(function (n, i) {
    var m = meanAngle((neighbours[n.id] || []).map(function (id) { return byId[id]; })
      .filter(function (x) { return x && x.kind !== "complement" && x.kind !== "correction"; }));
    n.want = m === null ? 2 * Math.PI * i / outer.length : m;
  });
  spread(outer, 0.3);
  // a light push apart where bubbles and their labels overlap
  for (var it = 0; it < 80; it++) {
    for (var i = 0; i < nodes.length; i++) for (var j = i + 1; j < nodes.length; j++) {
      var p = nodes[i], q = nodes[j], dx = q.x - p.x, dy = q.y - p.y, d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      var min = p.r + q.r + 18;
      if (d < min && p !== ep && q !== ep) {
        var f = (min - d) / 2;
        p.x -= dx / d * f; p.y -= dy / d * f; q.x += dx / d * f; q.y += dy / d * f;
      }
    }
    nodes.forEach(function (n) {
      n.x = Math.max(n.r + 30, Math.min(W - n.r - 30, n.x)); n.y = Math.max(n.r + 6, Math.min(H - n.r - 20, n.y));
    });
  }

  // ---- drawing ------------------------------------------------------------------------------------------------
  function make(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  var gEdges = make("g", { class: "dc-edges" }, svg), gNodes = make("g", { class: "dc-nodes" }, svg);
  function colourOf(e) {
    if (e.type === "link") return AUTH_COLOUR[e.b] || "#888";
    return e.type === "ep" ? "#5a6672" : "#8b95a1";
  }
  edges.forEach(function (e) {
    var p = byId[e.a], q = byId[e.b];
    var mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2, dx = q.x - p.x, dy = q.y - p.y;
    var path = "M" + p.x.toFixed(1) + "," + p.y.toFixed(1) + " Q" + (mx - dy * 0.12).toFixed(1) + "," +
      (my + dx * 0.12).toFixed(1) + " " + q.x.toFixed(1) + "," + q.y.toFixed(1);
    e.el = make("path", { d: path, class: "dc-edge dc-" + e.type, stroke: colourOf(e),
      "stroke-dasharray": e.type === "ep" ? "2 3" : e.via.some(function (v) { return v && v !== linksetOf(e.b); }) ? "5 3" : "" }, gEdges);
  });
  nodes.forEach(function (n) {
    var a = make("a", { href: n.url, class: "dc-node dc-k-" + n.kind, tabindex: "0" }, gNodes);
    make("circle", { cx: n.x.toFixed(1), cy: n.y.toFixed(1), r: n.r.toFixed(1), fill: KIND_COLOUR[n.kind] || "#888" }, a);
    var t = make("text", { x: n.x.toFixed(1), y: (n.y + n.r + 14).toFixed(1), "text-anchor": "middle" }, a);
    if (n.kind === "entity-pages") {
      t.setAttribute("class", "dc-inside");
      ["entity", "pages"].forEach(function (w, i) {
        var ts = make("tspan", { x: n.x.toFixed(1), y: (n.y - 3 + i * 15).toFixed(1) }, t); ts.textContent = w;
      });
    } else t.textContent = n.id;
    n.el = a;
    a.addEventListener("mouseenter", function () { focus(n); });
    a.addEventListener("focus", function () { focus(n); });
    a.addEventListener("mouseleave", blur);
    a.addEventListener("blur", blur);
  });

  // ---- highlighting -------------------------------------------------------------------------------------------
  function fmt(x) { return x.toLocaleString("en"); }
  function names(list) { return list.map(function (id) { return byId[id] ? id : id; }).join(", "); }
  function focus(n) {
    var near = {}; near[n.id] = true;
    var from = [], to = [], links = [];
    edges.forEach(function (e) {
      var on = e.a === n.id || e.b === n.id;
      e.el.classList.toggle("dc-on", on);
      if (!on) return;
      near[e.a] = near[e.b] = true;
      if (e.type === "input") (e.b === n.id ? from : to).push(e.b === n.id ? e.a : e.b);
      if (e.type === "link") links.push((e.a === n.id ? e.b : e.a) + (e.via.length && e.via[0] ? " (" + e.via.join(", ") + ")" : ""));
    });
    nodes.forEach(function (m) { m.el.classList.toggle("dc-dim", !near[m.id]); });
    svg.classList.add("dc-focus");
    var lines = ['<b>' + esc(n.title) + '</b>', esc(data.kinds[n.kind] || n.kind) +
      (n.triples ? " · " + fmt(n.triples) + " triples" : "") + (n.stable ? " · " + esc(n.stable) : "")];
    if (from.length) lines.push("Made from: " + esc(names(from)));
    if (links.length) lines.push((n.kind === "authority" ? "Linked from: " : "Linked to: ") + esc(links.join("; ")));
    if (to.length) lines.push("Used by: " + esc(names(to)));
    tip.innerHTML = lines.join("<br>");
    tip.hidden = false;
    var box = svg.getBoundingClientRect(), s = box.width / W;
    var x = n.x * s, y = n.y * s;
    // below the bubble in the upper half, above it in the lower half, so that its neighbours stay visible
    tip.style.left = Math.min(box.width - tip.offsetWidth - 4, Math.max(4, x - tip.offsetWidth / 2)) + "px";
    tip.style.top = (y < box.height / 2 ? y + n.r * s + 22 : Math.max(4, y - n.r * s - tip.offsetHeight - 8)) + "px";
  }
  function blur() {
    svg.classList.remove("dc-focus");
    edges.forEach(function (e) { e.el.classList.remove("dc-on"); });
    nodes.forEach(function (m) { m.el.classList.remove("dc-dim"); });
    tip.hidden = true;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---- legend -------------------------------------------------------------------------------------------------
  var legend = document.createElement("div");
  legend.className = "dataset-cloud-legend";
  var html = KIND_ORDER.filter(function (k) { return groups[k]; }).map(function (k) {
    return '<span><i style="background:' + KIND_COLOUR[k] + '"></i>' + esc(data.kinds[k] || k) + "</span>";
  }).join("");
  html += Object.keys(AUTH_COLOUR).filter(function (a) { return shown[a] && linksetOf(a); }).map(function (a) {
    return '<span><a href="/datasets/' + linksetOf(a) + '/"><b style="background:' + AUTH_COLOUR[a] + '"></b>' + linksetOf(a) + "</a></span>";
  }).join("");
  if (byId["ls-footprints-viaf"]) html += '<span><a href="/datasets/ls-footprints-viaf/"><b class="dc-dash" style="border-color:' +
    AUTH_COLOUR.viaf + '"></b>ls-footprints-viaf (judged links)</a></span>';
  html += '<span><b class="dc-grey"></b>made from</span><span><b class="dc-dots"></b>joined in the entity pages</span>';
  legend.innerHTML = html;
  fig.querySelector(".dataset-cloud-canvas").after(legend);
})();
