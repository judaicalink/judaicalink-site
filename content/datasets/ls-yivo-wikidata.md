+++
slug = "ls-yivo-wikidata"
title = "YIVO Encyclopedia articles linked to Wikidata"
author = "Kai Eckert"
date = "2026-10-12"
example = "http://data.judaicalink.org/data/yivo/abramovich_rafail"
kind = "linkset"
method = ["lookup"]
inputs = ["yivo"]
stable = "2026-10-12"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["wikidata"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-yivo-wikidata"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "8255612e31d1e6e4ac6dd976e47b3db40187d161"
description = "The YIVO articles with exactly one Wikidata item (P8569, query of 2026-10-12) linked to it."

  [[versions.files]]
  path = "ls-yivo-wikidata.ttl.gz"
  bytes = 20313
  sha256 = "0bc5a37278a875ecc95d36800ebe5b79dcc92ca9b8332fabebc18c0a36cf5c7d"
  triples = 1438

  [[versions.files]]
  path = "ls-yivo-wikidata-meta.ttl.gz"
  bytes = 2093
  sha256 = "7087e201c622affbd3e46ee7c668410353c11efd572c4b8fb5ec10894e23436b"
  triples = 60

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version (decision 0025): 1,438 of the 1,798 yivo articles owl:sameAs their Wikidata item; 5 articles with several items left out."
+++
<!-- Copy of catalog/ls-yivo-wikidata.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The articles of the YIVO Encyclopedia of Jews in Eastern Europe (dataset yivo) linked to their Wikidata items.

<!--more-->

Wikidata names the YIVO article of an item with the property P8569 (YIVO Encyclopedia of Jews in Eastern Europe ID).
Every yivo record whose article has exactly one Wikidata item gets `owl:sameAs` that item; articles with several
items are left out. The links join the YIVO articles with the other records about the same person, place or
organisation on the entity pages.
