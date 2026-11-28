+++
slug = "rujen-translation"
title = "Translations for Rujen"
author = "Kai Eckert"
date = "2020-09-28"
website = "http://www.rujen.ru"
example = "http://data.judaicalink.org/data/rujen-translation/text/ben-gurion/en"
namespaces = ["rujen-translation"]
picture = "pictures/rujen-translation/logo.png"
aliases = ["/datasets/rujen-translation-supp/"]
stable = "2026-11-28"
kind = "complement"
method = ["machine-translation"]
inputs = ["rujen"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/rujen-translation"

[[versions]]
version = "2026-11-28"
issued = "2026-11-28"
author = "Kai Eckert"
commit = "af84929a9c8d24809309b8faba9b11f29eca0868"
description = "English: a new translation of all articles by Claude (Haiku 5.5 with guidelines, flagged articles corrected by Sonnet 5.5; blind review 4.2 of 5), labels derived from it in normal case; German unchanged (Google 2020)."

  [[versions.files]]
  path = "rujen-de-abstract-translations.ttl"
  bytes = 16052827
  sha256 = "fedb59fb1ac50a97dfd4cf9788dfa2ace00897fc7d489fa2923445f8db71a3a1"
  triples = 46743

  [[versions.files]]
  path = "rujen-de-label-translations.ttl"
  bytes = 1596183
  sha256 = "dea68267ad45ed0ea57a67738d1da3d7ac2400c168385b03bbfab9fb6426591b"
  triples = 15730

  [[versions.files]]
  path = "rujen-en-abstract-translations.ttl"
  bytes = 17732826
  sha256 = "bd405ede61b12d661573737733a54843502d7f9ef0fa9b495d4a2a9fa920c7ed"
  triples = 47187

  [[versions.files]]
  path = "rujen-en-label-translations.ttl"
  bytes = 1600816
  sha256 = "fbad69ca8c56a942ec00bd2abd201bfdeda30d4b0fbe44812930272921587164"
  triples = 15730

  [[versions.files]]
  path = "rujen-translation-meta.ttl.gz"
  bytes = 2868
  sha256 = "985d4800a465b988378bbee2c903bb644921f2cd24ddbc1cedd7b35ae070005a"
  triples = 105

[[versions]]
version = "2026-11-26"
issued = "2026-11-26"
author = "Kai Eckert"
commit = "52c80009f4eaaac8d86be2838d759bd33a698abf"
description = "The translated articles as texts of their own (jl:Text, translations of the texts of rujen 2026-11-26); without the translations of pages rujen does not have."

  [[versions.files]]
  path = "rujen-de-abstract-translations.ttl"
  bytes = 16052827
  sha256 = "d4672c18205cdc7a5160a7fbd0357edae1d3ddcc858bf9c3a8da8adae252a892"
  triples = 46743

  [[versions.files]]
  path = "rujen-de-label-translations.ttl"
  bytes = 1596183
  sha256 = "18a3012557f559d9400888cdc2f07439fe67d53ae9da2b3e6fa650db2d72a69b"
  triples = 15730

  [[versions.files]]
  path = "rujen-en-abstract-translations.ttl"
  bytes = 15332311
  sha256 = "6fa24d3c4d675cc0850978ed8cb81e344b40fb392b7b20667db37dc444c886de"
  triples = 46743

  [[versions.files]]
  path = "rujen-en-label-translations.ttl"
  bytes = 1593743
  sha256 = "e1eb4895c3eb307e3cff27c1add99ac0c4b6fd51e249e6becf385d14e30f0d42"
  triples = 15730

  [[versions.files]]
  path = "rujen-translation-meta.ttl.gz"
  bytes = 2019
  sha256 = "8aa8543862c64c4e54a0390848dfa7ff9a1533b83b7e84c698e07d16a53f0bb2"
  triples = 104

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
  bytes = 1798
  sha256 = "bea228b8a93f27845e02fe73ad8bd9074a74a81d0992f0c2b1abcf5ff48613f5"
  triples = 96

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
  bytes = 1961
  sha256 = "6e40500f88f7291d1cf7c5bc147ec0b82a5171b7771801394ecf649c2775d36e"
  triples = 90

[[changelog]]
date = "2026-11-28"
version = "2026-11-28"
author = "Kai Eckert"
text = "New English translation of all 15,729 articles by Claude, made with written guidelines and stored as an input (decision 0052); the English labels are the headwords of the new texts in normal case; German unchanged."

[[changelog]]
date = "2026-11-26"
version = "2026-11-26"
author = "Kai Eckert"
text = "Translated articles as jl:Text with schema:translationOfWork the text of rujen (0049), in the namespace rujen-translation (0050); the translations of the main page and the category pages left out (0050)."

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
Machine translations of the articles of rujen and their titles. English: translated in 2026 by Claude (Haiku 5.5,
following written guidelines; articles an automatic check flagged corrected by Sonnet 5.5); a blind review of a random
sample scored it 4.2 of 5. The titles are the headwords at the start of the English articles. German: Google
Translate (2020), without the longest articles.
