+++
slug = "haskala"
title = "The Library of Haskala"
author = "Kai Eckert"
date = "2019-07-01"
website = "https://www.haskala-library.net/"
example = "http://data.judaicalink.org/data/haskala/person/28"
namespaces = ["haskala"]
stable = "2026-10-12"
kind = "records"
method = ["scraped", "converted", "lookup", "curated"]

several_per_entity = "two sources: the library database and the 32 biographies of haskala.net (haskala/Salomon_Pappenheim next to haskala/person/395)"

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["gnd"]   # VIAF: matched by name (37% in docs/reports/2026-10-18-link-quality.md)
"gndo:gndIdentifier" = ["gnd"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
attribution = "The Library of Haskala, research project of Shmuel Feiner, Zohar Shavit and Christoph Schulte, 2004-2010 (https://web.judaicalink.org/datasets/haskala/); FID Jewish Studies; JudaicaLink"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/haskala"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "75c5921ff58df3ecdb3602144958f703b40e4cff"
description = "Made from the Drupal database of the Library of Haskala (dump of 2015-04-20): all 1,980 persons, 525 books, editions, mentions, productions, prefaces, translations and 809 taxonomy terms with all their fields, and the schema of the database; the 2019 IRIs replaced; the haskala.net persons of 2019 kept."

  [[versions.files]]
  path = "haskala-gnd-2019.ttl.gz"
  bytes = 1257
  sha256 = "1d96ec95b4954865b0c2a912e5db1fc9ce352328b6eb4b07a9ef7c6afcd7f0f7"
  triples = 125

  [[versions.files]]
  path = "haskala-net.ttl.gz"
  bytes = 5941
  sha256 = "d2b6283f9ea5e15d426aeaa2ecbb983d4afd3389ca9d43762c471457e92c7cbc"
  triples = 771

  [[versions.files]]
  path = "haskala-vocabulary.ttl.gz"
  bytes = 13093
  sha256 = "2bc6a01ce4bb316b4efd715533899be52bfdd273b78619f8499268b79f179440"
  triples = 3026

  [[versions.files]]
  path = "haskala.ttl.gz"
  bytes = 871677
  sha256 = "03c3c988a5abf8cd72c3fa9f963345cfa3798f77f8c5ce3482e900a874d26b2a"
  triples = 73745

  [[versions.files]]
  path = "haskala-meta.ttl.gz"
  bytes = 4556
  sha256 = "785e7e051f233b03b5e0396f12a1a32a7b4854b683ba235e2cf3f868b2a4c4ec"
  triples = 104

[[versions]]
version = "2025-03-24"
issued = "2025-03-24"
author = "Benjamin Schnabel"
description = "Regenerated; the persons are split into Haskala.ttl and Haskala_net.ttl (only the first was in the catalogue before). Most birth and death dates and places of the version of 2019 are missing, so 2019-07-01 stays the stable version."

  [[versions.files]]
  path = "Haskala.ttl.gz"
  bytes = 19519
  sha256 = "c167c1ef7719d90963c0b5d2ffb01cb4c62ce9c7f95670e38e2a46d2fa7dff85"

  [[versions.files]]
  path = "Haskala_net.ttl.gz"
  bytes = 2824
  sha256 = "79a450e29adb2cfc747f9ba5b8bde98901f657c05c74af7f3af15ce3d3b538b1"

  [[versions.files]]
  path = "haskala-meta.ttl.gz"
  bytes = 3450
  sha256 = "78124c6b505cc0ae4bf2523c7633e6115ff6a39b78a99df990e1d4665d3c47f1"
  triples = 74

[[versions]]
version = "2019-07-01"
issued = "2019-07-01"
author = "Maral Dadvar"
description = "The enriched version of 2019, with birth and death dates and places."

  [[versions.files]]
  path = "Haskala_enriched.ttl.gz"
  bytes = 34911
  sha256 = "b024ce78236af00ba1480dd63eff33a5f42e0c22c8c0251b0e760fb7e7d7049b"

  [[versions.files]]
  path = "haskala-meta.ttl.gz"
  bytes = 3288
  sha256 = "71c92875da22f61234cd799ccc3558a715a8b663142c3e9773802b47c8f1e3ed"
  triples = 63

[[changelog]]
date = "2026-10-13"
version = "2026-10-12"
author = "Kai Eckert"
text = "Made again from the source (decisions 0024, 0026): the Drupal database of haskala-library.net (dump of 2015-04-20, content tables only), true to the database: 5,657 nodes of seven content types (1,980 persons, 525 books, 327 editions, 1,867 mentions, 667 productions, 272 prefaces, 19 translations), 809 terms of 19 taxonomies, 39,225 field values, and the schema (haskala-vocabulary.ttl.gz: classes and properties in data/haskala/vocab/ with labels, types, targets and order). Persons foaf:Person with VIAF links (583), books jl:Work, cities jl:Place with coordinates. The 194 library persons of 2019 are dcterms:isReplacedBy their nodes (5 by two duplicate nodes), their GND links carried over (125); the 32 haskala.net persons keep their IRIs and 2019 data, with their occupations. Made by generators/haskala/generate.py."

[[changelog]]
date = "2026-10-13"
author = "Kai Eckert"
text = "Licence CC BY 4.0 (was CC0), crediting the authors of the Library of Haskala, the FID Jewish Studies and JudaicaLink; from version 2026-10-12 on, the first with the data of the whole database. Versions 2019-07-01 and 2025-03-24 were published under CC0 and stay available under it."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Version 2026-10-12 (from the database) made the stable version; example IRI of that version."

+++
<!-- Copy of catalog/haskala.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The Library of Haskala contains 525 books in German and Hebrew identified by leading scholars as Haskala literature,
with the persons who wrote, translated, printed, funded or are mentioned in them.

<!--more-->

The data comes from a German-Israeli research project (2004–2010) headed by Shmuel Feiner (Bar-Ilan University),
Zohar Shavit (Tel Aviv University) and Christoph Schulte (University of Potsdam). Its database was published as
haskala-library.net, hosted by the Judaica Division of the Frankfurt University Library; the site is offline now
(archived by the Internet Archive from 2016 to 2025). Since version 2026-10-12, the dataset holds the whole database:
persons, books with their bibliographical and material description, editions, prefaces, translations, the persons
mentioned in the books and their roles, and the taxonomies (places, publishers, topics, languages, …), together with
a description of its schema. Version 2019-07-01 held the persons only, enriched with GND data; it also includes 32
persons of the Haskala biographies of the University of Potsdam (haskala.net), which the current version keeps.

### The start page of haskala-library.net (last version)

> This database contains 525 books in German and Hebrew identified by leading scholars as Haskala literature. The
> database is hosted and run by the Judaica Division of the Frankfurt University Library.
>
> Contact: […] Please share any further information.
>
> The detailed bio-bibliographical information, presented here for the first time, was collected as result of a
> collaborative research, headed by Profs. Shmuel Feiner, Bar Ilan University; Zohar Shavit, Tel Aviv University and
> Christoph Schulte, Universität Potsdam within a joint German-Israeli Research Project in 2004-2010.
>
> Please note: for every book title only those fields containing information are presented.

Contact today: the [FID Jewish Studies](https://www.jewishstudies.de/en/fid-jewish-studies/kontakt/) (the contact
addresses of the start page are left out here).

### How the site presented the data

From the archived pages (Internet Archive, 2016–2019) and the configuration in the database:

- **Start page:** the text above and a tag cloud of topics.
- **Books, Digital books, People, Places:** lists from A to Z, by Latin and Hebrew initial. Digital books are the
  books with a link to a digitised copy. Places also show a map of the cities with coordinates.
- **A page for every term** of the taxonomies (topics, textual models, fonts, languages, publishers, cities,
  occupations, …), listing its books, 20 per page.
- **Book pages:** the title and the main facts first (type of book, full title, whether the text is presented as an
  original, a translation or a new edition, its textual and cultural sources), then sections with jump links:
  Publisher/ Printing press, Editions, Book structure, Persons mentioned in book, Textual models, Catalog numbers,
  References and bibliography, Book producers (the persons with their roles), Prefaces (number, writer, role,
  title). Only fields with a value are shown; yes/no fields as "Yes"/"No"; terms, persons and places as links.
- **Person pages:** Hebrew and German name, gender, dates and places of birth and death, occupations (roles in book
  production), VIAF id, and the related books.
- No search form appears on the archived pages (a full-text search was configured in the database, but it is not
  known whether it was offered); editing was for logged-in editors only.

The sections of the book pages are not stored in the database (they were part of the site's code). In the dataset,
each field of a content type is described in `haskala-vocabulary.ttl.gz` with its label, help text and order.
