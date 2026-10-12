+++
slug = "geo-enriched"
title = "Geographic Enrichment"
author = "Kai Eckert"
date = "2019-12-18"
example = "http://data.judaicalink.org/data/djh/banco-alma-henriette-del"
namespaces = ["geo-enriched"]
stable = "2019-12-18"
kind = "complement"
method = ["rule-based"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/geo-enriched"

[files]
"geo_interlinks.ttl" = "Mappings Geonames - JudaicaLink"

[[versions]]
version = "2019-12-18"
issued = "2019-12-18"
author = "Marco Rovera"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "bhr-final-05.ttl"
  bytes = 68032
  sha256 = "c41abb0ec2f45696f990ae09318d4b8f12d09b327e5fe1963407c172f3ec5ad7"

  [[versions.files]]
  path = "djh.ttl"
  bytes = 30333
  sha256 = "0eea649ea56a43abcd44aaa39999e9fc4b1949ed2bcab26fdb6084711d70eb69"

  [[versions.files]]
  path = "generated_persons_GND_enriched.ttl"
  bytes = 78222
  sha256 = "502517c89ff6e122c7a5cc44614ff9b9cbbde352ad860f24b4e83ba27041c798"

  [[versions.files]]
  path = "Haskala_enriched.ttl"
  bytes = 390
  sha256 = "61e0ab29fb2f6c76e5016a81cd1a4e4959152c9e746fb1591f1c60629773d12d"

  [[versions.files]]
  path = "HirschFamily.ttl"
  bytes = 6226
  sha256 = "ff5bca2dbbabaccfa0cb3f8ead851ed497973b82e680b96cb8582890d2a74f19"

  [[versions.files]]
  path = "ubffm-authors.ttl"
  bytes = 121351
  sha256 = "129bc5e805971128c7b123d113da5934295ad15e0b185e0c37bcf412e1f7f810"

  [[versions.files]]
  path = "geo_interlinks.ttl"
  bytes = 676542
  sha256 = "e6352d602c21aabf682932734f8c292b91b73cff02e32c3ac3c731571ef26621"

  [[versions.files]]
  path = "geo-enriched-meta.ttl.gz"
  bytes = 2225
  sha256 = "5d63ce17eaec0c04d4eab1d249c871e75aff117b4b1c6dcc7d7c0b900e620045"
  triples = 117
+++
<!-- Copy of catalog/geo-enriched.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Dataset geographic enrichment through GeoNames. 
Introduced the use of birthLocationURI and deathLocationURI properties.
