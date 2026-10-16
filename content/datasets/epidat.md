+++
slug = "epidat"
title = "Epidat - Epigraphical Database"
author = "Kai Eckert"
date = "2022-06-29"
website = "http://www.steinheim-institut.de/wiki/index.php/Epidat"
example = "http://data.judaicalink.org/data/epidat/hha-2512-1"
namespaces = ["epidat"]
stable = "2026-10-16"
kind = "records"
method = ["converted", "rule-based"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/epidat"

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "b57d381e790de0f9ccfb6feabfbc775b62afe03b"
description = "Made from the repository at 61046f3 as 2026-10-12, with birth dates, Gedenkbuch and Yad Vashem links from the person table, the family relations of the inscriptions, and IRIs and points in canonical form."

  [[versions.files]]
  path = "epidat.ttl.gz"
  bytes = 1832757
  sha256 = "435146d4c6df73e5f3b7f4eaa40917cd2697689a40e0d5a3122fd24ac859d076"
  triples = 435464

  [[versions.files]]
  path = "epidat-meta.ttl.gz"
  bytes = 3393
  sha256 = "fd0ba30d7b1bc75902807463ef5340e631c4d93019297ba4b315dee692c106fb"
  triples = 73

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "a865ad25ac96a9783d5a442da22ffefefc53f363"
description = "Made again from the TEI files of Epidat's research data repository (commit 61046f3): one resource per Epidat person, IRIs from the person id; the name IRIs of 2023-07-14 are replaced by the persons they described."

  [[versions.files]]
  path = "epidat.ttl.gz"
  bytes = 1727646
  sha256 = "825eae34c778cb84412e00877da8b1995a5bb062828a77ecee365d8cf094bee6"
  triples = 416724

  [[versions.files]]
  path = "epidat-meta.ttl.gz"
  bytes = 2661
  sha256 = "cd377311ff56072b950dfe8e2c783bfed9530873af6ab4f8ad5c227ad261826c"
  triples = 66

[[versions]]
version = "2023-07-14"
issued = "2023-07-14"
author = "Benjamin Schnabel"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "epidat-final-01.ttl.gz"
  bytes = 1533441
  sha256 = "0aea2e25ff18d0fa193b62a49ce923bcd5dcc87732d81b38350f0011b166718a"

  [[versions.files]]
  path = "epidat-meta.ttl.gz"
  bytes = 2183
  sha256 = "100ec89226d9b71fecab2386fae4cdd2b9f2078f2564e20e469ef564db747141"
  triples = 60

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "Birth dates (3,203), links to the Gedenkbuch (116) and Yad Vashem (63), family relations (6,685 parent, 221 grandparent, 5,702 spouse, 2,750 sibling), GND and GeoNames IRIs and points in canonical form."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "Made again from the source (decision 0024): 41,378 persons in 268 cemeteries from the TEI files of https://gitlab.rlp.net/epidat/data at commit 61046f3 (2026-08-13). IRIs data/epidat/<Epidat person id> instead of names, which conflated persons of the same name and were partly clipped; each IRI of 2023-07-14 is dcterms:isReplacedBy the persons it described (26,488 by one, 2,615 by several, 315 by none: 451 persons of seven cemeteries are no longer published by Epidat). Names without spouse and with the civil name as alternative label; GND links and Epidat's own person URIs (lod.academy) as owl:sameAs; TGN place IRIs. Left out: family relations, the occupations and birth years found with spaCy, creation times, the RDF-star statement."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Namespace corrected to epidat (was epi; the IRIs of every version are data/epidat/), example IRI of version 2026-10-12, which is made the stable version."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Licence name corrected to CC BY 4.0 (was \"CC4.0\"); the licence URI is unchanged."

[[changelog]]
date = "2022-06-29"
author = "Benjamin Schnabel"
text = "First version."
+++
<!-- Copy of catalog/epidat.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Epidat is an epigraphical database of the [Steinheim institute](http://www.steinheim-institut.de) for jewish tombstones in Germany.

It serves as inventory, for documentation, edition and for presentation of epigraphical data.
Currently, there are 228 digital editions with 39,998 tombstones (79,698 image files) online accessible.
The archive in development and maintenance by Thomas Kollatz.

<!--more-->

Epidat is a research platform for jewish tombstone epigraphy in Germany.
The database for jewish tombstone epigraphy serves as inventory, for documentation, edition and for presentation of epigraphical data.
There are 249 digital editions with 46,257 tombstones (83,126 image files) online accessible as digital edition.
Not accessible are 1479 datasets for tombstones which have been erected after the year 1952.

Since March 2019 epidat is being developed continuously as scientific research cooperation between the Salomon-Ludwig-Steinheim-Institute, Essen and the Academy of Science and Literature, Mainz.

Currently, there are two options to access the tombstones, inscriptions, person data and extensive image material which are edited in epidat. One option is the web interface which has not bein changed since 2006. Parallel an epidat BETA version is being developed, with new features, bilingual menus and optimized for mobile devices.
