+++
slug = "ls-lc"
title = "Links to the LC Name Authority File records"
author = "Kai Eckert"
date = "2026-10-16"
example = "http://data.judaicalink.org/data/nli/record/viaf-100219535"
kind = "linkset"
stable = "2026-10-26"
method = ["deterministic"]
inputs = ["lc"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["lc-names"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-lc"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-lc.ttl.gz"
  bytes = 3239431
  sha256 = "72bb6b9400946258d27613c3a7cae4a9e26f4cc1cd2697be02d6686ee5d137cb"
  triples = 313041

  [[versions.files]]
  path = "ls-lc-meta.ttl.gz"
  bytes = 2555
  sha256 = "32c2e76ace9b8a27eccc4e5c6e9d9dc6d3d9f3b69d359ec0a20f4aa2557b865b"
  triples = 134

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-lc.ttl.gz"
  bytes = 3244011
  sha256 = "ebab6bce12c790df7b28f4da8f5b5ea91632526fe8c62c589453e8d1655d1947"
  triples = 313533

  [[versions.files]]
  path = "ls-lc-meta.ttl.gz"
  bytes = 2633
  sha256 = "571172b66d95bf6c0ab9612277904202c90733003cdf7b96d12fe8885a7e63ec"
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
text = "Made from lc 2026-10-19 with the declared identity of every dataset: 313,533 links; 28 left out for contradicting classes (a person and the LC record of a work)."
+++
<!-- Copy of catalog/ls-lc.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Every JudaicaLink record that refers to an LC Name Authority File entry, linked to the JudaicaLink record of the
current entry in the dataset lc.

<!--more-->

The links rely on the identity statements our datasets and the other authority datasets make, as each catalogue entry
declares them (decision 0032); the dataset `lc` says how LC's records are made. A reference to a deprecated
identifier, or to one the dataset `lc` does not have, is left out; so are the links of a dataset whose measured link
quality is below the threshold, and links between a person, a work and a place. These links are what joins the
records of different datasets on the entity pages (decision 0029).
