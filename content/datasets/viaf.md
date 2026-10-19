+++
slug = "viaf"
title = "VIAF: the clusters JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-18"
website = "https://viaf.org/en/viaf/data"
example = "http://data.judaicalink.org/data/viaf/54984961"
kind = "authority"
stable = "2026-10-19"
method = ["converted"]
namespaces = ["viaf"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["gnd", "lc-names", "wikidata", "isni", "wikipedia-en"]

[license]
name = "ODC-By 1.0"
uri = "https://opendatacommons.org/licenses/by/1-0/"
statement = "https://viaf.org/en/viaf/data"
attribution = "VIAF (Virtual International Authority File), OCLC"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/viaf"

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "viaf-selection.tsv.gz"
  bytes = 2346416
  sha256 = "846baaf184f816a2a18aeba05b4124932f8a81c505a2557321d5086db5ceb36a"

  [[versions.files]]
  path = "viaf.ttl.gz"
  bytes = 22825972
  sha256 = "efa37ab23f4906295dd74d8632808f6c5dae30ba7ce90c8f50a5371343116485"
  triples = 2968180

  [[versions.files]]
  path = "viaf-meta.ttl.gz"
  bytes = 2683
  sha256 = "fa7dffb00a8746888268645ad7390675fe2fb747950b329ef37ef06543ffda4b"
  triples = 80

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "First version: the 213,653 VIAF clusters (dump 2024-08-04) our datasets and the other authority datasets link; BnF links without an identifier (http://data.bnf.fr/#foaf:Person) left out."
+++
<!-- Copy of catalog/viaf.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The clusters of the Virtual International Authority File (VIAF, OCLC) that JudaicaLink uses: every cluster our
datasets or the other authority datasets link, with its names, life dates, class and the records of the libraries and
knowledge bases it brings together (GND, Library of Congress, Wikidata, ISNI, BnF and others). Made from the yearly
VIAF dump.
<!--more-->

VIAF clusters the authority records of national libraries and other sources that describe the same person,
organisation, place or work. The clustering is automated and, as a whole, reliable; individual clusters can join
records of different entities or split one entity into several clusters. JudaicaLink links its records to VIAF in the
linkset `ls-viaf`, unless the life dates contradict (decision 0029).
