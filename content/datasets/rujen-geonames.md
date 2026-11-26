+++
slug = "rujen-geonames"
title = "The places of the Encyclopedia of Russian Jewry in GeoNames"
author = "Kai Eckert"
date = "2026-11-26"
example = "http://data.judaicalink.org/data/rujen/bondarevo"
kind = "linkset"
stable = "2026-11-26"
method = ["rule-based", "llm-judged"]
inputs = ["rujen"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["geonames"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/rujen-geonames"

[files]
"rujen-geonames-decisions.tsv.gz" = "For every place of rujen: linked or not, the GeoNames id, and why (the rule, or the judgement with its reason)."

[[versions]]
version = "2026-11-26"
issued = "2026-11-26"
author = "Kai Eckert"
commit = "366aca135c1eb4348eb0990c9439cac066f14905"
description = "From the cascade of 2026-11-26, which adds the places of rujen-geonames (rujen to GeoNames, decision 0051)."

  [[versions.files]]
  path = "rujen-geonames-decisions.tsv.gz"
  bytes = 81788
  sha256 = "994822d2bc9eadc2877bb23d9826fe7e0b1d7fb884f2f03f7720cf52907c3301"

  [[versions.files]]
  path = "rujen-geonames.ttl.gz"
  bytes = 37372
  sha256 = "4eece86cc5fa068e54267ed7d9703c34e37935cb044e6c68df41d5c2fa0c3413"
  triples = 4249

  [[versions.files]]
  path = "rujen-geonames-meta.ttl.gz"
  bytes = 3234
  sha256 = "2ceed8881383ce946e83381592f73f34ea4cd085c373f88ed22e1e41c2a1199a"
  triples = 84

[[changelog]]
date = "2026-11-26"
version = "2026-11-26"
author = "Kai Eckert"
text = "Cascade of 2026-11-26: the rujen places linked to GeoNames (rujen-geonames, 0051) and what they bring in."
+++
<!-- Copy of catalog/rujen-geonames.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The places of the Encyclopedia of Russian Jewry (rujen) linked to GeoNames by rules and, where the rules leave
several candidates, by a large language model: automatic linking, not checked by people.

<!--more-->

rujen gives no identifiers for its places. Every article about a place begins with its name, kind, district, region
and country ("КУТКИ, село в Славутском р-не Хмельницкой обл. (Украина)"). A place is linked to the GeoNames place of
that name in that country and region (and district, where GeoNames knows it) if there is exactly one; a district or
region seat is the one GeoNames marks as such. Where several places remain, or the name differs slightly, a language
model read the article's header and the candidates (names, region, district, population, distance to the district
seat) and chose one, or none (decision 0051). Matched against GeoNames only, never against Wikidata or other sources
that may have taken links from JudaicaLink. Cross-references and places that no longer exist are not linked. The file
of decisions gives the outcome and the reason for every place.
