+++
slug = "hhkeydocs"
title = "Hamburger Schlüsseldokumente zur deutsch-jüdischen Geschichte"
author = "Kai Eckert"
date = "2023-11-22"
website = "https://schluesseldokumente.net/"
example = "http://data.judaicalink.org/data/hhkeydocs/person/gnd/119119013"
namespaces = ["hhkeydocs"]
stable = "2026-10-16"
kind = "records"
method = ["scraped"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["gnd", "tgn"]
"gndo:gndIdentifier" = ["gnd"]

[license]
name = "CC BY-NC-ND 4.0"
uri = "https://creativecommons.org/licenses/by-nc-nd/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-nd.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/hhkeydocs"

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "b57d381e790de0f9ccfb6feabfbc775b62afe03b"
description = "Made again from the source (JSON-LD of schluesseldokumente.net, harvested 2026-10-15/16), true to the source: IRIs from the GND, TGN and site numbers; the name IRIs of 2025-03-21 replaced."

  [[versions.files]]
  path = "hhkeydocs.ttl.gz"
  bytes = 258738
  sha256 = "e36abbab400c9a32d21e705fa625289ef110358ef0fec6a4bd472a94fa2ac489"
  triples = 32088

  [[versions.files]]
  path = "hhkeydocs-meta.ttl.gz"
  bytes = 2268
  sha256 = "8455a7dca3f56b6835e967f41f05d2d16d8b7b6460b8a256b44d69cdb4074fe3"
  triples = 63

[[versions]]
version = "2025-03-21"
issued = "2025-03-21"
author = "Benjamin Schnabel"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "hhkeydocs-final-01.ttl.gz"
  bytes = 156824
  sha256 = "2d912a077e7c53ff363d16f4b37882714373205efcc13abdb2f428ea400ce445"

  [[versions.files]]
  path = "hhkeydocs-meta.ttl.gz"
  bytes = 1780
  sha256 = "618f2e6321ed3d328d274172d3e05854a564594cda6291ca932e126c753bc3c9"
  triples = 58

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "Made from the source: 1,191 persons, 751 organisations, 1,111 places; GND numbers with hyphen or X no longer dropped; GND and TGN links as IRIs; malformed VIAF links dropped; the 1,824 name IRIs of 2025-03-21 dcterms:isReplacedBy the new records."

[[changelog]]
date = "2024-01-23"
author = "Christian Deuschle"
text = "First version, with generator."
+++
<!-- Copy of catalog/hhkeydocs.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Hamburger Schlüsseldokumente zur deutsch-jüdischen Geschichte is an online source edition realized by the Institute for the History of German Jews. <!--more-->

It contains Data about persons, places and institutions.

This online source edition, realized by the Institute for the History of German Jews, sheds thematic light on key aspects of the Jewish history of Hamburg from the early modern period to the present, using selected sources, so-called key documents, as examples.
