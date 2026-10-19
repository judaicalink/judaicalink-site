+++
slug = "cm-entities"
title = "Compact Memory entities: presence and Wikidata"
author = "Kai Eckert"
date = "2026-10-12"
kind = "complement"
method = ["deterministic", "lookup"]
namespaces = ["cm-entities"]
example = "http://data.judaicalink.org/data/cm-entities/presence/dbpedia/A._E._Housman"
inputs = ["cm-tagme", "dbpedia-persons", "interlinks"]
stable = "2026-10-12"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["wikidata"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/cm-entities"

[files]
"cm-entities-presence.ttl.gz" = "For every entity linked in Compact Memory, its presence in the corpus (jl:CorpusPresence): mentions, pages, first and last year, journals, the journal with the most mentions."
"cm-entities-wikidata.ttl.gz" = "For the entities that no other dataset names: Wikidata item, labels (de, en, he), type, coordinates, GND, VIAF and GeoNames IDs."

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "b8e227c3dc120eeabdda242096eca3683fbc2683"

  [[versions.files]]
  path = "cm-entities-presence.ttl.gz"
  bytes = 151858
  sha256 = "cd0544b62161b4ecc6a84a9e9918562328587106f60585db81472fde3a9d5967"
  triples = 48997

  [[versions.files]]
  path = "cm-entities-wikidata.ttl.gz"
  bytes = 273155
  sha256 = "8e0d443a9eaa07fe89e68e51c6d35e642e0c034328058d930ada90a0fea20c5c"
  triples = 40303

  [[versions.files]]
  path = "cm-entities-meta.ttl.gz"
  bytes = 3240
  sha256 = "54f61ea9b35c93e466a56cd3e2625297cb30ecc6da72246022e3f308cd4186da"
  triples = 83

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: the presence of the Compact Memory entities in the corpus (jl:CorpusPresence) and Wikidata data for those no dataset names (cm-entities-presence and cm-entities-wikidata of kg-complements, decision 0020)."
+++
<!-- Copy of catalog/cm-entities.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
What is known about the entities (mainly persons and places) that were linked in the Compact Memory full text by
TagMe (cm-tagme): how often and when they are mentioned, and, for those that no other dataset names, their data from
Wikidata.

<!--more-->

Presence: for every entity, a `jl:CorpusPresence` that links it (`jl:entity`) with the corpus Compact Memory
(`jl:corpus`, `http://data.judaicalink.org/data/compact-memory/corpus`) and states the number of mentions and pages,
the first and last year of mention, the number of journals and the journal with the most mentions; years and journals
come from the full-text index via the page. The node IRIs are
`http://data.judaicalink.org/data/cm-entities/presence/<the entity IRI after data/>`. The counts are exact for the
TagMe links, which are themselves automatic (cm-tagme).

Wikidata: for the entities that no other dataset names, the Wikidata item, found through the German Wikipedia title in
the entity IRI (following redirects); labels in German, English and Hebrew; the type (person, or place if the item has
coordinates); coordinates; and GND, VIAF and GeoNames identifiers from Wikidata. The statements are about the entities
(the records of cm-tagme), not about entity pages.
