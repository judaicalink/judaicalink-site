+++
slug = "dbp-wiki-geo-linking"
title = "DBpedia and Wikipedia Geographical External Links"
author = "Kai Eckert"
date = "2021-01-13"
stable = "2021-01-13"
kind = "linkset"
method = ["lookup"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/dbp-wiki-geo-linking"

[[versions]]
version = "2021-01-13"
issued = "2021-01-13"
author = "Marco Rovera"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "dbp-wiki-geo-links.ttl"
  bytes = 515033
  sha256 = "25a8e0ea9d3a2eb06f5ffcfad3929328322c252454707398f28a7e5ecefd5236"

  [[versions.files]]
  path = "dbp-wiki-geo-linking-meta.ttl.gz"
  bytes = 1569
  sha256 = "b58695a02cc045ff31f7eae26a8ececfe587980fdf64fa582000699bb2a4bfcf"
  triples = 54

[[changelog]]
date = "2025-06-05"
author = "Benjamin Schnabel"
text = "Generator ported from Jupyter notebooks to Python scripts (judaicalink-generators); the published version was not regenerated."
+++
<!-- Copy of catalog/dbp-wiki-geo-linking.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Links between JudaicaLink Locations and DBpedia/Wikipedia via Geonames
<!--more-->

Counts in the former catalogue entry: links: 7023 triples.
