+++
slug = "corrections-links"
title = "Corrections of identity links"
author = "Kai Eckert"
date = "2026-10-12"
stable = "2026-10-12-2"
kind = "correction"
method = ["curated"]
inputs = ["interlinks", "dbpedia-persons", "gnd-persons", "ubffm-persons", "hhkeydocs", "nli-records", "ls-nli-legacy", "dbp-wiki-geo-linking", "cm-entities", "footprints", "haskala"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/corrections-links"

[[versions]]
version = "2026-10-12-2"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "75c5921ff58df3ecdb3602144958f703b40e4cff"

  [[versions.files]]
  path = "corrections-links-deletions.ru.gz"
  bytes = 3291
  sha256 = "e84a2cd9a6b8f2970a90be28747415512755603018c491802c1414582837c79c"

  [[versions.files]]
  path = "corrections-links-meta.ttl.gz"
  bytes = 2062
  sha256 = "dbbcc01b4c3afe4c83fa057270fdbe1bd46ff9138163bb0149672e80e71f18f7"
  triples = 82

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "b3bbaa879db15c0feced64fadaa8ddab38a705e7"

  [[versions.files]]
  path = "corrections-links-deletions.ru.gz"
  bytes = 2548
  sha256 = "54a4866666912964a3f0bbbf537ef9f5fcdc03333a38eeb08329dda24c5617ce"

  [[versions.files]]
  path = "corrections-links-meta.ttl.gz"
  bytes = 2018
  sha256 = "7f7312f39cd825b13420ca155649963d6e5710e1d2e1b8a76f2dcb78ea841c14"
  triples = 78

[[changelog]]
date = "2026-10-13"
version = "2026-10-12-2"
author = "Kai Eckert"
text = "Second version: 85 wrong identity links deleted in 11 datasets, the 76 of 2026-10-12 and 9 VIAF links of footprints and haskala persons to the VIAF cluster of a work (found with the entity-page closure: persons joined with NLI work records). Made a new version because eleven versions already record 2026-10-12 as an applied correction."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "First version: 76 wrong identity links deleted in 9 datasets (persons and places joined with others); found with the entity-page closure (decisions 0022, 0023)."
+++
<!-- Copy of catalog/corrections-links.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Corrections of identity links (`owl:sameAs`, GND numbers, types) that join different persons or places: Sherira Gaon
and his son Hai Gaon, the two Otto Warburgs, Simeon bar Yochai and Simeon ben Gamliel II, works of the NLI and their
authors, and others. A correction dataset (decision 0023): its deletions are applied after all other datasets.

<!--more-->

- `corrections-links-deletions.ru.gz`: the triples to delete from every graph that contains them, as SPARQL 1.1 Update
  in the fixed form of decision 0023, with the evidence for each block as a comment.
- `corrections-links.ttl.gz`: the triples added, in a version that adds any (this one does not).

Found by checking the groups of the entity-page closure (decision 0022) that contain several Wikidata items or records
of incompatible classes, and checked one by one (Wikidata, id.loc.gov, the records themselves). Systematic errors of a
dataset are fixed by a new version of it instead (decision 0024).
