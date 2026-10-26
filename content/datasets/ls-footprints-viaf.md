+++
slug = "ls-footprints-viaf"
title = "Footprints persons linked to VIAF, judged one by one"
author = "Kai Eckert"
date = "2026-10-26"
example = "http://data.judaicalink.org/data/footprints/person/1371"
kind = "linkset"
stable = "2026-10-26"
method = ["rule-based", "llm-judged"]
inputs = ["footprints", "record-classes", "viaf"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["viaf"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-footprints-viaf"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "4147e17e10b2e7d3752aa9e5ce7b10455b38c639"
description = "Made from footprints 2026-10-26 and the judgements of 2026-10-26 (decision 0037)."

  [[versions.files]]
  path = "ls-footprints-viaf-decisions.tsv.gz"
  bytes = 53017
  sha256 = "4eacc8a8763b5427a0466392ce12968ed534bef48370497ddf90f3fbc3b10c45"

  [[versions.files]]
  path = "ls-footprints-viaf.ttl.gz"
  bytes = 11000
  sha256 = "61b64b5c2ba49da42472374bf47e2ec5a7734613f55c72d111a092165321218a"
  triples = 1185

  [[versions.files]]
  path = "ls-footprints-viaf-meta.ttl.gz"
  bytes = 2524
  sha256 = "624c0ceb5fa1be166965ebe53b942d4ccb1a42e71f6ba6f0f80ceb1676ee94a7"
  triples = 78

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "First version: 1,185 of the 1,556 VIAF numbers of footprints 2026-10-26, judged correct by rules and an LLM; left out 99 clusters not in viaf, 10 works, 140 judged wrong and 122 undecidable."
+++
<!-- Copy of catalog/ls-footprints-viaf.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The VIAF numbers that Footprints gives its persons, linked to the JudaicaLink record of the cluster in the dataset
viaf where rules and a large language model judged them correct: automatic linking, not checked by people.

<!--more-->

Footprints names a VIAF cluster for some of its persons. On a sample these links are 94% correct, below the quality
threshold of JudaicaLink, so the linkset of all VIAF links (ls-viaf) leaves them out (decision 0032). Here every link
was judged on its own (decision 0037): left out are clusters the dataset viaf does not have and links between a
person and a work; then a language model read what both sides say (names, life dates, the roles, books, dates and
places of the person in Footprints, the GND record and Wikidata item of the cluster) and judged each link correct,
wrong or undecidable. Only the links judged correct are in the linkset; the file of decisions gives the outcome and
the reason for every link.
