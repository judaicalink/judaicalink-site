+++
slug = "ls-geonames"
title = "Links to the GeoNames records"
author = "Kai Eckert"
date = "2026-10-16"
example = "http://data.judaicalink.org/data/geo-coordinates/Jerusalem"
kind = "linkset"
stable = "2026-10-26"
method = ["deterministic"]
inputs = ["geonames"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["geonames"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-geonames"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-geonames.ttl.gz"
  bytes = 141102
  sha256 = "216a7b8e9d4c7fab44dae324e8eeb8925f6441a9fd50f3806f4b693067e15481"
  triples = 15949

  [[versions.files]]
  path = "ls-geonames-meta.ttl.gz"
  bytes = 2494
  sha256 = "e6af69470834039b0f985249385d565bc8f1d452067151160a52d2e0e6e83d62"
  triples = 134

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-geonames.ttl.gz"
  bytes = 136596
  sha256 = "96eb2fceab9c2fc9242c4a3c9fe302328df111cc97820a615a9c264eec665d5b"
  triples = 15362

  [[versions.files]]
  path = "ls-geonames-meta.ttl.gz"
  bytes = 2576
  sha256 = "65e703a7fbd1998253627e88f54106f7ce057ab3a9245cc0f27f1c011bf93e4b"
  triples = 146

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version in the cascade of 2026-10-26: with the VIAF and GeoNames identifiers of footprints 2026-10-26 (from the Footprints API), without the records only the withdrawn 2014links and the former footprints version led to."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "Made from geonames 2026-10-19 with the declared identity of every dataset: 15,362 links; the links of 2014links left out (below the quality threshold)."
+++
<!-- Copy of catalog/ls-geonames.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Every JudaicaLink record that refers to a GeoNames entry, linked to the JudaicaLink record of the current entry in
the dataset geonames.

<!--more-->

The links rely on the identity statements our datasets and the other authority datasets make, as each catalogue entry
declares them (decision 0032); the dataset `geonames` says how GeoNames is made. A reference to a deprecated
identifier, or to one the dataset `geonames` does not have, is left out; so are the links of a dataset whose measured
link quality is below the threshold, and links between a person, a work and a place. These links are what joins the
records of different datasets on the entity pages (decision 0029).
