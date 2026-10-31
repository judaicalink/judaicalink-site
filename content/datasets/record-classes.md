+++
slug = "record-classes"
title = "Classes of untyped records"
author = "Kai Eckert"
date = "2026-10-12"
example = "http://data.judaicalink.org/data/yivo/abramovich_rafail"
kind = "complement"
method = ["lookup", "rule-based"]
inputs = ["yivo", "footprints", "viaf"]
stable = "2026-10-26"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/record-classes"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "d2861c7d51ed66906da52e6c87474b715ca5611d"
description = "The classes of the yivo articles, as 2026-10-18, and of the Footprints persons (person or organisation)."

  [[versions.files]]
  path = "record-classes.ttl.gz"
  bytes = 51080
  sha256 = "fe59603fca41f2a9f8e012d221e8ecd98573fe909424da66ca8ea41e5d4568a0"
  triples = 13440

  [[versions.files]]
  path = "record-classes-meta.ttl.gz"
  bytes = 2635
  sha256 = "28104bfce3b42f0d3a51867c2a7d99c315685e61d82dc15eaae12b78f94efa14"
  triples = 73

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
date = "2026-10-31"
version = "2026-10-18"
author = "Kai Eckert"
text = "Pruned (decision 0041): no longer published; its files, sizes and checksums are in the git history of this entry."
refs = ["0041"]

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version, made the stable version: also the classes of the 11,642 persons of footprints 2026-10-26 (decision 0034): organisation by VIAF 119, by name 766; person 10,757."

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version, made by the generator in judaicalink-data (run-20261026T072452Z)."

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
dates, "(1880–1963), revolutionary and publicist", and subjects otherwise.

The persons of Footprints (dataset footprints) are persons or organisations; the API does not tell them apart. A
person is an organisation if its VIAF record (the VIAF number given by Footprints) is one, or if its name names an
institution, a firm or a group (library, seminary, congregation, bookseller, printing house, heirs, "&", in the
languages of the data); every other one is a person.

The classes are assigned automatically and not checked one by one.
