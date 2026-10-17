+++
slug = "records-normalized"
title = "Normalised dates, places and occupations of the records"
author = "Kai Eckert"
date = "2026-10-12"
stable = "2026-10-12"
kind = "complement"
method = ["rule-based", "deterministic"]
replaces = ["date-enriched"]
inputs = ["bhr", "dbpedia-persons", "djh", "epidat", "footprints", "geo-enriched", "gnd-persons", "gnd-persons-entityfacts", "haskala", "hhkeydocs", "hirsch-family", "jre", "nli-records", "sosy", "ubffm-persons", "rujen", "geo-coordinates", "cm-entities"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/records-normalized"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "75c5921ff58df3ecdb3602144958f703b40e4cff"

  [[versions.files]]
  path = "records-normalized-dates.ttl.gz"
  bytes = 1267235
  sha256 = "5733c1c9a71acd00d20664059acb2b30c3b9443ae97131ae77b523c586cf8bd6"
  triples = 189186

  [[versions.files]]
  path = "records-normalized-occupations.ttl.gz"
  bytes = 143562
  sha256 = "15c49b9def03590c9431be3a61abd5e079d91d956c13c2c09e4554e027a2fa7a"
  triples = 19011

  [[versions.files]]
  path = "records-normalized-places.ttl.gz"
  bytes = 234987
  sha256 = "d6c57ed715e8bffcd4d24e4b0c1e69721cf61852c7a11e83164bb4fdeac00654"
  triples = 28008

  [[versions.files]]
  path = "records-normalized-meta.ttl.gz"
  bytes = 3432
  sha256 = "42732fac82e3b15922b39a129b07aded93d2f9482fd49facdf44329b4fbe262d"
  triples = 141

[[changelog]]
date = "2026-10-13"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: normalised dates, places and occupations of the records (dates-normalized, places-linked, occupation-concepts and occupation-fix of kg-complements, decision 0020), for the stable versions; more date forms; all occupation IRIs stated with jl:occupation as jl:occupationURI."
+++
<!-- Copy of catalog/records-normalized.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Normalised values next to the free-text values of the record datasets: typed birth and death dates, places and
occupations as IRIs. The original values stay as they are.

<!--more-->

- **Dates** (`records-normalized-dates.ttl.gz`): `jl:birthDateNormalized` and `jl:deathDateNormalized` as `xsd:date`,
  `xsd:gYearMonth` or `xsd:gYear` for the free-text `jl:birthDate` and `jl:deathDate`. Recognised: ISO dates (also
  as dateTimes), year and month (1914-11, 9.1749), D.M.YYYY (also with XX for an unknown day or month), English dates
  (October 28, 1905), bare years from 1 to 2030, years with unknown month and day (1942--) or one of two months
  (1347-06/07), Hebrew years in letters or as numbers (converted, marked uncertain), Hebrew-Gregorian pairs
  (5559-1798), the EDTF value of dates written as Python dictionaries (footprints), and markers of uncertainty (?,
  ca., um, בערך, ~, brackets), which set `jl:birthDateUncertain` / `jl:deathDateUncertain`. Left out: ranges, bounds
  (vor 1593), negative years, and the dates of a record whose one death date is before its one birth date.
- **Places** (`records-normalized-places.ttl.gz`): `jl:birthLocationURI` and `jl:deathLocationURI` for the text values
  of `jl:birthLocation` and `jl:deathLocation`, where a dictionary gives exactly one IRI: pairs of text and IRI
  already in the data, places of cm-entities, places of rujen and geo-coordinates (exact match after lowercasing; for
  "Place, Country" also the part before the comma); records that already have a place IRI are left as they are.
- **Occupations** (`records-normalized-occupations.ttl.gz`): `jl:occupationURI` for text occupations that equal the
  name of an occupation IRI used in the data (case, spaces and underscores normalised), and for every occupation IRI
  that a record states with `jl:occupation`, whose range is text (bhr states its occupation IRIs as `jl:occupationURI` since its version 2026-10-12): one
  property for all occupation IRIs.

The statements are about the records of the datasets named as inputs, never about entity pages.
