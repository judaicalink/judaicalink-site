+++
slug = "ontology"
title = "JudaicaLink Ontology"
author = "Kai Eckert"
date = "2025-07-09"
website = "http://ontology.judaicalink.org"
example = "http://data.judaicalink.org/ontology/describedAt"
namespaces = ["ontology"]
stable = "2026-10-12"
kind = "ontology"
method = ["curated"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ontology"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "cc6b596ee5b2945858e78cc31841de925d903604"
description = "The ontology as of judaicalink-ontology 4597e7f, with the terms of pull requests 18 (Compact Memory, corpus presence), 19 (normalised person data) and 20 (entity pages)."

  [[versions.files]]
  path = "judaicalink-ontology.ttl.gz"
  bytes = 4330
  sha256 = "5aec92e621be7c079be0e9e6391c0877b00ac0fa903320a2ac007e3e19f322a0"
  triples = 380

  [[versions.files]]
  path = "ontology-meta.ttl.gz"
  bytes = 1666
  sha256 = "9e8a7904650dc2fc5fde3914888635a8b8e1e990b767883347c2baac231cf2fb"
  triples = 58

[[versions]]
version = "2025-11-27"
issued = "2025-11-27"
author = "Benjamin Schnabel"
description = "The ontology as of judaicalink-ontology b26c961, as served on ontology.judaicalink.org."

  [[versions.files]]
  path = "judaicalink-ontology.ttl.gz"
  bytes = 2802
  sha256 = "272c3c59db7b705a452793f8c152e7e739e79d17383f56a1fdb68af9315af09a"

  [[versions.files]]
  path = "ontology-meta.ttl.gz"
  bytes = 1710
  sha256 = "21762f0fca59f12e4326358643be3cac98db973d49409ac306143e31138561c8"
  triples = 57

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Version 2026-10-12 made the stable version (the data versions of 2026-10-12 use its terms)."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "New terms for Compact Memory and corpus presence, normalised person data and entity pages (decision 0020); comment of jl:represents corrected."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Licence name corrected to CC BY 4.0 (was \"CC4.0\"); the licence URI is unchanged."

[[changelog]]
date = "2020-09-29"
author = "Kai Eckert"
text = "Turtle file generated from the documentation."

[[changelog]]
date = "2018-07-26"
author = "Maral Dadvar"
text = "Ontology updated."

[[changelog]]
date = "2018-07-24"
author = "Kai Eckert"
text = "First version of the ontology documentation (judaicalink-ontology)."
+++
<!-- Copy of catalog/ontology.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
[JudaicaLink Ontology](https://ontology.judaicalink.org) This dataset provides the ontology for JudaicaLink. <!--more-->
It is used to describe the data in the JudaicaLink project, which includes various aspects of Jewish cultural heritage, such as texts, objects, and places.
The ontology is available in Turtle format and can be accessed through the provided URL. It is designed to be used with the JudaicaLink data, which is available in various formats, including RDF and JSON-LD.
