+++
slug = "rujen"
title = "Encyclopedia of Russian Jewry"
author = "Kai Eckert"
date = "2020-09-28"
website = "http://www.rujen.ru"
example = "http://data.judaicalink.org/data/rujen/ben-gurion"
picture = "/img/rujen_logo.png"
namespaces = ["rujen"]
aliases = ["/encyclopediae/encyclopediae-of-russion-jewry/", "/datasets/encyclopediae-of-russion-jewry/"]
stable = "2026-10-18"
kind = "records"
method = ["scraped"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/rujen"

[files]
"rujen.jsonl.gz" = "Raw data crawled from rujen.ru, input of the generator."

[[versions]]
version = "2026-10-18"
issued = "2026-10-18"
author = "Kai Eckert"
commit = "704a36d0f885a2199ea12de02114899ff909f577"
description = "Made from the crawl of 2020; records typed with the classes of the common layer."

  [[versions.files]]
  path = "rujen.jsonl.gz"
  bytes = 7829862
  sha256 = "2ded560739a06d39eee86c0506aa093d961a144491a246efc09755f1d49b3d6e"

  [[versions.files]]
  path = "rujen.ttl.gz"
  bytes = 6832950
  sha256 = "1ac2da8a90f3abc79b02708fb289a71ee154daccdaef388e8455961409a311b7"
  triples = 140402

  [[versions.files]]
  path = "rujen-meta.ttl.gz"
  bytes = 2079
  sha256 = "7a3028069ed738bbc51e5aa02bf41e0aab3a1bc784ffa79c3d1f02b6d12beffb"
  triples = 77

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "e1a85a3ceb9e4170a88e269930ecc6a6b1e5debe"
description = "Made from the crawl of 2020 with two fixes: the page addresses without the doubled /index.php//index.php/, and the crawled main page (junk records) left out."

  [[versions.files]]
  path = "rujen.jsonl.gz"
  bytes = 7829862
  sha256 = "2ded560739a06d39eee86c0506aa093d961a144491a246efc09755f1d49b3d6e"

  [[versions.files]]
  path = "rujen.ttl.gz"
  bytes = 6829500
  sha256 = "3e68c0aa3f47c0d7f8e7fe29f085c8f70118c54c2cba2b288a6fb32fd48b5c11"
  triples = 140402

  [[versions.files]]
  path = "rujen-meta.ttl.gz"
  bytes = 2032
  sha256 = "a135802e8e111feccca0f9167334e2dd2ec2eae57ebaeb5145d121994989a94d"
  triples = 71

[[versions]]
version = "2020-09-28"
issued = "2020-09-28"
author = "Kai Eckert"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "rujen.ttl.gz"
  bytes = 6783508
  sha256 = "66b4fed0d221d93c85ee58934365310bc8fd230a4b15729362d3be2f7e8f7c82"

  [[versions.files]]
  path = "rujen.jsonl.gz"
  bytes = 7829862
  sha256 = "2ded560739a06d39eee86c0506aa093d961a144491a246efc09755f1d49b3d6e"

  [[versions.files]]
  path = "rujen-meta.ttl.gz"
  bytes = 2141
  sha256 = "abdcc232b23d7ce6c00fb9e7d82b4749e650790dce90cfb201c3fffdea5ac977"
  triples = 69

[[changelog]]
date = "2026-10-18"
version = "2026-10-18"
author = "Kai Eckert"
text = "Classes of the common layer: foaf:Person for 8,283 records typed jl:Person (never defined), schema:Place for 7,446 typed jl:Place."

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "Page addresses fixed (describedAt); the crawled main page and its 34 junk records left out (70 triples)."

[[changelog]]
date = "2026-10-11"
version = "2020-09-28"
author = "Kai Eckert"
text = "Self-description written by the labs generator (rujen-metadata.ttl.gz) removed from the version; the generated -meta file takes its place. Its generation time and commit are documented in the generator folder."
refs = ["0018"]

[[changelog]]
date = "2025-06-05"
author = "Benjamin Schnabel"
text = "Encyclopedia converters rewritten in Python (judaicalink-generators); the published version was not regenerated."

[[changelog]]
date = "2018-10-22"
author = "Maral Dadvar"
text = "Revised version in Turtle (rujen.ttl.gz)."

[[changelog]]
date = "2016-09-12"
author = "Kai Eckert"
text = "First version (rujen.n3.gz; date of the first catalogue listing)."
+++
<!-- Copy of catalog/rujen.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Rujen.ru provides an Internet version of the Encyclopedia of Russian Jewry, which is published in Moscow since 1994, giving a comprehensive, objective picture of the life and activity of the Jews of Russia, the Soviet Union and the CIS.
<!--more-->

The encyclopedia is structurally divided into three parts: 1. biographical information, 2. local history of the Jewish community in pre-revolutionary Russia, the Soviet Union and the CIS, and 3. thematic information on concepts related to Jewish civilization, the contribution of the Jews of Russia in various fields of activity, various Jewish social, scientific, cultural organizations, etc. The originally published volumes contain more than 10,000 biographies and more than 10,000 place names. The electronic version contains corrections and additions in the form of new articles.

Published as CC0 with the written permission of the source.

Counts in the former catalogue entry: concepts: 20,434; links: 30,052.
