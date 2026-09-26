# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.2.0] - 2026-09-25
### Changed
- `legal.md` zu `imprint.md` umbenannt und aktualisiert: Mannheim Technical University,
  aktuelle Anschrift und Telefonnummer, Datenschutzabschnitt am tatsaechlichen Ist-Zustand
  ausgerichtet. Aliasse `/legal/` und `/disclaimer/` bleiben bestehen. Nur noch in der
  Fusszeile verlinkt, nicht mehr im Menue.
- Menue neu geordnet: About direkt unter Home, Verweis auf Frankfurt abgesetzt am Ende in
  einem eigenen Block; die doppelten Frankfurt-Eintraege (FID und Suche) zu einem
  zusammengefasst.
- Hochschulname auf aktuellen Seiten vereinheitlicht: englisch Mannheim Technical
  University, im Impressum ergaenzt um den juristischen Namen Technische Hochschule
  Mannheim. In historischen News-Beitraegen bleibt der damalige Name stehen.
- Redaktionelle Neuausrichtung: JudaicaLink laeuft produktiv im FID-Portal in Frankfurt,
  diese Seite ist die Seite des Mannheimer Entwicklungsprojekts. Prominente Verweise auf
  das Portal auf Startseite, Datasets- und Suchseite.
- Startseite neu gefasst; Statistikblock entfernt.
- about-us neu gegliedert: Vision zuerst, danach Team. Das FID-Team in Frankfurt
  (Kerstin von der Krone, Marie-Luise Schmidt, Aaron Christianson) steht als
  Ansprechpartner fuer Inhalte und Produktivbetrieb in der rechten Spalte, mit Link auf
  die Kontaktseite im FID-Portal; im Fliesstext links JudaicaLink in Mannheim
  (Kai Eckert), Dov Winer als Founder und die ehemaligen Mitglieder, ergaenzt um
  Marco Rovera.
- Das Frankfurter Team wird bewusst anders dargestellt als das Mannheimer: Karten ohne
  Fotos statt Portraitkreise, passend zur unterschiedlichen Rolle.
- Eigenes Layout `layouts/_default/about.html` fuer die Teamseite, Inhalt der rechten
  Spalte in `layouts/partials/team-frankfurt.html`.
- Navigation und Fusszeile von labs.judaicalink.org geloest; FID-Links auf
  jewishstudies.de gesetzt.

### Changed
- Hugo auf 0.166.0 (extended) aktualisiert; alte Binaries (0.18.1, 0.73.0) entfernt. Der
  Binary wird nicht mehr eingecheckt (war ohnehin schon gitignored), README nennt die
  Version, CLAUDE.md dokumentiert den reproduzierbaren Download inklusive
  Checksummenpruefung.
- `config.toml`: `languageCode` zu `locale` umbenannt (Hugo-Deprecation seit 0.158.0).
- `.hugo_build.lock` aus dem Git-Tracking entfernt (war vor der .gitignore-Regel
  eingecheckt worden, leere Datei ohne Funktion).

### Fixed
- Tippfehler im Datum von `content/datasets/hhkeydocs.md` (`2023-011-22`), der von Hugo
  0.73.0 toleriert wurde, den Build unter 0.166.0 aber hart abbrechen liess.
- Hamburger-Menue und Sidebar funktionieren wieder. Die Logik steckte in
  `static/js/search.js` und war mit der Suche entfernt worden; sie liegt jetzt in
  `static/js/nav.js`. Zugleich war sie an den Scrollbar-Plugin gekoppelt: fiel der aus,
  wurde der Click-Handler nie gebunden. Der Plugin-Aufruf ist jetzt optional.
- Sidebar-Mechanik eindeutig gemacht: statt `.active` mit je nach Breakpoint
  umgekehrter Bedeutung nun `.nav-collapsed` (breit) und `.nav-expanded` (schmal),
  umgesetzt per `transform` statt negativer Prozent-Margins. Der sichtbare Zustand
  steht als `data-nav` am Button; daran haengt das Icon.
- Im Button wurden beide Icons gleichzeitig angezeigt; jetzt genau eines.
- Media Queries von gross nach klein sortiert. Vorher stand der 540er-Block zuerst und
  wurde von den breiteren Bloecken ueberschrieben, was unter anderem den
  Hamburger-Button verschob.
- Barrierefreiheit: `aria-expanded`, `aria-controls` und `aria-label` am Button.
- Copyright-Zeile rendert wieder das laufende Jahr (`now.Format "2023"` ergab 2013-252512).
- Verirrtes `">` im Seitenkopf entfernt.
- Seitentitel: jede Seite traegt ihren eigenen Titel statt durchgaengig "JudaicaLink".
- Ungueltiges `width="200px"`, unquotierte id-Attribute, fehlende rel="noopener",
  fehlender Slash im Datasets-Link, doppelt eingebundenes FontAwesome.
- Fehlendes News-Bild nach static/img/news/ kopiert.

### Removed
- 36 Dataset-Seiten und die zugehoerigen Templates; die Dokumentation wird im
  Frankfurter Katalog gepflegt.
- Defekte Suche (`static/js/search.js`) samt Suchseite; Verweis auf die Graph Search.
- `statistics.py` und das leere Partial `layouts/partials/statistics.html`.
- Leere Datei `content/disclaimer`.
- `generate_beacon.py`; die BEACON-Datei wird in Frankfurt erzeugt. Damit entfaellt auch
  `requirements.txt`, das nur von diesem Skript und von `statistics.py` gebraucht wurde.

### Added
- 16 News-Beitraege fuer den Zeitraum 2022 bis 2026, der bisher unbesetzt war (letzter
  Beitrag: 01.03.2023): vier Publikationen, fuenf neue Datensaetze, die Bewilligung der
  vierten Foerderphase, zwei Wikidata-/Normdaten-Workshops, drei Migrationsmeilensteine
  und DjangoRDF. Beitraege mit nicht belegtem Datum tragen einen TOML-Kommentar
  `# HINWEIS` im Frontmatter; der wird nicht ausgeliefert.
- `/production/` beschreibt den Umzug nach Frankfurt, die technischen Aenderungen und die
  Rollenteilung zwischen Entwicklung in Mannheim und Betrieb in Frankfurt; in Navigation,
  Startseite und Labs-Seite verlinkt.
- Alte SPARQL-Links in vier News-Beitraegen deaktiviert und mit datiertem Update-Hinweis
  auf `/production/` versehen.
- `/labs/` erklaert den Umzug und ordnet alte Labs-Funktionen den Angeboten in
  Frankfurt zu.
- `CLAUDE.md` mit redaktioneller Linie, Systemlandschaft und Fallstricken.
- `docker/nginx/sites-available/labs-redirect.conf` als Vorlage fuer die Umleitung.

## [0.1.2] - 2022-04-21
### Added
- 404 error page template.
- Css class for button.
- Image for error page (new_synagogue_berlin.jpg)

## [0.1.1] - 2021-04-04
### Added
- News overview page as grid layout.
- News overview and single page have an image.
- Counter counts daily statistics and updates the partial file.

## Removed
- Old image for news overview page.
- Hardcoded statistics.

## [0.1]

### Added
- Hugo project
- Layout
- Bootstrap 4
- Static files: CSS, JS, images
- Texts:
  - News
  - Datasets
  - About us
  - Legal
  - FAQ
  - Search
