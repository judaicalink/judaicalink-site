+++
slug = "geo-coordinates"
title = "Geographical Coordinates"
author = "Kai Eckert"
date = "2018-10-04"
example = "http://data.judaicalink.org/data/geo-coordinates/Aachen"
namespaces = ["geo-coordinates"]
stable = "2026-10-12"
kind = "records"
method = ["rule-based"]
several_per_entity = "one record per place name as the sources write it (Czernowitz, Cernăuţi, Černivci)"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["gnd", "viaf", "geonames"]
"gndo:gndIdentifier" = ["gnd"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/geo-coordinates"

[files]
"city-geocoor-05.ttl.gz" = "Geographical Coordinates of Cities"
"geo-coordinates.ttl.gz" = "The places with their coordinates and identifiers"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "43c2883213ce17ac9f2b66f4b48892acf3c93a8c"
description = "Made from 2018-08-08 with its places in the namespace geo-coordinates and typed jl:Place; the old IRIs are replaced by the new ones."

  [[versions.files]]
  path = "geo-coordinates.ttl.gz"
  bytes = 155920
  sha256 = "b059aeb643db2567c8f9988cc4df0080d62494006fc55ede2a93fc2b4ab01ad2"
  triples = 21369

  [[versions.files]]
  path = "geo-coordinates-meta.ttl.gz"
  bytes = 1605
  sha256 = "296ca25a7607ff1c992596e9d1ed8687aed83ec1adfe8e5ae88f0f987389b2c6"
  triples = 62

[[versions]]
version = "2018-08-08"
issued = "2018-08-08"
author = "Maral Dadvar"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "city-geocoor-05.ttl.gz"
  bytes = 142001
  sha256 = "c4fdf74620e2023a938bbab11103b1af87c5cef0daf5f8ae40b0c74d1ab18004"

  [[versions.files]]
  path = "geo-coordinates-meta.ttl.gz"
  bytes = 1685
  sha256 = "efc82260bfc9a0db00ee1e137e50d3c16fd359b256904dfd4c7b237ec982a4d4"
  triples = 59

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Kind records instead of complement (the dataset coins its place resources); example IRI and stable version 2026-10-12."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "New version made from 2018-08-08 (decision 0024): the 2,701 places get IRIs data/geo-coordinates/<name> instead of data/<name>, each old IRI dcterms:isReplacedBy its new IRI; typed jl:Place instead of skos:Concept; the swapped jl:lat/jl:lon of three places (repeated in geo:asWKT) dropped. One file geo-coordinates.ttl.gz."
+++
<!-- Copy of catalog/geo-coordinates.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
 This dataset contains all the geo-coordinates of all the cities which are stated in the JudaicaLink datasets either as birth location or death location. All these coordinates as well as their GND-ids are extracted from GND entries of the corresponding cities when available. 
