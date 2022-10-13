+++
author = "Kai Eckert"
authorlink = "http://wiss.iuk.hdm-stuttgart.de/people/kai-eckert"
picture = "/img/rujen_logo.png"
website = "http://www.rujen.ru"
aliases = [
    "/encyclopediae/encyclopediae-of-russion-jewry/",
    "/datasets/encyclopediae-of-russion-jewry/"
]
loaded = true
supportdata = "https://web.judaicalink.org/datasets/rujen-translation-supp"
category = "judaicalink"
graph = "http://data.judaicalink.org/datasets/rujen-translation"

title = "Translations for Rujen (Google)"
example = "http://data.judaicalink.org/data/rujen/ben-gurion"
slug = "rujen-translation"
namespace_slugs = [ "rujen",]
date = 2020-09-28T14:47:50.877866Z


[[creators]]
name = "Kai Eckert"
url = "http://wiss.iuk.hdm-stuttgart.de/people/kai-eckert"

[[files]]
filename = "rujen-translation-metadata.ttl"
filepath = "rujen-translation/rujen-translation-metadata.ttl"
url = "http://data.judaicalink.org/dumps/rujen-translation/rujen-translation-metadata.ttl"
description = "Metadata for rujen-translation dataset."

[[files]]
filename = "rujen-en-abstract-translations.ttl"
filepath = "rujen-translation/rujen-en-abstract-translations.ttl"
url = "http://data.judaicalink.org/dumps/rujen-translation/rujen-en-abstract-translations.ttl"
description = "RDF dump of the rujen-translation dataset."

[[files]]
filename = "rujen-en-label-translations.ttl"
filepath = "rujen-translation/rujen-en-label-translations.ttl"
url = "http://data.judaicalink.org/dumps/rujen-translation/rujen-en-label-translations.ttl"
description = "RDF dump of the rujen-translation dataset."


[[files]]
filename = "rujen-de-abstract-translations.ttl"
filepath = "rujen-translation/rujen-de-abstract-translations.ttl"
url = "http://data.judaicalink.org/dumps/rujen-translation/rujen-de-abstract-translations.ttl"
description = "RDF dump of the rujen-translation dataset."


[[files]]
filename = "rujen-de-label-translations.ttl"
filepath = "rujen-translation/rujen-de-label-translations.ttl"
url = "http://data.judaicalink.org/dumps/rujen-translation/rujen-de-label-translations.ttl"
description = "RDF dump of the rujen-translation dataset."

[license]
name = "CC0"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"

[generator]
script = "generate_rujen_translation.py"
gitweb = "https://github.com/wisslab/judaicalink-labs/blob/master/labs/data/management/commands/generate_rujen_translation.py"
commit = "39f04c243cacadc2d12e602a8b1b0929d115413a"
+++

Automatic translation of abstracts and preferred labels to English and German using Google Translate.

