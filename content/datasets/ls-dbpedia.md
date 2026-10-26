+++
slug = "ls-dbpedia"
title = "Links to the Wikipedia articles"
author = "Kai Eckert"
date = "2026-10-18"
example = "http://data.judaicalink.org/data/bhr/1"
kind = "linkset"
stable = "2026-10-26"
method = ["deterministic"]
inputs = ["dbpedia"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["wikipedia-en", "wikipedia-de"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-dbpedia"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-dbpedia.ttl.gz"
  bytes = 2073530
  sha256 = "8e261113f2662a71197549fd5fbe4f128e249cc87c19978d7f105c7ede044dcd"
  triples = 162507

  [[versions.files]]
  path = "ls-dbpedia-meta.ttl.gz"
  bytes = 2531
  sha256 = "3c09a5e83aa6edfce19a46dbf72a9df4312622f0d9e5d1b935a32b729d70475b"
  triples = 135

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-dbpedia.ttl.gz"
  bytes = 2091351
  sha256 = "14f33e195a1f52de88122243f06f72a264827e315fca591cd22325bc88adefd4"
  triples = 164173

  [[versions.files]]
  path = "ls-dbpedia-meta.ttl.gz"
  bytes = 2664
  sha256 = "e595fd25c9eb9c446efa77050152e482e4e17a39c1456bef9a158caccada36e6"
  triples = 147

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version in the cascade of 2026-10-26: with the VIAF and GeoNames identifiers of footprints 2026-10-26 (from the Footprints API), without the records only the withdrawn 2014links and the former footprints version led to."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "First version: 164,173 links to the current English and German articles (old titles followed)."
+++
<!-- Copy of catalog/ls-dbpedia.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Every JudaicaLink record that refers to an English or German Wikipedia article (or its DBpedia resource), linked to
the JudaicaLink record of the current article in the dataset dbpedia.

<!--more-->

An old title is followed to the current article (Wikipedia renames articles; decision 0031). A title that no longer
exists, or that the dataset dbpedia does not have, is left out. These links join the records of different datasets
on the entity pages (decision 0029).
