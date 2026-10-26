+++
slug = "geo-enriched"
title = "Geographic Enrichment"
author = "Kai Eckert"
date = "2019-12-18"
example = "http://data.judaicalink.org/data/djh/banco-alma-henriette-del"
stable = "2026-10-16"
kind = "complement"
method = ["rule-based"]
inputs = ["bhr", "djh", "gnd-persons", "haskala", "hirsch-family", "ubffm-persons", "geo-coordinates", "geonames"]

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
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "8ce98cbcb278dc4ce4df6d093e75a36f3c0bda1e"
description = "Made again (decision 0024): the birth and death places that our records give only as text, linked to a geo-coordinates place or a GeoNames feature by a stated, conservative rule (gazetteer.py); places that have an IRI are not touched."

  [[versions.files]]
  path = "geo-enriched.ttl.gz"
  bytes = 270321
  sha256 = "b1b5783f1669b50cadf1fb46e7492ba9644d5ecc20ba5578c4a30c2473c246e9"
  triples = 32952

  [[versions.files]]
  path = "geo-enriched-meta.ttl.gz"
  bytes = 3128
  sha256 = "3cb578e03ca66c4995202176014a3e0f48d406d4518bd93c46ed39d1eef61ff1"
  triples = 114

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

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "Made again from the current records: 32,952 links of place texts without an IRI (bhr, nli-records, ubffm-persons, dbpedia-persons, epidat, djh, sosy, haskala, hirsch-family) to geo-coordinates places or GeoNames features (data/geonames/<id>); ambiguous names left out; the first-hit links of 2019 (89 of them wrong places) replaced."
+++
<!-- Copy of catalog/geo-enriched.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The birth and death places of the persons of bhr, djh, gnd-persons, haskala, hirsch-family and ubffm-persons as IRIs
(`jl:birthLocationURI`, `jl:deathLocationURI`, next to the place names of the records).
<!--more-->

Since 2026-10-15 the places are found offline and deterministically: a place name that is the label of a place of
geo-coordinates gets that place (with its GND and GeoNames links); any other name is looked up in the GeoNames dump,
with rules for exonyms (Lissa for Leszno), qualifiers ("(Oberschlesien)", ", Calif.") and population, and ambiguous
names are left out. The version of 2019 took the first hit of the GeoNames search for every name, which linked, for
example, Königsberg to Königsberg in Bayern and Karlsbad to Carlsbad in California.
