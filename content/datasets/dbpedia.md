+++
slug = "dbpedia"
title = "Wikipedia and DBpedia: the English and German articles JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-18"
website = "https://www.dbpedia.org"
example = "http://data.judaicalink.org/data/dbpedia/en/Moses_Mendelssohn"
kind = "authority"
stable = "2026-10-19"
method = ["converted", "lookup"]
namespaces = ["dbpedia"]
replaces = ["dbpedia-persons"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["wikidata"]

[license]
name = "CC-BY-SA-3.0"
uri = "https://creativecommons.org/licenses/by-sa/3.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/dbpedia"

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "dbpedia-selection.tsv.gz"
  bytes = 1179326
  sha256 = "7818536858b8f75bb53aea1034fcddce29c3e7d79ae43b905db6f517c0c0aa53"

  [[versions.files]]
  path = "dbpedia.ttl.gz"
  bytes = 2842576
  sha256 = "cfcc39933cf57817014cb104a1279103ebfefd7c1ba6a67b77e4dc4872431a98"
  triples = 400712

  [[versions.files]]
  path = "dbpedia-meta.ttl.gz"
  bytes = 2465
  sha256 = "d96cc353a07f8f97147daa8b174d840141c1258bc2246fb52df593453d020647"
  triples = 84

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "First version, replacing dbpedia-persons: 38,572 English and 34,556 German articles with their Wikidata items; old titles replaced by the current ones (1,052 English, 260 German)."
+++
<!-- Copy of catalog/dbpedia.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The English and German Wikipedia articles, and their DBpedia resources, that JudaicaLink uses: every article our
datasets or the other authority datasets name, with its current title, the Wikidata item of the article, and the
facts the former dataset dbpedia-persons had about persons.
<!--more-->

Per language, an article and its DBpedia resource are one identifier (decision 0031): `data/dbpedia/en/<title>` and
`data/dbpedia/de/<title>`. Wikipedia renames articles; an old title is followed to the current article and recorded
as replaced by it, a title that no longer exists as deprecated. Other languages are linked, not described. The
records of dbpedia-persons (2018) are replaced by the records of their articles.
