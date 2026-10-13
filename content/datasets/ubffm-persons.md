+++
slug = "ubffm-persons"
title = "Persons from ubffm"
author = "Kai Eckert"
date = "2019-01-25"
example = "http://data.judaicalink.org/data/ubffm/Aaron_Emmerich_Gumpertz"
namespaces = ["ubffm"]
stable = "2019-01-24"
kind = "records"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ubffm-persons"

[files]
"ubffm-authors.ttl.gz" = "Persons extracted from Judaica collection of University Library of Frankfurt. Names are both in transcription and Hebrew"
"ubffm-authors-02.ttl.gz" = "Persons extracted from Judaica collection of University Library of Frankfurt. Names are only in transciption"

[[versions]]
version = "2019-01-24"
issued = "2019-01-24"
author = "Maral Dadvar"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "ubffm-authors.ttl.gz"
  bytes = 505187
  sha256 = "6cc3ae3df6bb6972230cb77c87a269cc9cffd0d63047f62164a77ba3771f0364"

  [[versions.files]]
  path = "ubffm-authors-02.ttl.gz"
  bytes = 408010
  sha256 = "a6ab1fe57f453fe962fdc0066cca216207a55e0f45d35d7ad0eb526b3cce50e2"

  [[versions.files]]
  path = "ubffm-persons-meta.ttl.gz"
  bytes = 1741
  sha256 = "c25c32ea8e67f34fe2009316de0160cb517d89df714b655ddb3d423016c18bb9"
  triples = 67
+++
<!-- Copy of catalog/ubffm-persons.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
This first dataset contains authors names from Judaica collection of University Library of Frankfurt.

<!--more-->

Moreover, the authors for whom a GND-ID was available, were further enriched with their personal information extracted from GND.
