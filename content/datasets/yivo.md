+++
slug = "yivo"
title = "Yivo Encyclopedia"
author = "Kai Eckert"
date = "2020-09-30"
website = "http://www.yivoencyclopedia.org"
example = "http://data.judaicalink.org/data/yivo/Moscow"
picture = "/img/yivo_logo_black-on-white-135x68.jpg"
namespaces = ["yivo"]
aliases = ["/encyclopediae/yivo-encyclopedia/", "/datasets/yivo-encyclopedia/"]
stable = "2020-09-30"
kind = "records"
method = ["scraped"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/yivo"

[files]
"yivo.jsonl.gz" = "Raw data crawled from the YIVO Encyclopedia, input of the generator."

[[versions]]
version = "2020-09-30"
issued = "2020-09-30"
author = "Kai Eckert"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "yivo.ttl.gz"
  bytes = 695155
  sha256 = "a81c03d366a2eaa103f5864e401e90386dd9cf6e08ba6c181f8c1a5152a1e842"

  [[versions.files]]
  path = "yivo.jsonl.gz"
  bytes = 913257
  sha256 = "d86ff6504e24f869ae1e286e533b175c289b033ed735107add218f31269be6c1"

  [[versions.files]]
  path = "yivo-meta.ttl.gz"
  bytes = 2024
  sha256 = "80a557f5386a401a510fb3b93e2053679a5913fd52866e5186f2867a3e7082da"
  triples = 68

[[changelog]]
date = "2026-10-11"
version = "2020-09-30"
author = "Kai Eckert"
text = "Self-description written by the labs generator (yivo-metadata.ttl.gz) removed from the version; the generated -meta file takes its place. Its generation time and commit are documented in the generator folder."
refs = ["0018"]

[[changelog]]
date = "2025-06-05"
author = "Benjamin Schnabel"
text = "Encyclopedia converters rewritten in Python (judaicalink-generators); the published version was not regenerated."

[[changelog]]
date = "2016-09-12"
author = "Kai Eckert"
text = "First version (date of the first catalogue listing)."
+++
<!-- Copy of catalog/yivo.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The YIVO Encyclopedia of Jews in Eastern Europe, courtesy of the YIVO Institute of Jewish Research, NY.
<!--more-->

The only resource of its kind, this encyclopedia provides the most complete picture of the history and culture of Jews in Eastern Europe from the beginnings of their settlement in the region to the present. This website makes accurate, reliable, scholarly information about East European Jewish life accessible to everyone.

Published as CC0 with the written permission of the source. The data holds only the beginning of each article (at most about 2,100 characters), not the full text.

“The YIVO Encyclopedia is so compulsively browsable that you can disappear within its pages for hours without a trace, the equivalent of diving into the coolest, deepest of pools.” —Kenneth Turan, L.A. Times
