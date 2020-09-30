+++
author = "Kai Eckert"
authorlink = "http://wiss.iuk.hdm-stuttgart.de/people/kai-eckert"
website = "http://www.yivoencyclopedia.org"
picture = "/img/yivo_logo_black-on-white-135x68.jpg"
aliases = [
    "/encyclopediae/yivo-encyclopedia/",
	"/datasets/yivo-encyclopedia/"
]

graph = "http://data.judaicalink.org/datasets/yivo"
loaded = true
category = "judaicalink"

title = "Yivo Encyclopedia"
example = "http://data.judaicalink.org/data/yivo/Moscow"
slug = "yivo"
namespace_slugs = [ "yivo",]
date = 2020-09-30T09:05:13.093339Z
[[creators]]
name = "Kai Eckert"
url = "http://wiss.iuk.hdm-stuttgart.de/people/kai-eckert"

[[files]]
filename = "yivo-metadata.ttl.gz"
filepath = "yivo/yivo-metadata.ttl.gz"
url = "http://data.judaicalink.org/dumps/yivo/yivo-metadata.ttl.gz"
description = "Metadata for yivo dataset."

[[files]]
filename = "yivo.ttl.gz"
filepath = "yivo/yivo.ttl.gz"
url = "http://data.judaicalink.org/dumps/yivo/yivo.ttl.gz"
description = "RDF dump of the yivo dataset."

[license]
name = "CC0"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"

[generator]
script = "generate_yivo.py"
gitweb = "https://github.com/wisslab/judaicalink-labs/blob/master/labs/data/management/commands/generate_yivo.py"
commit = "0a47e9521c85e423c937b5d314d7c544248c856c"

