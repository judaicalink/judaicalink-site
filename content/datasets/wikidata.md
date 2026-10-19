+++
slug = "wikidata"
title = "Wikidata: the items JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-16"
website = "https://www.wikidata.org/"
example = "http://data.judaicalink.org/data/wikidata/Q559622"
kind = "authority"
stable = "2026-10-19"
method = ["converted", "lookup"]
namespaces = ["wikidata"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"wdtn:P227" = ["gnd"]
"wdtn:P214" = ["viaf"]
"wdtn:P244" = ["lc-names"]
"wdtn:P1566" = ["geonames"]
"wdtn:P213" = ["isni"]
"foaf:isPrimaryTopicOf" = ["wikipedia-en", "wikipedia-de"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
statement = "https://web.archive.org/web/20261006200927/https://www.wikidata.org/wiki/Wikidata:Licensing"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/wikidata"

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "wikidata-selection.tsv.gz"
  bytes = 3356513
  sha256 = "bca1ac788f2d2a50330e9cb783645644b2ba597a68dd0ec149e58ae0d5dd2c0a"

  [[versions.files]]
  path = "wikidata.ttl.gz"
  bytes = 8341919
  sha256 = "82d7500fc193c8ea093ee6a0c3e18cc412b37e2d94539382d4040e56b4ce0943"
  triples = 1232811

  [[versions.files]]
  path = "wikidata-meta.ttl.gz"
  bytes = 2803
  sha256 = "b6d3999ec64649d5cecf028c7b690a572d692fd148e5f35efc17eaec525b1f73"
  triples = 81

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "First version: 89,457 items: those our datasets name, those that state a selected GND, VIAF, LC, GeoNames or ISNI number, and those that state the identifier of a record of ours (YIVO, BHR, rujen)."
+++
<!-- Copy of catalog/wikidata.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The items of Wikidata that JudaicaLink uses: every item one of our datasets or another authority dataset links, and
the items that state an identifier these name (GND, VIAF, LC, GeoNames, ISNI) or the identifier of a record of ours
(YIVO, BHR, Encyclopedia of Russian Jewry).

<!--more-->

Wikidata is a knowledge base that anyone can edit. Many of its statements are added by bots, identifiers among
them (for example from VIAF), and references are optional, so an item's identifiers are only as reliable as their
sources; errors are reported to Wikidata. Statements that cite JudaicaLink as their source are left out: they most
likely come from our own data and are never evidence for our links (decision 0029).

The dataset is made from answers of the Wikidata Query Service (which items state an identifier) and of the Wikidata
API (the content of the items), kept with their queries in the inputs area; their date is in the metadata of each
version. Each record keeps the item's labels (en, de, he, mul), classes, dates and places of birth and death, its
identifiers (GND, VIAF, LC, GeoNames, ISNI as IRIs in canonical form; NLI, YIVO, BHR, Encyclopedia of Russian Jewry
as values) and its Wikipedia articles (en, de, he). Merged items are stated with `dcterms:isReplacedBy`, deleted ones
that our data names with `owl:deprecated`.

`wikidata-selection.tsv.gz` lists why each item is included: one row per item and reason (linked by a dataset, or
reached by an identifier), with the current item.
