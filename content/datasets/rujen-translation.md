+++
slug = "rujen-translation"
title = "Translations for Rujen (Google)"
author = "Kai Eckert"
date = "2020-09-28"
website = "http://www.rujen.ru"
example = "http://data.judaicalink.org/data/rujen/ben-gurion"
picture = "/img/rujen_logo.png"
namespaces = ["rujen"]
aliases = ["/datasets/rujen-translation-supp/"]
stable = "2026-10-12"
kind = "complement"
method = ["machine-translation"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/rujen-translation"

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "2a08eec30199d8d95bdd2593e69e760c33a8d0dd"

  [[versions.files]]
  path = "rujen-de-abstract-translations.ttl"
  bytes = 14104749
  sha256 = "7f0cb7250ec9e4990d1ec7c7ac776bc978188b136e25ba36a8300fdb7b6669c5"
  triples = 15583

  [[versions.files]]
  path = "rujen-de-label-translations.ttl"
  bytes = 1534116
  sha256 = "e3e70a8bbe6c1a572122cba5eb34a9402d90e829ba281d288a74845daab06465"
  triples = 15733

  [[versions.files]]
  path = "rujen-en-abstract-translations.ttl"
  bytes = 13384228
  sha256 = "6387e7a974fbfd095707de0374e2aa2616e405020233569beb0a2c4649b7f042"
  triples = 15583

  [[versions.files]]
  path = "rujen-en-label-translations.ttl"
  bytes = 1531668
  sha256 = "01d0e12173a9d03759da2c016ec887e3f88f48d9766140acdfd1f9edd847aa93"
  triples = 15733

  [[versions.files]]
  path = "rujen-translation-meta.ttl.gz"
  bytes = 1719
  sha256 = "ed7cffa0df89e752036e3d02415945dde4fd9d3b7178102920387977f9ecaeaf"
  triples = 94

[[versions]]
version = "2020-09-28"
issued = "2020-09-28"
author = "Kai Eckert"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "rujen-en-abstract-translations.ttl"
  bytes = 17238866
  sha256 = "856b871da06ebc338095f945ac79e9011db52475db6ae541fc4deb8adf7ba5ec"

  [[versions.files]]
  path = "rujen-en-label-translations.ttl"
  bytes = 1531668
  sha256 = "01d0e12173a9d03759da2c016ec887e3f88f48d9766140acdfd1f9edd847aa93"

  [[versions.files]]
  path = "rujen-de-abstract-translations.ttl"
  bytes = 17807166
  sha256 = "f507eb37509345598ee09089256c459ab89ad3899196ffd1aff2320a09c95a55"

  [[versions.files]]
  path = "rujen-de-label-translations.ttl"
  bytes = 1534116
  sha256 = "e3e70a8bbe6c1a572122cba5eb34a9402d90e829ba281d288a74845daab06465"

  [[versions.files]]
  path = "rujen-translation-meta.ttl.gz"
  bytes = 1918
  sha256 = "c0af2d43c5d54d8848541f90a49fd114642547cc05ef3fed22732496114feab0"
  triples = 88

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "293 abstracts that were not translated (the Russian original in the result object of the client, \"Translated(src=…, text=…)\") dropped (decision 0024). Made from 2020-09-28 by generators/rujen-translation/generate.py."

[[changelog]]
date = "2026-10-11"
version = "2020-09-28"
author = "Kai Eckert"
text = "Self-description written by the labs generator (rujen-translation-metadata.ttl) removed from the version; the generated -meta file takes its place. Its generation time and commit are documented in the generator folder."
refs = ["0018"]
+++
<!-- Copy of catalog/rujen-translation.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Automatic translation of abstracts and preferred labels to English and German using Google Translate.
