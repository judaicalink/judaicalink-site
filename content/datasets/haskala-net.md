+++
slug = "haskala-net"
title = "haskala.net – Haskala in Biographies"
author = "Kai Eckert"
date = "2026-11-12"
website = "https://www.uni-potsdam.de/de/haskala/"
example = "http://data.judaicalink.org/data/haskala-net/person/beer"
namespaces = ["haskala-net", "haskala"]
stable = "2026-11-12"
kind = "records"
unlisted = "It will be published once the University of Potsdam, which runs haskala.net, has seen it."
method = ["scraped", "rule-based", "curated"]

[identity]   # the properties that state identity, and towards which sources (decision 0032)
"owl:sameAs" = ["gnd"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/haskala-net"

[[versions]]
version = "2026-11-12"
issued = "2026-11-12"
author = "Kai Eckert"
commit = "b3e68f8f0708bf21deb73fece2a7c246e8703757"
description = "First version: made from the pages of haskala.net at the University of Potsdam and the archived haskala.net (2003-2018): 37 persons, 40 articles, about 1,000 works, the portraits; the beginnings of the biographies; pictures linked."

  [[versions.files]]
  path = "haskala-net-gnd-2019.ttl.gz"
  bytes = 632
  sha256 = "4adc224fe2a7cb9f7342016b4a1f475b64ef27dc2cd9204cb255028f4948b863"
  triples = 32

  [[versions.files]]
  path = "haskala-net.ttl.gz"
  bytes = 110714
  sha256 = "faa46080db126bfd6c7172408dade11e37867832887c4e3a0be7a94a0940e2ee"
  triples = 7614

  [[versions.files]]
  path = "haskala-net-meta.ttl.gz"
  bytes = 2968
  sha256 = "a6963f6d0677db1c59e2a43cf14f5bd12f55cbc1735e71d4759860d7d01c5054"
  triples = 90

[[changelog]]
date = "2026-11-12"
version = "2026-11-12"
author = "Kai Eckert"
text = "First version (decision 0047): the persons of haskala.net with life dates as the pages give them, the bibliographies and literature (811 and 84 entries), the texts and portraits with a page of their own, the 40 articles with their authors and citations, the beginning of each biography (up to 900 characters), the pictures linked; every resource links its page at Potsdam and its archived pages of haskala.net (246); 55 entries and 5 texts only on the archived pages. Replaces the 32 haskala.net persons of haskala (2019 IRIs), GND links carried over."

[build]   # set by jl sync-site: the entry is unlisted (decision 0048)
  list = "never"
[sitemap]
  disable = true
+++
<!-- Copy of catalog/haskala-net.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The persons of haskala.net, the online lexicon of the Jewish Enlightenment of the University of Potsdam, with their
life dates, the bibliographies of their writings, the literature about them, the texts and portraits presented on the
site, and the articles of the lexicon.

<!--more-->

haskala.net (ed. Christoph Schulte, University of Potsdam) presents the protagonists of the Haskala in biographies
and bibliographies written by members of the project, together with sources edited on the site (autobiographies,
letters, essays) and portraits ("Haskala in Bildern"). It went online about 2003 at haskala.net; the site is now part
of the website of the University of Potsdam (<https://www.uni-potsdam.de/de/haskala/>), and the earlier versions are
archived by the Internet Archive.

The dataset is made from the pages of the current site, and the archived pages of haskala.net are linked. Persons,
works and portraits link the pages that describe them: the current page at Potsdam and the archived pages of
haskala.net. Of the biographies, the data holds only the beginning (at most about 900 characters), not the full
text; the articles name their authors and how to cite them. The pictures are linked where the site shows them, not
copied.

The 32 persons of haskala.net were part of the dataset `haskala` until its version 2026-10-12 (from a list of 2019);
their IRIs are replaced by the persons of this dataset, and their GND links carried over.

### How the data looks

Examples from version 2026-11-12, in Turtle (`jl:` is <http://data.judaicalink.org/ontology/>; `skos:`, `foaf:`,
`dcterms:`, `schema:`, `rdfs:` and `owl:` as usual). Long lists and texts are cut short here, marked `…`.

A **person**, with the facts as the header line of the page gives them, the beginning of the biography, the picture
on the site (linked, not copied) and every page that describes the person, at Potsdam and in the Internet Archive:

```turtle
<http://data.judaicalink.org/data/haskala-net/person/beer>
    a foaf:Person ;
    skos:prefLabel "Peter Beer" ;
    skos:altLabel "פטר באר" ;
    jl:birthDate "1764" ;
    jl:birthLocation "Neu-Bydžov" ;
    jl:deathDate "1838" ;
    jl:deathLocation "Prag" ;
    jl:occupation "Gelehrter" , "Lehrer" , "Schriftsteller" ;
    jl:hasAbstract "Mit 13 Jahren ging Beer nach Prag und von da nach Preßburg; an beiden Orten studierte er den Talmud. Dann aber wich er von den traditionellen Wegen ab und ging nach Wien, wo sich u. a. Sonnenfels seiner annahm und ihn stark beeinflusste. … befasst. […]"@de ;   # up to 900 characters
    foaf:depiction <https://www.uni-potsdam.de/fileadmin/projects/haskala/migrated_contents/Beer_-_Bildqueer.jpg> ;
    jl:describedAt <https://www.uni-potsdam.de/de/haskala/haskala-in-biographien/beer> ,
                   <https://web.archive.org/web/20180515000321/http://www.haskala.net/autoren/beer01.html> ,
                   <https://web.archive.org/web/20090629032318/http://www.haskala.net/autoren/beer01/biographie.html> ;   # …
    jl:hasPublication <http://data.judaicalink.org/data/haskala-net/work/beer/9> ;   # … (23 works)
    owl:sameAs <https://d-nb.info/gnd/117582085> .   # from the list of 2019 (file haskala-net-gnd-2019.ttl.gz)

<https://www.uni-potsdam.de/fileadmin/projects/haskala/migrated_contents/Beer_-_Bildqueer.jpg>
    dcterms:description "Peter Beer, Kupferstich, um 1900" ;
    dcterms:source "Foto: The Jewish National and University Library, Jerusalem" .
```

A **work** of the bibliography, as the entry reads, under the heading of its part of the bibliography, with the
pages that list it (here the current one, and the bibliography as archived in 2007 and 2009):

```turtle
<http://data.judaicalink.org/data/haskala-net/work/beer/9>
    a schema:CreativeWork ;
    skos:prefLabel "דת ישראל, oder, Das Judenthum, das ist: Versuch einer Darstellung aller wesentlichen Glaubens- Sitten- und Ceremoniallehren heutiger Juden …" ;
    dcterms:bibliographicCitation "דת ישראל, oder, Das Judenthum, das ist: Versuch einer Darstellung aller wesentlichen Glaubens- Sitten- und Ceremoniallehren heutiger Juden …" ;
    dcterms:type "Bücher" ;
    jl:describedAt <https://www.uni-potsdam.de/de/haskala/haskala-in-biographien/beer> ,
                   <https://web.archive.org/web/20090629114337/http://www.haskala.net/autoren/beer01/bibliographie.html> .   # …
```

**Literature** about the person (with the links of the entry), and an entry that only the archived pages have:

```turtle
<http://data.judaicalink.org/data/haskala-net/work/beer/2>
    a schema:CreativeWork ;
    skos:prefLabel "Hecht, Louise: Beer, Peter, in: The YIVO Encyclopedia of Jews from Eastern Europe, letzter Zugriff (7. Dez. 2017]." ;
    dcterms:type "Literatur" ;
    dcterms:subject <http://data.judaicalink.org/data/haskala-net/person/beer> ;
    rdfs:seeAlso <http://www.yivoencyclopedia.org/article.aspx/Beer_Peter> .   # …

<http://data.judaicalink.org/data/haskala-net/work/haskala.net/autoren/herz01/bibliographie/1>
    a schema:CreativeWork ;
    skos:prefLabel "7. Grundriß aller medicinischen Wissenschaften, Berlin 1782." ;
    dcterms:type "Bücher" ;
    jl:describedAt <https://web.archive.org/web/20091209014442/http://www.haskala.net/autoren/herz01/bibliographie.html> .   # …
```

The **article** of the lexicon, with its authors and the citation the site asks for:

```turtle
<http://data.judaicalink.org/data/haskala-net/article/beer>
    a foaf:Document ;
    dcterms:title "Peter Beer. Biographie und Bibliographie" ;
    dcterms:creator "Vladek Viehmann" , "Andreas Kennecke" ;
    dcterms:bibliographicCitation "Vladek Viehmann und Andreas Kennecke: Peter Beer. Biographie und Bibliographie, in: haskala.net. Das online-Lexikon zur jüdischen Aufklärung / hg. von Christoph Schulte, URL<>, letzter Zugriff [Datum, Uhrzeit]." ;
    foaf:primaryTopic <http://data.judaicalink.org/data/haskala-net/person/beer> ;
    jl:describedAt <https://www.uni-potsdam.de/de/haskala/haskala-in-biographien/beer> .   # …
```

A **text** edited on a page of its own, and a **portrait**:

```turtle
<http://data.judaicalink.org/data/haskala-net/work/bendavid/material/quelle>
    a schema:CreativeWork ;
    skos:prefLabel "Lazarus Bendavid - Autobiographie (1806)" ;
    dcterms:creator <http://data.judaicalink.org/data/haskala-net/person/bendavid> ;
    dcterms:bibliographicCitation "Bildnisse jetztlebender Berliner Gelehrten mit Ihren Selbstbiographieen. Zweite Sammlung, hrsg. von M.S. Lowe, Berlin 1806, S. 1-72." ;
    rdfs:seeAlso <http://gdz.sub.uni-goettingen.de/dms/load/img/?PID=PPN756272378%7CLOG_0006&physid=PHYS_0006> ;
    jl:describedAt <https://www.uni-potsdam.de/de/haskala/haskala-in-biographien/bendavid/material/quelle> ,
                   <https://web.archive.org/web/20160304234846/http://www.haskala.net/autoren/bendavid01/autobiographie.html> .   # …

<http://data.judaicalink.org/data/haskala-net/work/haskala-in-bildern/portraitherz>
    a schema:CreativeWork ;
    skos:prefLabel "Anna D. Therbusch: Portrait der Henriette Herz [Ausschnitt], Berlin 1778" ;
    dcterms:type "Portrait" ;
    dcterms:subject <http://data.judaicalink.org/data/haskala-net/person/henriette-herz> ;
    foaf:depiction <https://www.uni-potsdam.de/fileadmin/projects/haskala/migrated_contents/Teaser_Herz__1778__I.jpg> ;
    jl:describedAt <https://www.uni-potsdam.de/de/haskala/haskala-in-bildern/portraitherz> ,
                   <https://web.archive.org/web/20180312165951/http://www.haskala.net/portraits/portraethenrietteherz.html> .   # …
```

The IRI of 2019 is replaced by the person:

```turtle
<http://data.judaicalink.org/data/haskala/Peter_Beer>
    dcterms:isReplacedBy <http://data.judaicalink.org/data/haskala-net/person/beer> .
```

