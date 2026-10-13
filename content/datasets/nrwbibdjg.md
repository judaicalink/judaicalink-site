+++
slug = "nrwbibdjg"
title = "Bibliografie deutsch-jüdische Geschichte Nordrhein-Westfalen"
author = "Kai Eckert"
date = "2024-06-03"
website = "http://www.steinheim-institut.de/ebib-djg-nrw/"
example = "http://data.judaicalink.org/data/nrwbibdjg/112504981"
namespaces = ["nrwbibdjg"]
stable = "2024-05-24"
kind = "records"
method = ["converted", "lookup"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/nrwbibdjg"

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

The dataset includes the titles provided by the Steinheim Institute, enriched with data about the authors from the GND.
