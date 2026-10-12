+++
slug = "quality-annotations"
title = "Quality annotations for the JudaicaLink datasets"
author = "Kai Eckert"
date = "2026-10-12"
stable = "2026-10-12"
kind = "complement"
method = ["rule-based"]
namespaces = ["quality-annotations"]
inputs = ["bhr", "dbpedia-persons", "djh", "epidat", "footprints", "geo-enriched", "gnd-persons", "gnd-persons-entityfacts", "haskala", "hhkeydocs", "hirsch-family", "jre", "nli-records", "sosy", "ubffm-persons", "compact-memory", "geo-coordinates", "nrwbibdjg"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/quality-annotations"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "250a2465e64abd0487a1086a7bc3be913b9c3074"

  [[versions.files]]
  path = "quality-annotations.ttl.gz"
  bytes = 19695
  sha256 = "9892e67e77e923f1ecf9a1bb6ebbe4057828d3f4e414df28b36c4228a3ce0747"
  triples = 3954

  [[versions.files]]
  path = "quality-annotations-meta.ttl.gz"
  bytes = 2621
  sha256 = "0026725dd8d50d3801ce2803a2ec94cb444e2f05751bed185b843580a5450cf7"
  triples = 116

[[changelog]]
date = "2026-10-13"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: quality annotations about the data (dates left out by records-normalized, with the reason; issues of Compact Memory in isolated years; problems of single versions), from quality-annotations of kg-complements (decision 0020)."
+++
<!-- Copy of catalog/quality-annotations.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Problems in the data that cannot be fixed by adding facts, as quality annotations (W3C Data Quality Vocabulary and
Web Annotation): dates that could not be normalised, issues with an unlikely year, errors of single versions.

<!--more-->

Each annotation (`dqv:QualityAnnotation`, `oa:Annotation`) names its target with `oa:hasTarget`, describes the
problem in `oa:bodyValue` and gives its kind in `dcterms:type`:

- **date**: a birth or death date of a record that `records-normalized` could not normalise, with the reason (the
  same rules: a range, a bound, a negative year, …), records whose death date is before their birth date, and issues
  of Compact Memory in a
  year more than 15 years away from every other year of their journal (probably a typo in the source metadata);
- **vocabulary**, **datatype**, **syntax**, **data error**: problems of one version of a dataset, targeted at the
  version (`datasets/<slug>/<version>`): the misspelt property `jl:occpation`, IRIs as values of `jl:occupation`,
  `dcterms:created` as a plain string, RDF-star statements, `jl:lat` and `jl:lon` swapped; and problems found by
  hand.

The annotations are about records and versions, never about entity pages.
