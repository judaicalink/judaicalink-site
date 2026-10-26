+++
slug = "footprints"
title = "Footprints - Jewish Books through Time and Place"
author = "Kai Eckert"
date = "2024-03-12"
website = "https://footprints.ctl.columbia.edu/"
example = "http://data.judaicalink.org/data/footprints/person/6914"
namespaces = ["footprints"]
stable = "2026-10-26-2"
kind = "records"
method = ["converted"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["viaf", "geonames"]

[license]
name = "CC BY-SA 4.0"
uri = "https://creativecommons.org/licenses/by-sa/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
attribution = "Footprints: Jewish Books Through Time and Place, ed. Michelle Chesner et al."
statement = "https://web.archive.org/web/20251002115806/https://footprints.ctl.columbia.edu/faq/"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/footprints"

[[versions]]
version = "2026-10-26-2"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "2ca32e5dd8ccbba1b5bd6ebc2f861d6c61ea01d4"
description = "As 2026-10-26, with the links of the works to their page on the site."

  [[versions.files]]
  path = "footprints-vocabulary.ttl.gz"
  bytes = 1623
  sha256 = "3a631b4c790e6c477b39a9d4dd97e07bf702bc9b869c800782c4f0c0fbfd57be"
  triples = 148

  [[versions.files]]
  path = "footprints.ttl.gz"
  bytes = 5548113
  sha256 = "a8c3f82c7ccf32b52c97f7d0325689767974c3db8bd9481c3c8d6e013797f659"
  triples = 804465

  [[versions.files]]
  path = "footprints-meta.ttl.gz"
  bytes = 3277
  sha256 = "8f568cbd274202bf69674c56ef505320cbcb8f8521093c1c1766b27d009a394f"
  triples = 89

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "004ae61d948ec64ebb37bfea0d71ff86a0201168"
description = "Converted from the Footprints API (harvest of 2026-10-19/20): works, imprints, copies, footprints, persons, places and actor records with every field; dates normalised; persons linked to VIAF, places to GeoNames."

  [[versions.files]]
  path = "footprints-vocabulary.ttl.gz"
  bytes = 1623
  sha256 = "692d9631989bbe4c11d04f4bdf645dd91e11b489d9dcad37c5204e70e0214add"
  triples = 148

  [[versions.files]]
  path = "footprints.ttl.gz"
  bytes = 5533393
  sha256 = "c4c2c21ae0a2664267b66b9cf06b863e5202daa16f5175747fbf6accc23faa8b"
  triples = 800700

  [[versions.files]]
  path = "footprints-meta.ttl.gz"
  bytes = 3315
  sha256 = "a7d134789091c728fed76ffe1036150a2a9263fe9c837951c9771489f5499cec"
  triples = 89

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "0cb49a37364697f434fecbddce7865478f484a90"
description = "Made from 2024-03-18 with its systematic errors fixed: identifier links and the relations of the books as IRIs, dictionary dates, the nameless resource, run times and empty values dropped, WKT repaired."

  [[versions.files]]
  path = "footprints.ttl.gz"
  bytes = 1257277
  sha256 = "31fc38e2552f719c8cd5bf65d3336bf722deb1311ef505c3ea304b6ba9581df3"
  triples = 91781

  [[versions.files]]
  path = "footprints-meta.ttl.gz"
  bytes = 2352
  sha256 = "381b7fd633ef18053f7cfb204447e9b7799d27aeb2330d49d976a77e95df0aa3"
  triples = 64

[[versions]]
version = "2025-03-21"
issued = "2025-03-21"
author = "Benjamin Schnabel"
description = "Regenerated with a rewritten generator that keeps only the person loop (the book and place sections and the GND, VIAF and translation lookups were dropped, apparently because the old generator no longer ran); contains only the types and names of the resources. 2024-03-18 stays the stable version."

  [[versions.files]]
  path = "footprints.ttl.gz"
  bytes = 445278
  sha256 = "01973c29750d5dcb8b9557d75b861639d82d25246140c0c5f696b85b07c3dbe3"

  [[versions.files]]
  path = "footprints-meta.ttl.gz"
  bytes = 2381
  sha256 = "0287d0362353ffaa7d1412bd6d6d763f1f31953449a46eb82f7f61b9e0ef267f"
  triples = 60

[[versions]]
version = "2024-03-18"
issued = "2024-03-18"
author = "Christian Deuschle"
description = "The richer version: books with titles, owners, former owners, places, dates of publication, authors and languages; from the backup of the dumps of 2025-02-06."

  [[versions.files]]
  path = "footprints.ttl.gz"
  bytes = 1347325
  sha256 = "a5d06cb5f3c5aee2216f7cae92060a194d1598730ecd7f822f50f01ab4781deb"

  [[versions.files]]
  path = "footprints-meta.ttl.gz"
  bytes = 2314
  sha256 = "57200b629d51a7177f4eb1165498513b038e8abafcef1409db4cd1cf0852b1a3"
  triples = 60

[[changelog]]
date = "2026-10-26"
version = "2026-10-26-2"
author = "Kai Eckert"
text = "The works link their page on the Footprints site (jl:describedAt, 3,765); otherwise as 2026-10-26."

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version from the Footprints API (decision 0034), made the stable version: 3,765 works, 6,860 imprints, 10,998 copies, 24,482 footprints, 11,642 persons (1,556 with VIAF), 1,027 places (983 with GeoNames confirmed by the API), 24,734 actor records; terms in the Footprints vocabulary; dates as displayed and normalised (decision 0035); IRIs from the API ids; the IRIs of 2024 replaced by the records they stood for (8,713 persons, 2,185 works, 120 places). Made by generators/footprints/generate.py."

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version, made by the generator in judaicalink-data (run-20261026T072438Z)."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Version 2026-10-12 made the stable version (it keeps all data of 2024-03-18, with its errors fixed)."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "New version made from 2024-03-18 (decision 0024): owl:sameAs as IRIs (2,298; 673 'None' dropped), the relations of the books as IRIs (6,029; gndo:ditor as gndo:editor), dates written as Python dictionaries dropped as duplicates (220) or stated as EDTF (2), the resource of the empty name and its 74 links dropped, the run times (dcterms:created, 11,571) and empty or 'None' values (967) dropped, WKT points repaired (99). Made by generators/footprints/generate.py."

[[changelog]]
date = "2024-03-12"
author = "Christian Deuschle"
text = "First version, with generator."
+++
<!-- Copy of catalog/footprints.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Footprints traces the history and movement of Jewish books since the inception of print. <!--more--> 

The history of the book is an important part of humanities scholarship. Especially as more books are digitized, scholars, librarians, collectors, and others have become increasingly attuned to the significance of individual books as objects with their own unique story. Jewish books in particular tell a fascinating story about the spread of knowledge and faith in a global Diaspora.

Every literary work represents a moment in time and space where an idea was conceived and documented. But the history of a book continues long after composition as it is bought, sold, shared, read, confiscated, stored, or even discarded. This history is the essence of Footprints.

The dataset is converted from the Footprints API: written works, imprints, copies (books) and their footprints
(where a copy was, when, and who owned or handled it), with the persons, places and actors (the roles of persons in
a work, imprint, copy or footprint), every field as the API gives it, with the terms of the Footprints vocabulary
(`footprints-vocabulary.ttl.gz`); names, birth and death dates, authors, editors and publishers also with the common
properties of JudaicaLink. Persons are linked to VIAF as Footprints gives it, places to GeoNames where the API
confirms the GeoNames id. Dates are given as displayed and normalised, as XSD dates or EDTF. Footprints does not tell
persons from organisations; their classes are in the dataset record-classes. The IRIs of the earlier versions are
replaced by the records they stood for.
