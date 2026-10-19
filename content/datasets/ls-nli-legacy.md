+++
slug = "ls-nli-legacy"
title = "Legacy nli-persons URIs linked to the NLI authority records"
author = "Kai Eckert"
date = "2026-10-12"
example = "http://data.judaicalink.org/data/nli/Abner_"
kind = "linkset"
method = ["deterministic"]
namespaces = ["ls-nli-legacy"]
inputs = ["nli-persons"]
stable = "2026-10-12"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["viaf", "lc-names", "judaicalink"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-nli-legacy"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "608798db100c9d0136eabf20fe13916d457230f6"

  [[versions.files]]
  path = "ls-nli-legacy.ttl.gz"
  bytes = 4821113
  sha256 = "5e0554fe573efd5006f1c9e154d49b01b25d7fb62f7dab5f24b069407a8f5888"
  triples = 623077

  [[versions.files]]
  path = "ls-nli-legacy-meta.ttl.gz"
  bytes = 2288
  sha256 = "ec08758b32bd52ea99d25941ed65cd0dfd690fc74c4ff1e33dc9073b847b71a9"
  triples = 62

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: every legacy nli-persons URI linked to the records of nli-records it was made from, with quality annotations for the faulty URIs (decisions 0010, 0020)."
+++
<!-- Copy of catalog/ls-nli-legacy.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
For everyone who holds a URI of the superseded nli-persons: every legacy URI linked to the NLI authority records of
nli-records it was made from.

<!--more-->

For every URI of nli-persons, the records it was made from (`prov:wasDerivedFrom`), found by re-running the URI
assignment of the legacy generator on its input: all 182,445 legacy URIs are reproduced exactly. `owl:sameAs` is added
where the legacy URI stands for exactly one person record with its own name and dates, or, for URIs made only from
works or subject headings, to the one person record these name (same heading, compatible dates); then the record's
VIAF and Library of Congress numbers are added to the legacy URI as `owl:sameAs` as well. DQV quality annotations
(`http://data.judaicalink.org/data/ls-nli-legacy/annotation/…`) name the faulty legacy URIs: conflated records, wrong
name or dates, works or subject headings as persons. The records themselves are in nli-records (decision 0010).
