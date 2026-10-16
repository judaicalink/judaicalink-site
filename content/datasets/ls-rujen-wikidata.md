+++
slug = "ls-rujen-wikidata"
title = "Encyclopedia of Russian Jewry articles linked to Wikidata"
author = "Kai Eckert"
date = "2026-10-15"
example = "http://data.judaicalink.org/data/rujen/blagoveshchensk"
kind = "linkset"
method = ["lookup"]
inputs = ["rujen"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-rujen-wikidata"
+++
<!-- Copy of catalog/ls-rujen-wikidata.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The articles of the Encyclopedia of Russian Jewry (dataset rujen) linked to their Wikidata items.

<!--more-->

Wikidata names the article of an item with the property P10278 (Encyclopedia of Russian Jewry ID), mostly by the
page id of rujen.ru, sometimes by the page name. Every rujen record with exactly one Wikidata item gets `owl:sameAs`
that item. The links join the rujen articles with the other records about the same person or place on the entity
pages.
