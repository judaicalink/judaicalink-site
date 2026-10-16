+++
slug = "nli-records"
title = "NLI authority records (persons and works)"
author = "Kai Eckert"
date = "2026-10-12"
website = "https://www.nli.org.il/"
example = "http://data.judaicalink.org/data/nli/record/viaf-7652270"
kind = "authority"
method = ["converted"]
namespaces = ["nli/record"]
replaces = ["nli-persons"]
stable = "2026-10-12"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/nli-records"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "608798db100c9d0136eabf20fe13916d457230f6"

  [[versions.files]]
  path = "nli-records.ttl.gz"
  bytes = 10690626
  sha256 = "bd276fe6239583d8e2e6f44108add9dacb282cf4ad24ab3e8e871b5ffed5f93e"
  triples = 1523575

  [[versions.files]]
  path = "nli-records-meta.ttl.gz"
  bytes = 2392
  sha256 = "6d2c962c8f781527e92d8a846c5ef04c0a7b5a6bbb9059a4a5d5cb1f6e02ae16"
  triples = 60

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: the person and work records of the NLI export behind nli-persons, one resource per record with VIAF and LC identifiers; supersedes nli-persons (decisions 0010, 0020)."
+++
<!-- Copy of catalog/nli-records.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The person and work records of the authority export of the National Library of Israel that nli-persons was made
from, one resource per record, with the identifiers of the export. It supersedes nli-persons.

<!--more-->

nli-persons (2019) coined its URIs from the name headings and dropped the record identifiers: different people with
the same name share a URI, one person has several URIs, works and subject headings became persons. This dataset
takes the same export again and keeps one resource per record: the VIAF number (field 901) and the Library of
Congress number (010) as `owl:sameAs`, the headings in all scripts (Latin without language tag; Hebrew script `he`,
Cyrillic `und-Cyrl`, Arabic `und-Arab`), variant names (400, 700), birth and death dates (046, else the dates of the
heading), places of birth and death (370), occupations (374), gender (375) and notes (678). Name/title records are
works (`jl:Work`), linked to their creator (`dcterms:creator`) where the heading matches exactly one person record,
else with the creator's name (`dc:creator`). Subject headings (name -- subdivision) are left out.

IRIs: `http://data.judaicalink.org/data/nli/record/viaf-<VIAF number>`, or `…/h-<hash of the headings>` for records
without a unique VIAF number. The links from the legacy nli-persons URIs to the records are in ls-nli-legacy
(decision 0010).
