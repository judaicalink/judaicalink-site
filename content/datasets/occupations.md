+++
slug = "occupations"
title = "Occupations"
author = "Kai Eckert"
date = "2025-12-18"
example = "http://data.judaicalink.org/data/occupation/Rabbiner"
namespaces = ["occupation"]
kind = "vocabulary"
method = ["converted", "rule-based", "curated"]
inputs = ["gnd", "records-normalized", "bhr", "sosy", "dbpedia"]
stable = "2026-10-31"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/occupations"

[[versions]]
version = "2026-10-31"
issued = "2026-10-31"
author = "Kai Eckert"
commit = "e6cb5ca8e1accf22ee7de48fd456fb56042e99e6"
description = "The 2,535 GND subject headings of the occupations of gnd and their broader headings; the 484 older occupation IRIs, 482 linked to their heading."

  [[versions.files]]
  path = "occupations.ttl.gz"
  bytes = 87268
  sha256 = "ff4350dc706d166346a99a055d7dca939562445abc31adf26fc6f78c502954ad"
  triples = 16279

  [[versions.files]]
  path = "occupations-meta.ttl.gz"
  bytes = 2335
  sha256 = "5e9f3091bfab79c921a7aba58a18053f84eddee959738e9994b3bb3ab450a699"
  triples = 80

[[changelog]]
date = "2026-10-31"
version = "2026-10-31"
author = "Kai Eckert"
text = "First version, from a new generator (decision 0039): the GND subject headings that gnd names as occupations, and the occupation IRIs of the older datasets, which nothing described, linked to them. CC0 like the rest of the data."

[[changelog]]
date = "2025-12-18"
author = "Benjamin Schnabel"
text = "Entry and generator added (judaicalink-generators); no dump of this dataset was found."
+++
<!-- Copy of catalog/occupations.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The occupations of JudaicaLink as concepts. All statements about occupations are in this dataset; the other datasets
only link to them.
<!--more-->

**GND occupations.** The GND names the occupations of persons with its subject headings. The dataset `gnd` links its
records to them (`jl:occupationURI`); this dataset describes them, with the broader headings up to the top: German
preferred and variant names (`skos:prefLabel`, `skos:altLabel`), the broader terms (`skos:broader`) and the GND subject
categories. The headings keep the GND's IRIs.

**Older occupation IRIs.** The datasets of 2018 made occupation IRIs from names, e.g.
`http://data.judaicalink.org/data/occupation/Rabbiner` (the GND's German names, gnd-persons) and
`http://data.judaicalink.org/data/occupation/musician` (English DBpedia categories, dbpedia-persons). records-normalized,
bhr, sosy and dbpedia still state them. Each gets its name with its language and a link to its GND heading
(`skos:exactMatch`): German names by the heading of that name, or of that variant name; English names by a table
chosen by hand. Mohel and Rebbetzin have no GND heading.
