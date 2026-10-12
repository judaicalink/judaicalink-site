+++
slug = "judaicalink-vocabulary"
title = "JudaicaLink dataset vocabulary"
author = "Kai Eckert"
date = "2026-10-11"
example = "http://data.judaicalink.org/datasets/vocabulary/method/ai-generated"
stable = "2026-10-12"
kind = "vocabulary"
method = ["curated"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/judaicalink-vocabulary"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "60eec2e747b7fe4cd05e84ad2a62c8fa694b3266"

  [[versions.files]]
  path = "judaicalink-vocabulary.ttl.gz"
  bytes = 1866
  sha256 = "07e6b26a7c26afbca1c6694da50ff8eb37a357b86cd8054f549ea247a6d6ac6c"
  triples = 133

  [[versions.files]]
  path = "judaicalink-vocabulary-meta.ttl.gz"
  bytes = 1519
  sha256 = "ef227244f8769f01a85b2ec6def1cd0b84bf08f990b47e44629d298134fdf8ed"
  triples = 55

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: 8 kinds, 9 methods, and the derived concept method/automated."
+++
<!-- Copy of catalog/judaicalink-vocabulary.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The kinds of JudaicaLink datasets and the methods by which they are made, as SKOS concepts.

<!--more-->

The metadata of every dataset version (its `-meta` file) states what kind of dataset it is (records, complement,
linkset, entity pages, ontology, vocabulary, support data) and how its statements were made (curated, scraped,
converted, deterministic, rule-based, lookup, statistical, AI-generated) as `dcterms:type`, with IRIs
`http://data.judaicalink.org/datasets/vocabulary/kind/<kind>` and
`http://data.judaicalink.org/datasets/vocabulary/method/<method>`. This dataset defines these values. It is
generated from `catalog/vocabulary.toml` in judaicalink-data, which is also the list of values the catalogue
accepts.
