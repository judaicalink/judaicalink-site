+++
slug = "ls-gnd"
title = "Links to the GND records"
author = "Kai Eckert"
date = "2026-10-16"
example = "http://data.judaicalink.org/data/bhr/1"
kind = "linkset"
stable = "2026-10-19"
method = ["deterministic"]
inputs = ["gnd"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["gnd"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-gnd"

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-gnd.ttl.gz"
  bytes = 1384243
  sha256 = "536817e13cea4f8cf1eb8602f836aaf0cead2ecbdf8c35dccfe5009bf7c0e09f"
  triples = 138571

  [[versions.files]]
  path = "ls-gnd-meta.ttl.gz"
  bytes = 2670
  sha256 = "01d64e32838790d8a5c444e8a15d64e9acf6f4e3cadff48ea3531762ccf06406"
  triples = 146

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "Made from gnd 2026-10-19 with the declared identity of every dataset (0032): 138,571 links; links of units below the quality threshold left out (footprints 951)."
+++
<!-- Copy of catalog/ls-gnd.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Every JudaicaLink record that refers to a GND entry, linked to the JudaicaLink record of the current entry in the
dataset gnd.

<!--more-->

The links rely on the identity statements our datasets and the other authority datasets make, as each catalogue entry
declares them (decision 0032), and on the replacements of identifiers that the GND itself states (dataset `gnd`,
whose description says how its records are made). A reference to a deprecated identifier, or to one the dataset `gnd`
does not have, is left out; so are the links of a dataset whose measured link quality is below the threshold, and
links between a person, a work and a place. These links are what joins the records of different datasets on the
entity pages (decision 0029).
