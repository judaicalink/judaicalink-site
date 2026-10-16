+++
slug = "ls-nli-wikidata"
title = "NLI authority records linked to Wikidata"
author = "Kai Eckert"
date = "2026-10-15"
example = "http://data.judaicalink.org/data/nli/record/viaf-24602065"
kind = "linkset"
method = ["lookup"]
inputs = ["nli-records"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-nli-wikidata"
+++
<!-- Copy of catalog/ls-nli-wikidata.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The authority records of the National Library of Israel (dataset nli-records) linked to their Wikidata items.

<!--more-->

The records carry the VIAF and Library of Congress numbers of the NLI export of 2019; Wikidata states the same
numbers (P214, P244). A record gets `owl:sameAs` its Wikidata item only when the match is unique in both directions:
its numbers lead to exactly one item, and no other record leads to that item. The links join the NLI records with
the other records about the same person on the entity pages.
