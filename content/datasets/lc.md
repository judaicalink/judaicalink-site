+++
slug = "lc"
title = "LC Name Authority File: the records JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-16"
website = "https://id.loc.gov/download/"
example = "http://data.judaicalink.org/data/lc/n79021164"
kind = "authority"
method = ["converted"]
namespaces = ["lc"]
stable = "2026-10-26"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"madsrdf:hasExactExternalAuthority" = ["gnd", "tgn", "wikidata", "viaf", "isni", "geonames"]

[license]
name = "Public domain"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
statement = "https://web.archive.org/web/20260814162252/https://id.loc.gov/about/"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/lc"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "lc-selection.tsv.gz"
  bytes = 1240053
  sha256 = "dfa5133d8fb9175306c6d18efe212806e0a7e47e1298d19486c9213434600d83"

  [[versions.files]]
  path = "lc.ttl.gz"
  bytes = 10639997
  sha256 = "18de75081066102d1066fd9e8a68f4c195a8872fa9e8930843e7ce9c50a6506c"
  triples = 1982800

  [[versions.files]]
  path = "lc-meta.ttl.gz"
  bytes = 2977
  sha256 = "f41ebddefc593296ea10afdf105273c17d745f0233a4da35c7984f01c4186578"
  triples = 83

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "lc-selection.tsv.gz"
  bytes = 1238030
  sha256 = "bc6140c8e84704c7cb1c53dd4294803708b7b12ad5bc8cc30276420fc16f8b13"

  [[versions.files]]
  path = "lc.ttl.gz"
  bytes = 10663248
  sha256 = "26c237b2c3e9a133f12696309b613d19b23a4354b41868d62da74d6839a7de51"
  triples = 1986497

  [[versions.files]]
  path = "lc-meta.ttl.gz"
  bytes = 2956
  sha256 = "a99645106d2d48cc0079187169a5d04c2cea7e67a3ea492d86037d2a2946426b"
  triples = 83

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "9dec0f129c40ea47066735128868e0a869c4bed1"
description = "The records of the LC Name Authority File JudaicaLink uses, from the LC dump (MADS/RDF, 2026-09-27): every LC record that one of our datasets links."

  [[versions.files]]
  path = "lc-selection.tsv.gz"
  bytes = 669590
  sha256 = "859d9c9dbe96c591c97fda5c3e4b8fb437a06d30906318d99886a363e1ed5483"

  [[versions.files]]
  path = "lc.ttl.gz"
  bytes = 9233750
  sha256 = "8d79b2af56f36706457c18f4d1556d4600af7903b969e6651cc80417d7e806ca"
  triples = 1731974

  [[versions.files]]
  path = "lc-meta.ttl.gz"
  bytes = 3358
  sha256 = "b37e43166627e3eb834b77bd4af08415d7a71b0e1fced796e5850c39dc337e78"
  triples = 158

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version in the cascade of 2026-10-26: with the VIAF and GeoNames identifiers of footprints 2026-10-26 (from the Footprints API), without the records only the withdrawn 2014links and the former footprints version led to."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "Made in the cascade: 91,943 records (2026-10-16: 79,683), the LC identifiers of VIAF and Wikidata included; the MADS class namespace in canonical form."

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "First version (decision 0029): 79,683 authority records with their MADS statements, names, life dates and places, occupations; deprecated records cited by our data marked owl:deprecated (LC states no successors)."
+++
<!-- Copy of catalog/lc.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The records of the Library of Congress Name Authority File (LCNAF) that one of our datasets or another authority
dataset links.

<!--more-->

The LCNAF is the name authority file of the Library of Congress and its partners in the Name Authority Cooperative
Program (NACO): its records (persons, organisations, places, works) are made and maintained by cataloguers, by the
rules of RDA. They are among the most reliable identifiers we link; errors are reported to the Library of Congress.
The data of id.loc.gov is in the public domain.

The dataset is made from the bulk export of id.loc.gov in MADS/RDF; the file names and dates of the export are in the
metadata of each version. Each record keeps the statements of the authority record and of the person, organisation
or place it identifies (its "Real World Object": dates, places, occupations), with the IRIs in canonical form, and in
addition the JudaicaLink and SKOS terms that the other datasets use. Exact external authorities that are identifiers
of a known source (GND, VIAF, ISNI, Wikidata, TGN) are stated as `owl:sameAs`. Identifiers LC has withdrawn
(deprecated) that our data cites are stated with `owl:deprecated` (decision 0029); the export names no successors.

`lc-selection.tsv.gz` lists, for every LC identifier, the datasets that link it.
