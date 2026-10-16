+++
slug = "djh"
title = "Das Jüdische Hamburg"
author = "Kai Eckert"
date = "2016-07-12"
website = "http://dasjuedischehamburg.de/"
example = "http://data.judaicalink.org/data/html/djh/ehre-ida"
picture = "/img/igdj_logo_0.jpg"
namespaces = ["djh"]
aliases = ["/encyclopediae/das-juedische-hamburg/", "/datasets/das-juedische-hamburg/"]
stable = "2018-10-22"
kind = "records"
method = ["scraped", "rule-based"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/djh"

[files]
"djh.ttl.gz" = "Extraction from the encyclopedia 'Das Jüdische Hamburg'."

[[versions]]
version = "2018-10-22"
issued = "2018-10-22"
author = "Maral Dadvar"
description = "Data files of the catalogue state judaicalink-site 81b42a5 (the state Frankfurt loaded)."

  [[versions.files]]
  path = "djh.ttl.gz"
  bytes = 104832
  sha256 = "b77f295c62f8687a18a4a14783add3a952248a4182d13573a3e6a8e5419e7019"

  [[versions.files]]
  path = "djh-meta.ttl.gz"
  bytes = 2109
  sha256 = "4c21631061ac018f3004767054c3ebfa578f98205f269f412ff6e7bacb3481ea"
  triples = 63

[[changelog]]
date = "2025-06-05"
author = "Benjamin Schnabel"
text = "Encyclopedia converters rewritten in Python (judaicalink-generators); the published version was not regenerated."

[[changelog]]
date = "2016-07-12"
author = "Kai Eckert"
text = "First version (djh.n3.gz)."
+++
<!-- Copy of catalog/djh.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
Das Jüdische Hamburg contains articles in German by notable scholars about persons, locations and events of the history of Jewish communities in Hamburg.
<!--more-->

<a href="http://dasjuedischehamburg.de/">Das Jüdische Hamburg</a> is a free online resource based on the book "Das Jüdische Hamburg - Ein historisches Nachschlagewerk", ISBN: 978-3-8353-0004-0, Wallstein, Göttingern (2006). It was published in 2006 on the occasion of the 40th anniversary of the Institute for the History of the German Jews (Institut für die Geschichte der deutschen Juden, IGdJ).


For "Das Jüdische Hamburg", we for the first time implemented a Person recognition and have been able to identify 196 person descriptions among the articles. The persons are ideally described by occupation, date of birth and death as well as location of birth and death. This automatic extraction, however, is not flawless, some errors have to be expected.

Published as CC0 with the written permission of the source. The data holds only the beginning of each article (at most about 900 characters), not the full text.

Counts in the former catalogue entry: concepts: 260; persons: 196; links: 981.
