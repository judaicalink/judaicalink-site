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

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
attribution = "GeoNames (https://www.geonames.org)"
statement = "https://web.archive.org/web/20261006030315/https://download.geonames.org/export/dump/readme.txt"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/geonames"
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
