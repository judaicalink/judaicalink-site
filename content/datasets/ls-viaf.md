+++
slug = "ls-viaf"
title = "Links to the VIAF clusters"
author = "Kai Eckert"
date = "2026-10-18"
example = "http://data.judaicalink.org/data/nli/record/viaf-54984961"
kind = "linkset"
stable = "2026-10-26"
method = ["deterministic"]
inputs = ["viaf"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"jl:sameAs" = ["viaf"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/ls-viaf"

[[versions]]
version = "2026-10-26"
issued = "2026-10-26"
author = "Kai Eckert"
commit = "7f1572d6c0ba5fdc5ddabcbee2d7370744df4870"
description = "Made in the cascade of the authority datasets of 2026-10-26 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-viaf.ttl.gz"
  bytes = 4966363
  sha256 = "54ed2c4b423b58a67bf5cf6926eab52697e8d6c44a550d9542a66ef542fa1b5d"
  triples = 485040

  [[versions.files]]
  path = "ls-viaf-meta.ttl.gz"
  bytes = 2701
  sha256 = "5d0b720befe8439cd99d53deda6c4a3f19daabe381e1542ba790c41e08308ac6"
  triples = 135

[[versions]]
version = "2026-10-19"
issued = "2026-10-19"
author = "Kai Eckert"
commit = "a925699a8fcec1c453a3634722f5c3625f385e78"
description = "Made in the cascade of the authority datasets of 2026-10-19 (decisions 0029, 0032)."

  [[versions.files]]
  path = "ls-viaf.ttl.gz"
  bytes = 4971636
  sha256 = "b3177010d107092a8b091d04ec70b2066834bbcf2d101d46353d0a4734fccd9c"
  triples = 485579

  [[versions.files]]
  path = "ls-viaf-meta.ttl.gz"
  bytes = 2801
  sha256 = "a4ff97994799eb52a73fe91e6e14b508156657aa236875187797a5418d295b9a"
  triples = 147

[[changelog]]
date = "2026-10-26"
version = "2026-10-26"
author = "Kai Eckert"
text = "New version in the cascade of 2026-10-26: with the VIAF and GeoNames identifiers of footprints 2026-10-26 (from the Footprints API), without the records only the withdrawn 2014links and the former footprints version led to."

[[changelog]]
date = "2026-10-19"
version = "2026-10-19"
author = "Kai Eckert"
text = "First version: 485,579 links to the VIAF clusters; left out where the years of birth or death contradict (4,275), the classes contradict (37), and links of units below the quality threshold (footprints, geo-coordinates)."
+++
<!-- Copy of catalog/ls-viaf.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Every JudaicaLink record that refers to a VIAF cluster, linked to the JudaicaLink record of the cluster in the
dataset viaf, unless the life dates or the classes of the two contradict.

<!--more-->

The links rely on the VIAF numbers our datasets and the other authority datasets state. VIAF clusters the records of
many libraries automatically; JudaicaLink gives it the benefit of the doubt and leaves a link out only when the record
and the cluster both give a year of birth (or of death) more than one year apart, or when one is a person and the
other a work (decision 0029). A number the dataset viaf does not have (a cluster merged or made after the dump) is left
out. These links are what joins the records of different datasets on the entity pages.
