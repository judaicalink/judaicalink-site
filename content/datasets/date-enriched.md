+++
slug = "date-enriched"
title = "Enrichment of Birth- and Deathdates"
author = "Kai Eckert"
date = "2020-07-31"
example = "http://data.judaicalink.org/data/bhr/Aach_Löb"
stable = "2020-07-31"
kind = "complement"
method = ["deterministic"]
inputs = ["bhr", "dbpedia-persons", "djh", "gnd-persons", "jre", "ubffm-persons", "nli-persons"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/date-enriched"

[files]
"date-enriched.ttl.gz" = "Parsed Dates, using Labs Command date_enrichment"

[[versions]]
version = "2020-07-31"
issued = "2020-07-31"
author = "Kai Eckert"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "date-enriched.ttl.gz"
  bytes = 803216
  sha256 = "5d697577d5b4fcf35bdb3b5e504475f46de9c7c45c208a09915620230ad2d9ec"

  [[versions.files]]
  path = "date-enriched-meta.ttl.gz"
  bytes = 1775
  sha256 = "831c47848d2c4b84c6ebef1fe9fd8151e63f1f3fd39a0945d6e0e07a3c90bd05"
  triples = 56

[[changelog]]
date = "2026-10-17"
author = "Kai Eckert"
text = "Superseded by records-normalized, which gives the normalised birth and death dates (jl:birthYear is deprecated)."

[[changelog]]
date = "2020-08-03"
author = "Sara Fischer"
text = "Date parsing of the generator (judaicalink-labs, date_enrichment) extended; the published version was not regenerated."
+++
<!-- Copy of catalog/date-enriched.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
This is work in progress. The idea is to parse all available dates and create
these additional properties:

- jl:birthYear
- jl:birthMonth
- jl:birthDay

Issues: 

- birthDay might be confused with birthDate. 
- birthDate should be the parsed datetime, current String representation should go to jl:birthDateString.

Same for deathDate, of course.
