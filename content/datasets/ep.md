+++
slug = "ep"
title = "Entity Pages - Judaicalink"
author = "Kai Eckert"
date = "2021-01-22"
example = "http://data.judaicalink.org/data/ep/1000037"
namespaces = ["ep"]
aliases = ["/datasets/ep-supp/"]
stable = "2026-10-26"
kind = "entity-pages"
method = ["rule-based"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ep"

[files]
"entity_pages.ttl.gz" = "Entity Pages RDF data (2098149 triples)."
"ep_labels.ttl.gz" = "preferred and alternative labels for entity pages. See `label_selector.ipynb` in the repository."
"ep_locations.ttl" = "Entity Pages type classification - locations."
"ep_persons.ttl" = "Entity Pages type classification - persons."
"ep_birth_death_date_loc.ttl" = "Birth/death dates and locations for Entity Pages."
"subcategorization.ttl.gz" = "Subcategorization dataset for local Judaicalink resources."
"ep.ttl.gz" = "The entity pages: class, names, life dates and places, occupations, descriptions, coordinates, the records they represent (jl:represents) and their external identifiers (owl:sameAs)."
"ep-history.ttl.gz" = "IRIs that are no longer entity pages, one statement per event with its date: merged (jl:mergedInto), split (jl:splitInto), retired (jl:retiredDate); the history of earlier versions unchanged."

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "09d07e5a0360b0588a53a7af775fbed2592ad80f"
description = "Made from ep 2026-10-19 and the stable versions of 2026-10-26 (footprints from the API, the cascade of 2026-10-26, ls-footprints-viaf; decisions 0036, 0037)."

  [[versions.files]]
  path = "ep-history.ttl.gz"
  bytes = 4417177
  sha256 = "879d7308634b4af70274440de15d185ffd673fa19e9dd9a8014c1213c7111324"
  triples = 1502918

  [[versions.files]]
  path = "ep.ttl.gz"
  bytes = 52455091
  sha256 = "b859bf792724c4ae1d8a956c46067eaa3463c0f3831cee993fddb95faed0e96b"
  triples = 4259456

  [[versions.files]]
  path = "ep-meta.ttl.gz"
  bytes = 3700
  sha256 = "35ff776f84566e1e9874cc84a8b1f65c5000fb40d246526545eacd592821aa2d"
  triples = 174

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "396294c9a26ac8c730cbb6a709df2d2a3e49e18a"
description = "Made from ep 2026-10-12 and the stable versions of 2026-10-19, identity from our linksets only (decisions 0029, 0032)."

  [[versions.files]]
  path = "ep-history.ttl.gz"
  bytes = 4403207
  sha256 = "913a39a505bcd1b174f3be912ad3f5e72d66b0326612c6eb4b93f8d33285ccae"
  triples = 1498828

  [[versions.files]]
  path = "ep.ttl.gz"
  bytes = 52688291
  sha256 = "1de24a2aa4678ebc9a0677c46748c0c553651d76c2f66dd1bffcb98460b6c272"
  triples = 4248364

  [[versions.files]]
  path = "ep-meta.ttl.gz"
  bytes = 3771
  sha256 = "e783b7e2006c972c5c71860a51e9311441e872dedc1feb788458fb76d19c8949"
  triples = 184

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "75c5921ff58df3ecdb3602144958f703b40e4cff"

  [[versions.files]]
  path = "ep-history.ttl.gz"
  bytes = 4335406
  sha256 = "663d5746212a69b3ec89cdb524f42e3b9ca0766fb32e0c18b6a11cda50d2903c"
  triples = 1489277

  [[versions.files]]
  path = "ep.ttl.gz"
  bytes = 42328178
  sha256 = "e362789591cac1ed098bb04b0ad788cbaa37deaf129a12d50e787225cb9da79c"
  triples = 3295425

  [[versions.files]]
  path = "ep-meta.ttl.gz"
  bytes = 3528
  sha256 = "0cb009e20ceb91e0ec619aa405a783d1103e8c75aa478c7c5c55846912f3a662"
  triples = 177

[[versions]]
version = "2021-05-28"
issued = "2021-05-28"
author = "Marco Rovera"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "entity_pages.ttl.gz"
  bytes = 25813822
  sha256 = "06e4fc3e870e565b4c97db5f4d38ae97cba3c9fc5b15ba81264fda86a42420ea"

  [[versions.files]]
  path = "ep_labels.ttl.gz"
  bytes = 6962357
  sha256 = "44e5dec550100dbd5356033a128e2698488e43bb8cb99cef90be040f97590210"

  [[versions.files]]
  path = "ep_locations.ttl"
  bytes = 183635
  sha256 = "b035b3b2198b7ab304c5ebbf8c8eecda951b263563b295e02116516fa7ade718"

  [[versions.files]]
  path = "ep_persons.ttl"
  bytes = 14948404
  sha256 = "c5c8053f54ab758531eb1be05d0c7da7a7926da9e405bff98550c39c76cf3519"

  [[versions.files]]
  path = "ep_birth_death_date_loc.ttl"
  bytes = 7708440
  sha256 = "e2364f9703a864a9a9c2e80e3550d43ccd93c33aed1f48d0b9e1b2b0af5785e2"

  [[versions.files]]
  path = "subcategorization.ttl.gz"
  bytes = 19243049
  sha256 = "8b1d205a7d5a27ee2605afb8fc0e2d8cbf334ee702b55f48915838b02ec4935c"

  [[versions.files]]
  path = "ep-meta.ttl.gz"
  bytes = 3193
  sha256 = "5536fb2339d73221953443aae454102fecba25b31c09bd09b4e626ce0008e5ef"
  triples = 124

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "Footprints from the API, its VIAF numbers judged one by one (ls-footprints-viaf) and the cascade of 2026-10-26: 323,117 entities (1,009 merged, 260 split, 1,009 retired, 12,083 new); Footprints persons joined with the pages of the same persons; places of Footprints with two records (city and administrative unit) on one page; the footprints IRIs of 2024 split into the records they stood for or retired; the authority records only 2014links had brought in retired."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "Identity only from our linksets, declared per dataset and above the quality threshold; at most one record per record dataset in an entity (788 links refused); all identifiers linked, facts from the first record by a fixed order; 313,312 entities (2,428 merged, 1,395 split, 7,124 new)."

[[changelog]]
date = "2026-10-13"
version = "2026-10-12"
author = "Kai Eckert"
text = "New entity pages made from the legacy set 2021-05-28 and the records of all datasets (decision 0022): 310,214 pages; 246,291 IRIs kept, 14,917 merged, 1,492 split, 1,454,491 retired, 63,923 new. The legacy NLI pages are carried over (0010 superseded). With epidat 2026-10-12 (one record per Epidat person), the YIVO articles (typed by record-classes, linked to Wikidata by ls-yivo-wikidata, decision 0025) geo-coordinates 2026-10-12, footprints 2026-10-12 (identifier links as IRIs: 708 of its pages joined with other records) and haskala 2026-10-12 (the whole Library of Haskala database: 250 of its pages joined)."

[[changelog]]
date = "2025-06-05"
author = "Benjamin Schnabel"
text = "Generator ported from Jupyter notebooks to Python scripts (judaicalink-generators); the published version was not regenerated."

[[changelog]]
date = "2021-03-11"
author = "Marco Rovera"
text = "Birth and death dates and locations added (ep_birth_death_date_loc.ttl)."

[[changelog]]
date = "2021-02-19"
author = "Marco Rovera"
text = "Person and location classification added (ep_persons.ttl, ep_locations.ttl)."

[[changelog]]
date = "2021-02-15"
author = "Marco Rovera"
text = "Preferred and alternative labels added (ep_labels.ttl.gz)."

[[changelog]]
date = "2021-01-22"
author = "Marco Rovera"
text = "First version (entity_pages.ttl.gz)."
+++
<!-- Copy of catalog/ep.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The entity pages of JudaicaLink: one page for each person, place, organisation, work or subject, bringing together
the records that the datasets have about it. The page IRIs (`http://data.judaicalink.org/data/ep/<number>`) stay
stable from version to version.

<!--more-->

From the version 2026-10-12 on (decision 0022), each version is made from the previous one and the records of all
datasets: records are grouped by the transitive closure of their identity links (`owl:sameAs`, GND numbers; the same
identifier joins), computed fresh in every version, and the groups are compared with the pages of the previous
version. A page whose records stay together keeps its IRI; pages that turn out to be the same are merged, the oldest
IRI is kept and the others point to it (`jl:mergedInto`, can be redirected); a page that turns out to stand for
several entities is split (`jl:splitInto`, one statement per part); a page that no longer stands for a person, place,
organisation, work or subject is retired (`jl:retiredDate`). IRIs are never used again. Mistakes in the identity links
are corrected in the datasets (new versions, correction datasets), not in the entity pages.

Facts on a page (names, dates, places, occupations, descriptions, coordinates) are chosen from its records by a fixed
precedence of the datasets (GND, libraries and bibliographies, curated reference works, general knowledge bases,
automatically derived data) and of the languages (English, German, Hebrew).

The version 2021-05-28 is the legacy set by Marco Rovera (a page for every IRI of the knowledge graph of 2021,
including the mentions and pages of Compact Memory); see the generator folder.
