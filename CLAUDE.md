# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Was das hier ist

Hugo-Statikseite für **web.judaicalink.org**, gepflegt an der TH Mannheim. Inhalte als
Markdown unter `content/`, Templates unter `layouts/`, Assets unter `static/`.

## Navigation

Das Menü führt die eigenen Seiten; der Verweis auf den Produktivbetrieb in Frankfurt steht
abgesetzt am Ende in einem eigenen Block (`.nav-external`, Trennlinie und Kleinüberschrift,
Stile am Ende von `static/css/labs.css`). Dort gehört genau **ein** Link hin – Suche und
Portal getrennt zu führen war redundant.

## Redaktionelle Linie

Das ist der entscheidende Punkt für jede Änderung: **JudaicaLink läuft produktiv in
Frankfurt**, im Portal des FID Jüdische Studien unter
<https://www.jewishstudies.de/judaicalink/>. Diese Seite ist nicht der Dienst, sondern die
Seite des Mannheimer Projekts, in dem an der Weiterentwicklung von JudaicaLink gearbeitet
wird.

Daraus folgt:

- Auf jeder Einstiegsseite gehört ein prominenter Verweis auf die JudaicaLink-Einstiegsseite
  in Frankfurt. Wer den Dienst nutzen will, soll dorthin geleitet werden, nicht hierher.
- Die **Datensatzdokumentation wird in Frankfurt gepflegt**, unter
  <https://www.jewishstudies.de/en/judaicalink/datasets/>. Auch dann, wenn dort etwas fehlen
  sollte – nachgetragen wird in Frankfurt, nicht hier.
- Hier werden nur Datensätze gelistet, die in Mannheim entwickelt werden und (noch) nicht in
  Frankfurt vorliegen. Ansonsten Verweis auf den Frankfurter Katalog.
- Eigene Such- und Datenzugänge bietet diese Seite nicht mehr. Suchanfragen gehören an die
  Graph Search im Portal.

## Systemlandschaft

Historisch gab es vier Systeme. Wer hier etwas ändert, sollte wissen, was wo läuft:

| Host | Was | Betrieb | Status |
|---|---|---|---|
| `web.judaicalink.org` | diese Hugo-Seite | Mannheim, 141.19.143.18 | aktiv, auf Langzeitbetrieb ausgelegt |
| `data.judaicalink.org` | LOD-Auslieferung, früher Pubby/Django | **Frankfurt, 141.2.140.18** | migriert, DNS umgestellt |
| `labs.judaicalink.org` | Django-Prototyp, Vorlage für Frankfurt | Mannheim, 141.19.143.18 | Abschaltung vorgesehen, zeitweise 502 |
| `search.judaicalink.org` | ElasticSearch-Backend der alten Suche | Mannheim, 141.19.143.18 | defekt, Abschaltung vorgesehen |

`data.judaicalink.org` ist bereits vollständig migriert. Alte Entitäts-URIs und Dump-Links
lösen über Content Negotiation korrekt nach Frankfurt auf, HTML, RDF/XML, Turtle und JSON-LD
werden ausgeliefert. Prüfbeispiel:

```
curl -sIL -H "Accept: text/turtle" http://data.judaicalink.org/data/gnd/118584472
```

Zwei Linkmuster fangen **nicht**: `data.judaicalink.org/sparql.html` (404) und die
Named-Graph-URIs `data.judaicalink.org/datasets/<slug>` (404). Beide kommen im Content vor.

## Bauen und ausliefern

```bash
hugo serve          # lokaler Server, http://localhost:1313
hugo                # baut nach public/
hugo -d <ziel>      # baut in anderes Verzeichnis
```

Im Repo liegt ein Hugo 0.73.0 als Symlink `./hugo`; die README nennt 0.104.3 als
Serverversion. Bei Templatefehlern zuerst die Hugo-Version prüfen.

Deployment läuft per Skript auf dem Mannheimer Server, nicht über die GitHub Action (die
baut nur ein Docker-Image und veröffentlicht es nicht):

```
docker/site/rebuild.sh   # prüft auf neue Commits in master, baut nur bei Änderung
docker/site/update.sh    # baut unbedingt
```

Beide ziehen `master`, bauen mit `hugo --cleanDestinationDir` und rsyncen `public/` nach
`/data/judaicalink/web.judaicalink.org/htdocs`. Änderungen gehen also über einen Push nach
`master` live.

## Content-Konventionen

Dataset-Seiten unter `content/datasets/` nutzen TOML-Frontmatter mit `dataslug`, `graph`,
`example`, `loaded`, `category`, wiederholbaren `[[files]]`-Blöcken für Dumps und einem
`[license]`-Block. Gerendert wird das über `layouts/datasets/single.html` und
`layouts/section/datasets.html`.

News unter `content/news/`, ein Beitrag pro Datei, gerendert über `layouts/news/single.html`.
Historische Beiträge bleiben inhaltlich stehen. Links auf abgeschaltete Dienste werden nicht
stillschweigend umgebogen, sondern deaktiviert und mit einem datierten Update-Hinweis
versehen, der auf `/production/` verweist – Muster siehe
`content/news/bhr-encyclopedia.md`.

**Namensgebung:** Die Hochschule heißt seit Anfang 2026 **Technische Hochschule Mannheim**,
vorher Hochschule Mannheim. Englische Bezeichnung ist durchgängig **Mannheim Technical
University** – nicht „Mannheim University of Applied Sciences" und nicht der deutsche Name.
Da die Seite englisch ist, steht überall die englische Form; im Impressum zusätzlich der
juristische Name in Klammern. In historischen News-Beiträgen bleibt der damalige Name
stehen, auch in Überschriften wie „We moved to the Hochschule Mannheim".

`content/imprint.md` ist Impressum und Datenschutzerklärung in einem, erreichbar unter
`/imprint/` mit Aliassen für die alten Pfade `/legal/` und `/disclaimer/`. Verlinkt wird nur
aus der Fußzeile, nicht aus dem Menü.

`content/production.md` beschreibt den Umzug nach Frankfurt und die Rollenteilung zwischen
Entwicklung in Mannheim und Betrieb in Frankfurt. Das ist die Seite, auf die bei Fragen zum
Produktivbetrieb verwiesen wird. `content/labs.md` fängt alte Labs-Links ab und ordnet die
früheren Funktionen den heutigen Angeboten zu.

## Fallstricke

- **`statistics.py` ist funktionslos.** Das Skript fragt
  `data.judaicalink.org/sparql/query` ab; der Endpoint liefert seit der Migration HTTP 500.
  Das Skript fängt den Fehler ab und schreibt eine **leere**
  `layouts/partials/statistics.html` – deshalb fehlt der Statistikblock auf der Startseite
  kommentarlos. Nicht als „Zahlen stimmen nicht" missdeuten: es werden gar keine geliefert.
  Das Portal in Frankfurt ermittelt seine Zahlen anders und zeigt sie korrekt an.
- **Die Suche auf `content/search.md` funktioniert im Browser nicht.**
  `static/js/search.js` ruft `http://search.judaicalink.org` auf. Der Host spricht kein TLS,
  die Seite läuft über HTTPS, der Browser blockiert die Anfrage als Mixed Content.
  Zusätzlich antwortet der Pfad `/search/<page>/<query>` mit 404. Die Trefferliste verlinkt
  `_id`, also alte `data.`-URIs, die heute nach Frankfurt zeigen – Index aus Mannheim,
  Ergebnisse aus Frankfurt.
- **Alle `data.judaicalink.org`-Links im Content sind `http://`**, rund 156 Stück. Sie
  funktionieren über Weiterleitung, sollten aber auf `https://` gezogen werden.
- **Navigation und Kontakt zeigen auf Labs.** `layouts/partials/header.html` verlinkt Suche,
  Kontakt und „Labs Home" nach `labs.judaicalink.org`, ebenso `content/faq.md` und
  `content/about-us.md`. Vor Abschaltung von Labs umhängen.
- **`content/about-us.md` ist auf dem Stand der HdM Stuttgart**, mit
  `@hdm-stuttgart.de`-Adressen und Links auf `wiss.iuk.hdm-stuttgart.de`.
- Vier Bilder in historischen News-Beiträgen fehlen (Drupal-Reste mit `?itok=`-Parametern).
  Lokale Dateien gibt es dazu nicht.

## Navigation und Responsiveness

Die Sidebar kennt zwei Mechaniken, abhaengig vom Breakpoint bei 540px: Auf breiten
Schirmen steht sie offen und `.nav-collapsed` auf `#sidebar` und `#content` klappt sie weg;
auf schmalen liegt sie ausserhalb des Viewports und `.nav-expanded` auf `#sidebar` schiebt
sie herein. Beide Klassen bedeuten genau eine Sache – die fruehere `.active` bedeutete je
nach Breakpoint das Gegenteil und war die Quelle mehrerer Fehler. Verschoben wird per
`transform`, nicht ueber negative Margins.

Den sichtbaren Zustand schreibt `static/js/nav.js` als `data-nav="open|closed"` an den
Button; die Icon-Regeln am Ende von `static/css/labs.css` haengen daran. Wer die Mechanik
aendert, muss beide Seiten anfassen.

Die Media Queries stehen **von gross nach klein**. Bei `max-width` gelten bei schmalem
Viewport alle Bloecke gleichzeitig, der zuletzt notierte gewinnt – in der urspruenglichen
Reihenfolge ueberschrieben die breiteren Bloecke die schmaleren.

Zum Testen: `hugo serve` und das Fenster verkleinern. Ein Iframe taugt nicht als
Ersatz – in der Browser-Automatisierung liefert er eingefrorene Stilwerte und damit
falsche Messungen.

## Teamseite

Die Seite nutzt ein eigenes Layout: `layouts/_default/about.html`, angezogen ueber
`layout: "about"` im Frontmatter von `content/about-us.md`. Links steht der Fliesstext
(Vision, dann Team mit Mannheim, Founder, ehemalige Mitglieder), rechts das Panel mit den
Frankfurter Ansprechpartnern aus `layouts/partials/team-frankfurt.html`.

Das **FID-Team in Frankfurt** steht dort, weil es Kontaktangaben sind und kein Fliesstext:
Karten ohne Fotos (`.team-external`, `.team-external-panel`), waehrend Mannheim im Text mit
Portraits erscheint (`.people`). Der Unterschied ist gewollt und markiert die verschiedenen
Rollen. Fotos des Frankfurter Teams gibt es nicht und sind nicht vorgesehen.

Namen und Durchwahlen stammen von
<https://www.jewishstudies.de/en/fid-jewish-studies/kontakt/>; dorthin wird auch verlinkt,
statt die Liste hier vollstaendig zu pflegen. Reihenfolge: Kerstin von der Krone,
Marie-Luise Schmidt, Aaron Christianson. Die Ueberschrift im Partial traegt die id
`the-fid-team-in-frankfurt`; `/production/` verlinkt darauf.

## Offene Punkte

- **Matomo.** Im Seitenkopf wird ein Matomo unter `//web.judaicalink.org/matomo/` ohne
  Einwilligung geladen. Zu klären ist zweierlei: ob dort überhaupt etwas erfasst wird, und
  wie das datenschutzrechtlich behandelt werden soll. Das Portal in Frankfurt betreibt
  Matomo nach Vorgabe des Datenschutzbeauftragten der Goethe-Universität im Opt-in; hier
  gibt es keine Einwilligungsabfrage. Nicht anfassen, bevor das entschieden ist.
  **Der Datenschutzabschnitt in `content/imprint.md` hängt daran** und beschreibt derzeit
  nur den Ist-Zustand; er ist im Quelltext entsprechend markiert.
- **Externe CDNs.** Bootstrap, jQuery, Popper, FontAwesome und ein Scrollbar-Plugin werden
  von fünf externen Hosts geladen. Für eine deutsche Seite ist das aus demselben Grund
  heikel wie Matomo. Lokales Ausliefern wäre die naheliegende Lösung.
- **`Dockerfile`** installiert Python und Hugo, hat aber mit `ENTRYPOINT ["python3", ""]`
  einen unbrauchbaren Einstiegspunkt. Die GitHub Action baut das Image nur, veröffentlicht
  es nicht. Ausgeliefert wird über die Skripte in `docker/site/`.

## Alte Links auffangen

Vorgesehen ist ein `/labs/`-Bereich auf dieser Seite, der erklärt, dass der Dienst nach
Frankfurt umgezogen ist, und auf das Portal verweist. `labs.judaicalink.org` wird vorerst
vollständig dorthin umgeleitet. Beim Anlegen darauf achten, dass die Erklärung auch für
Deep-Links trägt, die auf konkrete Labs-Funktionen zeigten (Suche, Kontakt, Issue-Tracker).
