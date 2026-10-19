+++
slug = "record-classes"
title = "Classes of untyped records"
author = "Kai Eckert"
date = "2026-10-12"
example = "http://data.judaicalink.org/data/yivo/abramovich_rafail"
kind = "complement"
method = ["lookup", "rule-based"]
inputs = ["yivo"]
stable = "2026-10-18"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/record-classes"

[[versions]]
version = "2026-10-18"
issued = "2026-10-18"
author = "Kai Eckert"
commit = "906c9b0d7c201f32c0dc966c0c4c5256747469e8"
description = "The classes of the yivo articles, as 2026-10-12, with the classes of the common layer."

  [[versions.files]]
  path = "record-classes.ttl.gz"
  bytes = 16275
  sha256 = "931ce0da0b1aeaf78d5d35f03f28b78e9695024f0045b0b8101638745217575b"
  triples = 1798

  [[versions.files]]
  path = "record-classes-meta.ttl.gz"
  bytes = 2345
  sha256 = "d6121c261300d9269521c97d16f7a91b928f6eac97b403984691af720b4337a0"
  triples = 67

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "8255612e31d1e6e4ac6dd976e47b3db40187d161"
description = "Classes of the yivo articles: from their Wikidata item, else life dates (person), else subject."

  [[versions.files]]
  path = "record-classes.ttl.gz"
  bytes = 16207
  sha256 = "dceebb5945367771d4a535051f1916c9fc29bb0e4e0522d634cedbafbfa5e642"
  triples = 1798

  [[versions.files]]
  path = "record-classes-meta.ttl.gz"
  bytes = 2246
  sha256 = "c7e3294345d5487cd145e887eafba6d27efa1da1d224d34198e5b79ee9bd3860"
  triples = 62

[[changelog]]
date = "2026-10-18"
version = "2026-10-18"
author = "Kai Eckert"
text = "Classes of the common layer: skos:Concept (356), schema:Place (199), schema:CreativeWork (54) instead of jl:Subject, jl:Place, jl:Work."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version (decision 0025): the 1,798 yivo articles typed: 1,092 persons (986 by Wikidata, 106 by life dates), 199 places, 97 organisations, 54 works, 356 subjects."
+++
<!-- Copy of catalog/record-classes.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The class (person, place, organisation, work, subject) of records that their datasets state no type for, so that
they appear on the entity pages.

<!--more-->

The articles of the YIVO Encyclopedia (dataset yivo) have no `rdf:type`. Their class is taken from the Wikidata item
of the article (property P8569, the classes of its instance-of statements): humans are persons; geographic
locations, administrative territorial entities and settlements places; organisations organisations; written works,
periodicals and creative works works. Articles without such an item are persons if their abstract starts with life
dates, "(1880–1963), revolutionary and publicist", and subjects otherwise. The classes are assigned automatically
and not checked one by one.
