+++
slug = "gnd"
title = "GND (Gemeinsame Normdatei): the records JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-16"
website = "https://data.dnb.de/opendata/"
example = "http://data.judaicalink.org/data/gnd/118540238"
kind = "authority"
method = ["converted"]
namespaces = ["gnd"]
replaces = ["gnd-persons", "gnd-persons-entityfacts"]
stable = "2026-10-26"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["viaf", "lc-names", "wikidata", "geonames", "isni", "wikipedia-en", "wikipedia-de"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
statement = "https://web.archive.org/web/20260624101124/https://data.dnb.de/opendata/"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/gnd"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "gnd-selection.tsv.gz"
  bytes = 1105497
  sha256 = "44d10d20339bd826ae7b8955d24d82b28455e3973df4adf3ac33e4f1e6e2fbd7"

  [[versions.files]]
  path = "gnd.ttl.gz"
  bytes = 18968733
  sha256 = "4bc54107d96609c956b457bbd5a0998ee32cc28ce383713e4e184d59f7db0de1"
  triples = 2277189

  [[versions.files]]
  path = "gnd-meta.ttl.gz"
  bytes = 4329
  sha256 = "b16c4f1236253b9da236186b576378044558653bbdbe9d7580b83d77bcd65bf7"
  triples = 175

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "gnd-selection.tsv.gz"
  bytes = 1108247
  sha256 = "9ccc5150d3890bdf4526780eafb62553d43ccc1a9729b9f8f874b6de64580cc5"

  [[versions.files]]
  path = "gnd.ttl.gz"
  bytes = 19032050
  sha256 = "92c5ba1df648c7f52267afc32287ad8b6a2f5f70d73b5adb8f3a51ccc850b514"
  triples = 2284936

  [[versions.files]]
  path = "gnd-meta.ttl.gz"
  bytes = 4350
  sha256 = "02c5e06c27ffd4c135da5614eb9ab440d5e0d3db1b9342fef857d1f059c7645a"
  triples = 181

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "7d4339fdcb7ee96c413ce07b5bc6a91bb4f36509"
description = "The GND records JudaicaLink uses, from the DNB dumps (GND 2026-02-17, EntityFacts and redirects 2026-10-13): every GND record our datasets link, the Freimann and UB Frankfurt lists, and every record of gnd-persons 2018."

  [[versions.files]]
  path = "gnd-selection.tsv.gz"
  bytes = 594947
  sha256 = "192c67a6609be89af0cb233b5c33ba5c877d00603886b347498ec74a4e37361c"

  [[versions.files]]
  path = "gnd.ttl.gz"
  bytes = 11973998
  sha256 = "553d87cf4518115fc5114a9f74eb2f73fafc0128187d0c667fa53f2702db2be9"
  triples = 1419588

  [[versions.files]]
  path = "gnd-meta.ttl.gz"
  bytes = 4048
  sha256 = "55e42219b662342d6c6acc524ed3fb9e7a37154ff0399860676a6f834f3ae0d9"
  triples = 179

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version in the cascade of 2026-10-26: with the VIAF and GeoNames identifiers of footprints 2026-10-26 (from the Footprints API), without the records only the withdrawn 2014links and the former footprints version led to."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "Made in the cascade of the authority datasets (0029): 68,768 records our datasets and the other authority datasets link by their declared identity, and the lists of UB Frankfurt and gnd-persons; EntityFacts links with an unfilled [ID] left out; the classes of the common layer."

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "First version (decision 0029): 42,207 records with the GND's statements, our terms, and the links of EntityFacts; replaces gnd-persons (2018-11-29) and gnd-persons-entityfacts."
+++
<!-- Copy of catalog/gnd.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The records of the Gemeinsame Normdatei (GND) of the Deutsche Nationalbibliothek that JudaicaLink uses: every GND
record that one of our datasets or another authority dataset links, the persons of two lists of UB Frankfurt (the Freimann collection and the
UB's person records), and every record of the former gnd-persons.

<!--more-->

The GND is the authority file of the German-speaking libraries: its records (persons, organisations, places, works,
subject headings) are made and maintained by cataloguers of the participating libraries, by the rules of the GND.
They are among the most reliable identifiers we link; errors are reported to the DNB.

The dataset is made from the dumps of the GND Linked Data Service and of DNB EntityFacts (CC0); the file names and
versions of the dumps are in the metadata of each version. Each record keeps the GND's own statements, with the
GND's IRIs in their canonical form (`https://d-nb.info/gnd/<number>`), and in addition the JudaicaLink and SKOS
terms that the other datasets use (names, dates, places of birth and death, occupations). The links of EntityFacts
to other authority files (VIAF, LC, ISNI, Wikidata, …) are added. Identifiers the GND has replaced are stated with
`dcterms:isReplacedBy`, deleted ones that our data cites with `owl:deprecated` (decision 0029).

`gnd-selection.tsv.gz` lists why each record is included: one row per GND number and reason (linked by a dataset,
or one of the selection rules), with the current number the GND gives for it.
