+++
slug = "gnd-persons"
title = "Persons from GND"
author = "Kai Eckert"
date = "2018-07-25"
example = "http://data.judaicalink.org/data/gnd/102182094"
namespaces = ["gnd"]
stable = "2018-11-29"
kind = "authority"
method = ["converted", "lookup"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/gnd-persons"

[files]
"generated_persons_GND.ttl.gz" = "Rabbis and people from Israel, extracted from GND."
"generated_persons_GND_enriched.ttl.gz" = "Persons extracted from GND enriched with further information such as date and place of birth and death."
"Freimann-GND-enriched-05.ttl.gz" = "Persons extracted from GND that have been identified within the Freimann collection of the University Library of Frankfurt"
"ub-authors.ttl.gz" = "All the authors from University Library of Frankfurt collection who had a Tp GND-id."
"Entityfacts-freimann-sameas.ttl.gz" = "The EntityFacts links of the persons in the current datasets"
"jl-zbw.ttl.gz" = "This dataset contains common links between JudaicaLink datasets and Pressemappe 20. Jahrhundert. The 20th century press kit offers thematically compiled dossiers with newspaper articles, company publications and other topics from a wide range of economically, politically or socially relevant topics. In their press archives in Kiel and Hamburg, the predecessor institutions of the ZBW - Leibniz Information Center for Economics have collected and prepared material on persons, companies / institutions, goods and subjects from more than 1500 publications for almost one hundred years. They are gradually being developed with appropriate metadata and made publicly available through the Press Kit 20th Century Application (PM20).http://webopac0.hwwa.de/PresseMappe20/index.cfm"

[[versions]]
version = "2018-11-29"
issued = "2018-11-29"
author = "Maral Dadvar"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "generated_persons_GND.ttl.gz"
  bytes = 288346
  sha256 = "ab4565b96130b30f1a73ec7ce18f1d2a0ba63e51d9e0d24577147a20bf5ea55c"

  [[versions.files]]
  path = "generated_persons_GND_enriched.ttl.gz"
  bytes = 339726
  sha256 = "a0e44d4858926dede65493f4b4da23df8137d4fca6ac03a382920323ffc3672e"

  [[versions.files]]
  path = "Freimann-GND-enriched-05.ttl.gz"
  bytes = 35454
  sha256 = "c47cba2d316625202e97e2328266e0e1d6289af70ae1303292da2a9c83c1dcb2"

  [[versions.files]]
  path = "ub-authors.ttl.gz"
  bytes = 2407331
  sha256 = "1399b7c2b1695b151917f398f63e78fa7207e475d0ef256bc8173112597046e3"

  [[versions.files]]
  path = "Entityfacts-ubgnd-sameas.ttl.gz"
  bytes = 1907589
  sha256 = "3f41408595864abfd4b1d01baebc3f08fb61799f4ba73642a4140bcd9e6f8fcd"

  [[versions.files]]
  path = "Entityfacts-gnd-sameas.ttl.gz"
  bytes = 213523
  sha256 = "b13b59fa8113da1d0f6105f34efebba0a9b5e7c8fa7981e98c29c2c24b2ca6f5"

  [[versions.files]]
  path = "Entityfacts-freimann-sameas.ttl.gz"
  bytes = 35142
  sha256 = "4c5f08614b7689d04b0aae34e1828d69c5c1a3b62f724943bf29e2729e7459bf"

  [[versions.files]]
  path = "jl-zbw.ttl.gz"
  bytes = 5731
  sha256 = "58dc19daf6495f84e78110c0c3472692736f4b2ff911caa4b3b82eba2c73b1d9"

  [[versions.files]]
  path = "gnd-persons-meta.ttl.gz"
  bytes = 3076
  sha256 = "605ae8190aca00debff083f57d741209297cfc9dd45d003ed21080d7f77bd4ac"
  triples = 146

[[changelog]]
date = "2026-10-16"
author = "Kai Eckert"
text = "Superseded by gnd (the GND records JudaicaLink uses, from the DNB dumps), which keeps every record of this dataset under the same IRI and its selection rules (the Freimann and UB Frankfurt lists; the rule of 2017 as `previous`)."
refs = ["0029"]

[[changelog]]
date = "2018-11-01"
author = "Maral Dadvar"
text = "EntityFacts links added."

[[changelog]]
date = "2018-07-25"
author = "Maral Dadvar"
text = "Authors of the University Library Frankfurt added (ub-authors.ttl.gz)."

[[changelog]]
date = "2018-02-13"
author = "Maral Dadvar"
text = "Enriched persons and the Freimann collection added."

[[changelog]]
date = "2017-04-21"
author = "Maral Dadvar"
text = "First version (generated_persons_GND.ttl.gz)."
+++
<!-- Copy of catalog/gnd-persons.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Persons from the Common Authority File (Gemeinsame Normdatei, GND) of the German National Library.
<!--more-->

Within this dataset, we collect data extracted from the GND. See descriptions of the single files for furter information.
