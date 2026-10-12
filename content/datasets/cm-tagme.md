+++
slug = "cm-tagme"
title = "Linking Compact Memory - Resources and References"
author = "Kai Eckert"
date = "2021-01-19"
namespaces = ["cm-tagme"]
aliases = ["/datasets/cm-tagme-supp/"]
stable = "2021-01-18"
kind = "complement"
method = ["statistical"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/cm-tagme"

[files]
"cm_tagme_resources.ttl.gz" = "Judaicalink resources (entities) mentioned in Compact Memory (749.446 triples)."
"cm_tagme_references.ttl.gz" = "Description of each single mention (start, end, text, page, confidence scores, 5.246.122 triples)."

[[versions]]
version = "2021-01-18"
issued = "2021-01-18"
author = "Marco Rovera"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "cm_tagme_resources.ttl.gz"
  bytes = 3034326
  sha256 = "ae42fdcf74c9b33452dad9110fe6f94aee67cda8a50852812cb448412da56379"

  [[versions.files]]
  path = "cm_tagme_references.ttl.gz"
  bytes = 29040075
  sha256 = "bbf4bb9aab99408eb4e229ac776b4519910411c2e480a0b6ab44694ea7bf4d2e"

  [[versions.files]]
  path = "cm-tagme-meta.ttl.gz"
  bytes = 1881
  sha256 = "abfdb2d893565bcc748b22acf9f2148ad45bb9a00e938e89d11b4ffaa1602a1c"
  triples = 73

[[changelog]]
date = "2025-06-05"
author = "Benjamin Schnabel"
text = "Generator ported from Jupyter notebooks to Python scripts (judaicalink-generators); the published version was not regenerated."
+++
<!-- Copy of catalog/cm-tagme.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
References of Judaicalink resources (entities, mainly persons and places) in Compact Memory.

<!--more-->
