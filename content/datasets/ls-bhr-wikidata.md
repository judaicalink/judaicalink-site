+++
slug = "ls-bhr-wikidata"
title = "Biographisches Handbuch der Rabbiner linked to Wikidata"
author = "Kai Eckert"
date = "2026-10-15"
example = "http://data.judaicalink.org/data/bhr/Aach_Löb"
kind = "linkset"
method = ["lookup"]
inputs = ["bhr"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-bhr-wikidata"
+++
<!-- Copy of catalog/ls-bhr-wikidata.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The persons of the Biographisches Handbuch der Rabbiner (dataset bhr) linked to their Wikidata items.

<!--more-->

Wikidata names the entry of an item in the Biographisches Portal der Rabbiner of the Steinheim-Institut with the
property P10405 (Biographisches Portal der Rabbiner ID). Every bhr record whose BHR ids lead to exactly one Wikidata
item, which no other record shares, gets `owl:sameAs` that item. The links join the rabbis of the handbook with the
other records about the same person on the entity pages.
