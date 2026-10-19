+++
slug = "bhr"
title = "Biographisches Handbuch der Rabbiner"
author = "Kai Eckert"
date = "2017-09-14"
website = "http://www.steinheim-institut.de/wiki/index.php/Biographisches_Handbuch_der_Rabbiner_%28BHR%29"
example = "http://data.judaicalink.org/data/bhr/1"
namespaces = ["bhr"]
stable = "2026-10-18"
kind = "records"
method = ["scraped"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["gnd"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/bhr"

[files]
"Entityfacts-bhr-sameas.ttl.gz" = "Links of the persons to the GND and to EntityFacts (owl:sameAs)."
"bhr.ttl.gz" = "The entries of the Biographisches Portal der Rabbiner, one record per entry (from 2026-10-16)."
"bhr-beacon.ttl.gz" = "The GND numbers of the entries, from the BEACON file the Steinheim-Institut publishes (owl:sameAs)."
"bhr-vocabulary.ttl.gz" = "The properties of the sections of the portal pages (literature, documents, publications, …)."

[[versions]]
version = "2026-10-18"
issued = "2026-10-18"
author = "Kai Eckert"
commit = "906c9b0d7c201f32c0dc966c0c4c5256747469e8"
description = "Made from the portal harvest of 2026-10-16; the vocabulary links its terms to the common layer."

  [[versions.files]]
  path = "bhr-beacon.ttl.gz"
  bytes = 6684
  sha256 = "4474eeebbd4469688fc9d63c4dc2c1a88afd6ff46e968fb1439d4bc59b4ed0ea"
  triples = 805

  [[versions.files]]
  path = "bhr-vocabulary.ttl.gz"
  bytes = 563
  sha256 = "0b660e99e29cc378b22266a949a27d77897d120ff342a302e01f3678a08dbf2b"
  triples = 44

  [[versions.files]]
  path = "bhr.ttl.gz"
  bytes = 2352277
  sha256 = "d623747814a001ba82bf00617872d840a0d01ab3c794b17453afa4569f0affa3"
  triples = 80775

  [[versions.files]]
  path = "bhr-meta.ttl.gz"
  bytes = 2938
  sha256 = "80218068e022dd329b2306677cc294fb52069792ff3240d78d8358a126eb20c3"
  triples = 97

[[versions]]
version = "2026-10-16"
issued = "2026-10-16"
author = "Kai Eckert"
commit = "3d369ecc9c1c074d22784a88bd22a09e4bb0a6de"
description = "Made again from the source: a full harvest of the Biographisches Portal der Rabbiner (2,703 entries, 2026-10-16), true to the portal; IRIs from the BHR ids; the GND numbers from the portal's BEACON in a file of their own."

  [[versions.files]]
  path = "bhr-beacon.ttl.gz"
  bytes = 6684
  sha256 = "5378c6f76daf2980afaaca4409bfb0bd88755b9d337ba40afa218120bc173047"
  triples = 805

  [[versions.files]]
  path = "bhr-vocabulary.ttl.gz"
  bytes = 528
  sha256 = "d9c4c0ad89e44d435c814c36a7e35abcd644c3dd510603b3bcd88a9c3c2eb996"
  triples = 42

  [[versions.files]]
  path = "bhr.ttl.gz"
  bytes = 2352277
  sha256 = "f03b2b1e257128434830ef1aed146e509a4b2f4b49983bc918bf421611f20d64"
  triples = 80775

  [[versions.files]]
  path = "bhr-meta.ttl.gz"
  bytes = 2876
  sha256 = "4b9edfbcd43949f6643f809ecd52376001c480d5dd220dd657128553df073e1b"
  triples = 89

[[versions]]
version = "2026-10-12"
issued = "2026-10-12"
author = "Kai Eckert"
commit = "95dca09e53d201cb60058b58a4b3a3f65541dec4"

  [[versions.files]]
  path = "Entityfacts-bhr-sameas.ttl.gz"
  bytes = 29596
  sha256 = "9f62e0d592c89b796aa3873cec32dfb45fbd91ad8262568a08008c5461a33962"
  triples = 4358

  [[versions.files]]
  path = "bhr-final-05.ttl.gz"
  bytes = 1439067
  sha256 = "333b321a0641f753dc528a15d928243bf8aeeefcb5b6fae4a2ae54cb8c6a4519"
  triples = 26394

  [[versions.files]]
  path = "bhr-meta.ttl.gz"
  bytes = 2404
  sha256 = "03631e16f3b5089bdc3e88d732e50d05309fc761ca80db6fa004f1a318ae81a3"
  triples = 77

[[versions]]
version = "2018-10-24"
issued = "2018-10-24"
author = "Maral Dadvar"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded). The EntityFacts links were on the dumps server but not in the catalogue."

  [[versions.files]]
  path = "bhr-final-05.ttl.gz"
  bytes = 1516250
  sha256 = "a64d950ecc572e9fb8bceb9d289647857fcc68bad0363b60ecc6f0625f5c959f"

  [[versions.files]]
  path = "Entityfacts-bhr-sameas.ttl.gz"
  bytes = 32483
  sha256 = "2f1706d67e03b34d204a6c578b0e2f421104a55b144a0afe2f99bfc1039602f4"

  [[versions.files]]
  path = "bhr-meta.ttl.gz"
  bytes = 2646
  sha256 = "38843d50dc0f7f3e2281f466b21643d4990121fa64e9f9699fb042086e413090"
  triples = 83

[[changelog]]
date = "2026-10-18"
version = "2026-10-18"
author = "Kai Eckert"
text = "Vocabulary: the terms publication and dissertation are rdfs:subPropertyOf jl:hasPublication."

[[changelog]]
date = "2026-10-16"
version = "2026-10-16"
author = "Kai Eckert"
text = "Made from the portal: 2,703 records data/bhr/<id> with names, dates, places, biography, handbook reference and the sections of the pages; the 805 GND numbers of the BEACON (bhr-beacon.ttl.gz); the EntityFacts lookups of 2018 not carried over (links come from the linksets, decision 0029); the name IRIs of 2026-10-12 replaced by the records of their BHR id or name (2,773), 127 without a successor deprecated."

[[changelog]]
date = "2026-10-12"
version = "2026-10-12"
author = "Kai Eckert"
text = "Errors of the 2018 generator fixed (decision 0024): owl:sameAs to the DNB EntityFacts service page (783) and links with empty identifiers (9) removed, empty literals (2,141) and the GND placeholder \"NA\" (1,692) removed, the mixed records of Glückmann and Gunzenhausen separated (15 values of other records removed), jl:occpation stated as jl:occupationURI (2,900). Made from 2018-10-24 by generators/bhr/generate.py."

[[changelog]]
date = "2026-10-12"
author = "Kai Eckert"
text = "Licence name corrected to CC BY 4.0 (was \"CC4.0\"); the licence URI is unchanged."

[[changelog]]
date = "2025-06-24"
author = "Benjamin Schnabel"
text = "A script of the generator reformatted for Python 3 (judaicalink-generators); the published version was not regenerated."

[[changelog]]
date = "2017-10-02"
author = "Maral Dadvar"
text = "Links to JudaicaLink added (EncycBHR-ID-GND-JL.ttl.gz)."

[[changelog]]
date = "2017-09-14"
author = "Maral Dadvar"
text = "First version (EncycBHR-ID-GND.ttl.gz)."
+++
<!-- Copy of catalog/bhr.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The Biographisches Handbuch der Rabbiner is an online 
encyclopedia provided by the [Salomon L. Steinheim-Institute
for German-Jewish history](http://www.steinheim-institut.de) at the University of Duisburg-Essen, 
edited by Michael Brocke and Julius Carlebach.

<!--more-->

The Steinheim Institute does research in the field of German-Jewish history as of 
the Middle Ages to the present. It investigates the complex patterns of interrelations between Jewish and general history from a religious and social historical, as well as literary and cultural studies perspectives. By virtue of paying special attention to intra-Jewish contexts, traditions and sources, the institute's research provides new insights into how Jews in German-speaking areas and in the whole of Europe shaped their identities and their history in many various fields 
with self-confidence. 

The goal of this encyclopedia is to be a complete directory of 
all rabbis who lived and worked in or originated from German-speaking areas 
since the age of enlightenment.

The encyclopedia consists of two parts:

Part 1: Die Rabbiner der Emanzipationszeit in den deutschen, 
böhmischen und großpolnischen Ländern (1781 – 1871), edited by Carsten Wilke.

Part 2: Die Rabbiner im Deutschen Reich (1871 – 1945), 
edited by Katrin Nele Jansen.
