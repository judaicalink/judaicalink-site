+++
slug = "ls-wikidata"
title = "Links to the Wikidata records"
author = "Kai Eckert"
date = "2026-10-18"
example = "http://data.judaicalink.org/data/yivo/abramovich_rafail"
kind = "linkset"
stable = "2026-10-26"
method = ["deterministic", "rule-based"]
inputs = ["wikidata", "yivo", "bhr", "rujen", "dbpedia-persons"]
replaces = ["ls-yivo-wikidata"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["wikidata"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-wikidata"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-wikidata.ttl.gz"
  bytes = 2208999
  sha256 = "4a91d644da2404e50ff7c68cc0b4364102f918b2886db5f65626a56dc65f9cd0"
  triples = 201514

  [[versions.files]]
  path = "ls-wikidata-meta.ttl.gz"
  bytes = 2747
  sha256 = "40f537562ab90fb2021fc4d4da28ff7c6dae84a0d5073c690d8bec1e394a4cdc"
  triples = 144

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-wikidata.ttl.gz"
  bytes = 2226494
  sha256 = "5c52dd8ea2345afe5cc20f32ff13db8722c13611fdae7d8bca2e119d77d85a32"
  triples = 203139

  [[versions.files]]
  path = "ls-wikidata-meta.ttl.gz"
  bytes = 2840
  sha256 = "b44028ed18099e32aed6ca005a0ac36ac42d4fab6b3932d58b7dd9adbac86f4d"
  triples = 156

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version in the cascade of 2026-10-26: with the VIAF and GeoNames identifiers of footprints 2026-10-26 (from the Footprints API), without the records only the withdrawn 2014links and the former footprints version led to."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "First version, replacing ls-yivo-wikidata: 203,139 links to the Wikidata items, also by the YIVO, BHR and rujen identifiers Wikidata states (2,506)."
+++
<!-- Copy of catalog/ls-wikidata.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Every JudaicaLink record that is a Wikidata item, linked to the JudaicaLink record of the current item in the
dataset wikidata.

<!--more-->

The links come from the Wikidata identifiers our datasets and the other authority datasets state, resolved through
the replacements Wikidata states (dataset `wikidata`), and from the identifiers of our sources that Wikidata states:
the articles of the YIVO Encyclopedia, the Biographisches Portal der Rabbiner and the Encyclopedia of Russian Jewry.
These are linked only where the match is unique in both directions. The Wikipedia articles (dataset `dbpedia`) name
their items themselves. The links join the records of different datasets on the entity pages (decision 0029).
