+++
slug = "judaicalink-agents"
title = "JudaicaLink agents"
author = "Kai Eckert"
date = "2026-10-11"
example = "http://data.judaicalink.org/datasets/agents/persons/1"
kind = "support"
method = ["curated"]
stable = "2026-10-11"

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/judaicalink-agents"

[[versions]]
version = "2026-10-11"
issued = "2026-10-11"
author = "Kai Eckert"
commit = "d1518a95d15bed4ab1be6602b50a3ee9443c2527"

  [[versions.files]]
  path = "judaicalink-agents.ttl.gz"
  bytes = 415
  sha256 = "d5c7c890aae44ad056fc896db04d3a36fe969e85f05844e31354d33e17c2da16"
  triples = 27

  [[versions.files]]
  path = "judaicalink-agents-meta.ttl.gz"
  bytes = 1449
  sha256 = "edf442ae4e127d1efb462c040da4a92171b52ba2e5f1019d3eacc7496934129c"
  triples = 55

[[changelog]]
date = "2026-10-11"
version = "2026-10-11"
author = "Kai Eckert"
text = "First version: the agents registry of 2026-10-11 (8 persons, 1 software agent)."
+++
<!-- Copy of catalog/judaicalink-agents.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The persons and software agents named in the metadata of the JudaicaLink datasets.

<!--more-->

The metadata of every dataset version (its `-meta` file) names the persons and programs that made it by IRI
only: persons as `http://data.judaicalink.org/datasets/agents/persons/<n>`, numbered in sequence, software as
`http://data.judaicalink.org/datasets/agents/software/<name>`. This dataset gives their names. It is generated
from the registry `catalog/agents.toml` in judaicalink-data. If a person does not want to be named, the name is
removed here; the IRI stays.
