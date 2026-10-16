+++
slug = "geonames"
title = "GeoNames: the places JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-16"
website = "https://www.geonames.org/"
example = "http://data.judaicalink.org/data/geonames/281184"
kind = "authority"
method = ["converted"]
namespaces = ["geonames"]
stable = "2026-10-16"

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
attribution = "GeoNames (https://www.geonames.org)"
statement = "https://web.archive.org/web/20261006030315/https://download.geonames.org/export/dump/readme.txt"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/geonames"

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "9dec0f129c40ea47066735128868e0a869c4bed1"
description = "The GeoNames features JudaicaLink uses, from the GeoNames dump of 2026-10-15: every feature that one of our datasets links."

  [[versions.files]]
  path = "geonames-selection.tsv.gz"
  bytes = 52476
  sha256 = "1cb51b58b6d958dec2e7956c19d556626881266c0181f761db7964a24360b046"

  [[versions.files]]
  path = "geonames.ttl.gz"
  bytes = 1324246
  sha256 = "f4cd218c7c5b4f8c6524ef16644799d4c4b0074506f63182f9c5f992767d89b7"
  triples = 203809

  [[versions.files]]
  path = "geonames-meta.ttl.gz"
  bytes = 3338
  sha256 = "a0113ca9de471be0b7eaf835b5f2061a3a0af965d7eb51fbcb98892edb4ad708"
  triples = 159

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "First version (decision 0029): 6,622 features with names (alternate names with language tags), coordinates, feature class and code, country, population, Wikipedia articles and Wikidata items as GeoNames gives them; the 801 nodes data/geonames/<id> of geo-enriched 2019 are records of this dataset."
+++
<!-- Copy of catalog/geonames.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The places of the GeoNames gazetteer that JudaicaLink uses: every GeoNames feature that one of our datasets links.

<!--more-->

GeoNames is a geographical database compiled from many sources (national gazetteers, mapping agencies, Wikipedia)
and edited by volunteers. Its coverage is wide, but names, coordinates and the kind of a feature are of varying
precision; several features can stand for one place (a city and its administrative unit, a historic and a current
settlement). GeoNames does not publish which identifiers it has merged or deleted.

The dataset is made from the GeoNames dump (CC BY 4.0); the date and files of the dump are in the metadata of each
version. Each record `data/geonames/<id>` is `owl:sameAs` the GeoNames feature (`https://sws.geonames.org/<id>/`) and
has its name and alternate names (with their languages), coordinates, feature class and code, country, population,
first-level administrative division, and the Wikipedia articles and Wikidata item GeoNames gives for it.
`geonames-selection.tsv.gz` lists which datasets link each feature.
