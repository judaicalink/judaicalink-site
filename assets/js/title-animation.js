/* The title animation of web.judaicalink.org: the people, organisations and publications of JudaicaLink appear on
   the map decade by decade, from the data of the Atlas; then the logo. Before it starts again, the map dives into
   the Dead Sea beside Jerusalem until all is white, and the logo fades out. Plain canvas, no library, no requests but the data file. */
(function () {
  "use strict";
  const W0 = 256;
  // keyframes in seconds: the year, and the camera (longitude, latitude of the centre, width in degrees of longitude)
  const YEARS = [[0, 1000], [2.5, 1500], [6, 1700], [11, 1850], [15.5, 1950], [18, 2020]];
  const CAMERA = [[0, 16, 42, 58], [3, 13.8, 46.5, 42], [7, 13, 50, 25], [11, 12, 49.5, 29], [14.5, 2, 45, 70],
                  [18, -19, 39, 130]];
  const GROW = 18, LOGO_AT = 0.8, LOGO_IN = 1.6, LOGO_HOLD = 4, DIVE = 3.4, OUT = 1.4, BLANK = 0.4;
  const TARGET = [35.5, 31.55], TARGET_SPAN = 0.006;  // the Dead Sea, beside Jerusalem
  const DIVE_X = 0.27;  // where the target ends, right of the centre, as a part of the width
  const PULSE = 1.1, MAXPULSES = 220;

  function project(lon, lat) {
    const f = Math.max(-85, Math.min(85, lat)) * Math.PI / 180;
    return [(lon + 180) / 360 * W0, (1 - Math.log(Math.tan(Math.PI / 4 + f / 2)) / Math.PI) / 2 * W0];
  }
  const clamp = (u) => Math.max(0, Math.min(1, u));
  const ease = (u) => u * u * (3 - 2 * u);

  // monotone cubic interpolation (Fritsch-Carlson): smooth, and never beyond the keyframes, so no motion back and forth
  function monotone(xs, ys, still) {
    const n = xs.length, d = [], m = new Array(n);
    for (let i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
    m[0] = still ? 0 : d[0]; m[n - 1] = still ? 0 : d[n - 2];
    for (let i = 1; i < n - 1; i++) {
      if (d[i - 1] * d[i] <= 0) { m[i] = 0; continue; }
      const h0 = xs[i] - xs[i - 1], h1 = xs[i + 1] - xs[i];
      m[i] = 3 * (h0 + h1) / ((2 * h1 + h0) / d[i - 1] + (h1 + 2 * h0) / d[i]);
    }
    return (x) => {
      if (x <= xs[0]) return ys[0];
      if (x >= xs[n - 1]) return ys[n - 1];
      let i = 0;
      while (x > xs[i + 1]) i++;
      const h = xs[i + 1] - xs[i], u = (x - xs[i]) / h, u2 = u * u, u3 = u2 * u;
      return (2 * u3 - 3 * u2 + 1) * ys[i] + (u3 - 2 * u2 + u) * h * m[i] + (-2 * u3 + 3 * u2) * ys[i + 1] +
             (u3 - u2) * h * m[i + 1];
    };
  }
  const yearAt = monotone(YEARS.map((k) => k[0]), YEARS.map((k) => k[1]), false);
  // the camera in map coordinates: centre x, y and the logarithm of the width
  const camT = CAMERA.map((k) => k[0]), camP = CAMERA.map((k) => project(k[1], k[2]));
  const camX = monotone(camT, camP.map((p) => p[0]), true), camY = monotone(camT, camP.map((p) => p[1]), true);
  const camS = monotone(camT, CAMERA.map((k) => Math.log(k[3] / 360 * W0)), true);
  const cameraAt = (t) => [camX(t), camY(t), camS(t)];

  function css(el, name) { return getComputedStyle(el).getPropertyValue(name).trim(); }

  function start(cv, data) {
    const ctx = cv.getContext("2d");
    const loop = cv.dataset.loop !== "false";
    function path(rings, q) {
      const p = new Path2D();
      for (const flat of rings) {
        let x = 0, y = 0;
        for (let i = 0; i < flat.length; i += 2) {
          x += flat[i]; y += flat[i + 1];
          const [wx, wy] = project(x / q, y / q);
          if (i === 0) p.moveTo(wx, wy); else p.lineTo(wx, wy);
        }
        p.closePath();
      }
      return p;
    }
    const land = path(data.land, data.q), lakes = path(data.lakes, data.q);
    const P = data.lon.length, px = new Float64Array(P), py = new Float64Array(P);
    for (let i = 0; i < P; i++) [px[i], py[i]] = project(data.lon[i], data.lat[i]);
    const ev = data.events, E = ev.length / 4, con = data.connections, K = con.length / 3;
    const count = new Float64Array(P), other = new Float64Array(P), born = new Float64Array(P);
    const order = Array.from({ length: P }, (_, i) => i);
    const target = project(TARGET[0], TARGET[1]), targetS = Math.log(TARGET_SPAN / 360 * W0);
    let C = {}, CW = 0, CH = 0, DPR = 1, ei = 0, ci = 0, pulses = [], lines = [];
    let dive = null;  // when the dive began: its time, camera, year and logo

    function colours() {
      C = { bg: css(cv, "--jg-bg"), land: css(cv, "--jg-land"), border: css(cv, "--jg-border"),
            k0: css(cv, "--jg-k0"), k1: css(cv, "--jg-k1"), pulse: css(cv, "--jg-pulse"),
            line: css(cv, "--jg-line"), year: css(cv, "--jg-year"), logo: css(cv, "--jg-logo") };
    }
    function resize() {
      const r = cv.getBoundingClientRect();
      DPR = Math.min(2, window.devicePixelRatio || 1); CW = r.width; CH = r.height;
      cv.width = Math.round(CW * DPR); cv.height = Math.round(CH * DPR);
    }
    function reset() { count.fill(0); other.fill(0); born.fill(-1); ei = 0; ci = 0; pulses = []; lines = []; dive = null; }

    function advance(decade, t) {
      while (ei < E && ev[4 * ei] <= decade) {
        const p = ev[4 * ei + 1], kind = ev[4 * ei + 2], n = ev[4 * ei + 3];
        if (born[p] < 0) born[p] = t;
        if (kind) other[p] += n; else count[p] += n;
        if (pulses.length < MAXPULSES && (n >= 3 || born[p] === t)) pulses.push([p, t, kind]);
        ei++;
      }
      while (ci < K && con[3 * ci] <= decade) { lines.push([con[3 * ci + 1], con[3 * ci + 2], t]); ci++; }
      pulses = pulses.filter((p) => t - p[1] < PULSE);
    }

    const logoAt = (t) => clamp((t - GROW - LOGO_AT) / LOGO_IN);

    // the state at time t of a cycle: camera, year, alpha of the map, of the year and of the logo; null at its end
    function state(t) {
      if (!dive && loop && t >= GROW + LOGO_AT + LOGO_IN + LOGO_HOLD) beginDive(GROW + LOGO_AT + LOGO_IN + LOGO_HOLD);
      if (!dive) {
        const g = Math.min(t, GROW);
        return { cam: cameraAt(g), year: yearAt(g), map: clamp(t / 0.6), text: 1, logo: ease(logoAt(t)) };
      }
      const u = (t - dive.t) / DIVE;
      if (u < 1) {  // zoom in faster and faster, the target moving beside the logo
        const s = dive.cam[2] + (targetS - dive.cam[2]) * u * u * u, k0 = CW / Math.exp(dive.cam[2]), k = CW / Math.exp(s);
        const x0 = (target[0] - dive.cam[0]) * k0, y0 = (target[1] - dive.cam[1]) * k0, e = ease(clamp(u * 1.4));
        const x = x0 + (DIVE_X * CW - x0) * e, y = y0 * (1 - e);
        const cam = [target[0] - x / k, target[1] - y / k, s];
        return { cam, year: dive.year, map: 1 - clamp((u - 0.85) / 0.15), text: 1 - clamp(u * 2),
                 logo: ease(dive.logo + (1 - dive.logo) * clamp(u * 1.5)) };
      }
      const v = (t - dive.t - DIVE) / OUT;
      if (v < 1) return { cam: dive.cam, year: dive.year, map: 0, text: 0, logo: 1 - ease(v) };
      if (v < 1 + BLANK / OUT) return { cam: dive.cam, year: dive.year, map: 0, text: 0, logo: 0 };
      return null;
    }
    function beginDive(t) {
      if (dive) return;
      const g = Math.min(t, GROW);
      dive = { t, cam: cameraAt(g), year: yearAt(g), logo: logoAt(t) };
    }

    function draw(t, st) {
      const [cx, cy, ls] = st.cam, span = Math.exp(ls), k = CW / span;
      const sx = (x) => (x - cx) * k + CW / 2, sy = (y) => (y - cy) * k + CH / 2;
      const s = Math.sqrt(CW / 900), z = Math.min(1, Math.sqrt(30 / (span / W0 * 360)));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.globalAlpha = 1; ctx.fillStyle = C.bg; ctx.fillRect(0, 0, CW, CH);
      const alpha = st.map;
      if (alpha > 0) {
        ctx.globalAlpha = alpha;
        ctx.save();
        ctx.translate(CW / 2 - cx * k, CH / 2 - cy * k); ctx.scale(k, k);
        ctx.fillStyle = C.land; ctx.fill(land);
        ctx.strokeStyle = C.border; ctx.lineWidth = 0.8 / k; ctx.stroke(land);
        ctx.fillStyle = C.bg; ctx.fill(lakes);
        ctx.restore();
        // connections: drawn out over a second, then faint
        ctx.lineWidth = 0.7 * s; ctx.strokeStyle = C.line;
        for (const [a, b, tb] of lines) {
          const u = Math.min(1, (t - tb) / 1.2);
          const ax = sx(px[a]), ay = sy(py[a]), bx = sx(px[b]), by = sy(py[b]);
          const mx = (ax + bx) / 2 - (by - ay) * 0.18, my = (ay + by) / 2 + (bx - ax) * 0.18;
          if (Math.max(ax, bx, mx) < 0 || Math.min(ax, bx, mx) > CW || Math.max(ay, by, my) < 0 || Math.min(ay, by, my) > CH) continue;
          ctx.globalAlpha = alpha * (0.1 + 0.5 * (1 - u));
          ctx.beginPath(); ctx.moveTo(ax, ay);
          if (u < 1) {  // the first part of the curve, by de Casteljau
            const q1x = ax + (mx - ax) * u, q1y = ay + (my - ay) * u, q2x = mx + (bx - mx) * u, q2y = my + (by - my) * u;
            ctx.quadraticCurveTo(q1x, q1y, q1x + (q2x - q1x) * u, q1y + (q2y - q1y) * u);
          } else ctx.quadraticCurveTo(mx, my, bx, by);
          ctx.stroke();
        }
        // places, the largest first
        order.sort((a, b) => (count[b] + other[b]) - (count[a] + other[a]));
        for (const p of order) {
          const n = count[p] + other[p];
          if (!n) break;
          const x = sx(px[p]), y = sy(py[p]);
          if (x < -20 || y < -20 || x > CW + 20 || y > CH + 20) continue;
          const grow = born[p] >= 0 ? Math.min(1, (t - born[p]) / 0.5) : 1;
          const r = (0.8 + 1.15 * Math.log2(1 + n)) * s * z * ease(grow);
          ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI);
          ctx.globalAlpha = alpha * 0.82; ctx.fillStyle = other[p] > count[p] ? C.k1 : C.k0; ctx.fill();
          if (r > 2) { ctx.globalAlpha = alpha; ctx.lineWidth = 0.7; ctx.strokeStyle = C.bg; ctx.stroke(); }
        }
        // new arrivals: a ring that widens and fades
        ctx.lineWidth = 1.4 * s;
        for (const [p, tb, kind] of pulses) {
          const u = (t - tb) / PULSE, x = sx(px[p]), y = sy(py[p]);
          ctx.globalAlpha = alpha * 0.7 * (1 - u);
          ctx.strokeStyle = kind ? C.k1 : C.pulse;
          ctx.beginPath(); ctx.arc(x, y, (3 + 14 * ease(u)) * s * z, 0, 2 * Math.PI); ctx.stroke();
        }
      }
      // the year, in decades
      if (st.text > 0 && alpha > 0) {
        ctx.globalAlpha = alpha * st.text; ctx.fillStyle = C.year;
        ctx.font = `300 ${Math.round(40 * s)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
        ctx.textBaseline = "alphabetic";
        ctx.fillText(String(Math.floor(st.year / 10) * 10), 22 * s, CH - 20 * s);
      }
      if (st.logo > 0) logo(st.logo);
    }

    // the JudaicaLink star: two triangles joining six nodes around a hexagon, on a clearing of the page colour
    function logo(a) {
      const R = CH * 0.2, x0 = CW / 2, y0 = CH / 2;
      ctx.globalAlpha = a * 0.92;
      const g = ctx.createRadialGradient(x0, y0, R * 1.1, x0, y0, R * 2.1);
      g.addColorStop(0, C.bg); g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = C.bg; ctx.beginPath(); ctx.arc(x0, y0, R * 1.1, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x0, y0, R * 2.1, 0, 2 * Math.PI); ctx.fill();
      ctx.globalAlpha = a;
      const pt = (deg, r) => [x0 + r * Math.cos(deg * Math.PI / 180), y0 - r * Math.sin(deg * Math.PI / 180)];
      ctx.strokeStyle = C.logo; ctx.fillStyle = C.logo; ctx.lineWidth = R * 0.1; ctx.lineJoin = "round";
      for (const first of [90, 270]) {
        ctx.beginPath();
        for (let i = 0; i < 3; i++) { const [x, y] = pt(first + 120 * i, R); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
        ctx.closePath(); ctx.stroke();
      }
      for (let i = 0; i < 6; i++) { const [x, y] = pt(90 + 60 * i, R); ctx.beginPath(); ctx.arc(x, y, R * 0.16, 0, 2 * Math.PI); ctx.fill(); }
      ctx.beginPath();
      for (let i = 0; i < 6; i++) { const [x, y] = pt(60 * i, R * 0.44); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.closePath(); ctx.lineWidth = R * 0.05; ctx.stroke(); ctx.fill();
    }

    // advance the data to time t of the cycle and draw; false at the end of the cycle
    function step(t) {
      const st = state(t);
      if (!st) return false;
      advance(Math.floor(st.year / 10) * 10, t);
      draw(t, st);
      return true;
    }

    let running = false, raf = 0, t0 = null, visible = false;
    function frame(now) {
      if (t0 === null) t0 = now;
      if (!step((now - t0) / 1000)) { reset(); t0 = now; step(0); }
      if (running) raf = requestAnimationFrame(frame);
    }
    function full(logo) {
      reset(); advance(9999, -10); pulses = []; draw(0, { cam: cameraAt(GROW), year: yearAt(GROW), map: 1, text: 1, logo });
    }
    function halt() { running = false; cancelAnimationFrame(raf); }
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    function run() {
      if (still.matches) { full(1); return; }  // no motion: the full map with the logo
      if (!running) { running = true; t0 = null; reset(); raf = requestAnimationFrame(frame); }
    }
    colours(); resize(); reset();
    if (cv.dataset.at) {  // one frame at a given second, for stills
      const at = +cv.dataset.at, dv = cv.dataset.dive;
      for (let t = 0; t < at; t += 1 / 30) { if (dv && t >= +dv) beginDive(+dv); step(t); }
      if (dv && at >= +dv) beginDive(+dv);
      step(at); return;
    }
    new IntersectionObserver((es) => {
      visible = es[0].isIntersecting;
      if (visible) run(); else halt();
    }).observe(cv);
    window.addEventListener("resize", () => { resize(); if (!running && visible) run(); });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", colours);
    still.addEventListener("change", () => { halt(); run(); });
  }

  for (const cv of document.querySelectorAll("canvas[data-growth]")) {
    fetch(cv.dataset.growth).then((r) => r.json()).then((d) => start(cv, d));
  }
})();
