+++
slug = "conflicts"
title = "Conflicting statements of the records of one person"
author = "Kai Eckert"
date = "2026-11-10"
stable = "2026-11-10"
kind = "complement"
method = ["rule-based", "deterministic"]
namespaces = ["conflicts"]
inputs = ["ep", "records-normalized", "bhr", "dbpedia", "djh", "epidat", "footprints", "gba", "geo-coordinates", "geonames", "gnd", "haskala", "hhkeydocs", "hirsch-family", "jre", "lc", "nli-records", "nrwbibdjg", "rujen", "sosy", "stolpersteine", "ubffm-persons", "viaf", "wikidata", "yivo"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/conflicts"

[[versions]]
version = "2026-11-10"
issued = "2026-11-10"
author = "Kai Eckert"
commit = "3724aff43da3a4a0a9e3346352774627ce97f7ee"

  [[versions.files]]
  path = "conflicts.ttl.gz"
  bytes = 183992
  sha256 = "4177dd33364e6953b965826486271a05eb6feda69f44607357eefe6fa02b63a4"
  triples = 28323

  [[versions.files]]
  path = "conflicts-meta.ttl.gz"
  bytes = 2359
  sha256 = "d99b89c595e7d0893b0f041d84bcf0027837f6ef7560bb3f75b254204d2f73cb"
  triples = 120

[[changelog]]
date = "2026-11-10"
version = "2026-11-10"
author = "Kai Eckert"
text = "New dataset: records of one person that state years or places of birth or death that disagree (decision 0045). 3,285 conflicts in ep 2026-11-10; 308 of them join two records of one authority on one page."
refs = ["0045"]
+++
<!-- Copy of catalog/conflicts.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Where the records of one person, brought together on an entity page, state different years or places of birth or
death. One quality annotation (`dqv:QualityAnnotation`, `oa:Annotation`, `dcterms:type "conflict"`) per person and
property: `jl:onProperty` names the property (`jl:birthDate`, `jl:deathDate`, `jl:birthLocationURI`,
`jl:deathLocationURI`), `oa:hasTarget` the records that state a value, `oa:bodyValue` the values per record.

Years conflict when they are more than a year apart (a year apart comes from calendar conversions); dates the source
marks as uncertain are left out. Places conflict when they are more than 25 km apart and both are settlements; a
country or region against a place in it is no conflict. Compared are the facts the sources state; place links
derived from the text of a place are not.

The annotations are about records, never about entity pages.
