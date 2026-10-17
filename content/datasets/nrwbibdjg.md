+++
slug = "nrwbibdjg"
title = "Bibliografie deutsch-jüdische Geschichte Nordrhein-Westfalen"
author = "Kai Eckert"
date = "2024-06-03"
website = "https://www.steinheim-institut.de/ebib-djg-nrw/"
example = "http://data.judaicalink.org/data/nrwbibdjg/112504981"
namespaces = ["nrwbibdjg"]
stable = "2026-10-18"
kind = "records"
method = ["scraped", "deterministic", "rule-based"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/nrwbibdjg"

[[versions]]
version = "2026-10-18"
issued = "2026-10-18"
author = "Kai Eckert"
commit = "5601068c22b0be99ec3c864163e3e75b70681015"
description = "Made from a new harvest of the bibliography (BEACON and the list of titles per GND number, 2026-10-17)."

  [[versions.files]]
  path = "nrwbibdjg.ttl.gz"
  bytes = 361897
  sha256 = "215ea3c4060b9aed6b472b63c0a9d5d9b6d78180480e5d7abb58821418a63e37"
  triples = 24475

  [[versions.files]]
  path = "nrwbibdjg-meta.ttl.gz"
  bytes = 2410
  sha256 = "411023a6057436a7fa32164f5ea501d683497ada6b596820aa1a9fcee1079b42"
  triples = 77

[[versions]]
version = "2024-05-24"
issued = "2024-05-24"
author = "Christian Deuschle"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "nrwbibdjg.ttl.gz"
  bytes = 371256
  sha256 = "08f2b63608d13f203b4a1c81f97227849585923049e0f1be7b1d9d62408ab466"

  [[versions.files]]
  path = "nrwbibdjg-meta.ttl.gz"
  bytes = 1960
  sha256 = "ba6dd259c1c7eac0f847faf33dc03703f71fe2b3228687c06476d2df7bfea0ec"
  triples = 58

[[changelog]]
date = "2026-10-18"
version = "2026-10-18"
author = "Kai Eckert"
text = "New harvest: 2,250 works with IRIs from the bibliography's ids (the IRIs of 2024 replaced); authors, editors and subjects told apart (2024 stated every listed person as author); links to the GND instead of copied GND data."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Licence name corrected to CC BY 4.0 (was \"CC4.0\"); the licence URI is unchanged."

[[changelog]]
date = "2024-12-03"
author = "Benjamin Schnabel"
text = "Description revised (again 2025-03-21 and 2025-12-18)."
+++
<!-- Copy of catalog/nrwbibdjg.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The **Bibliografie deutsch-jüdische Geschichte Nordrhein-Westfalen** (Bibliography of German-Jewish History in North Rhine-Westphalia) dataset provides bibliographic references on the history and culture of Jews in the region of North Rhine-Westphalia (NRW), Germany.
<!--more-->
The bibliography compiled and constantly updated by Harald Lordick with its almost 7,000 references can be researched as an online catalogue on the Steinheim Institute's website. 
It works with georeferencing and with Linked Open Data (Gemeinsame Normdatei, GND). A corresponding BEACON file is available. The database system (in-house development) is based on XML/XSLT. 

The dataset holds the titles that the catalogue lists for the persons, places and organisations of its BEACON file (about 2,250 of the titles), with their authors, editors and subjects, linked to the GND.
