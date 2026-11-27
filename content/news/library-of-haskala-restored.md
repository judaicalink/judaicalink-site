+++
author = "Kai Eckert"
date = "2026-11-20T10:00:00+01:00"
title = "The Library of Haskala is online again, rebuilt from its data"
+++

The [Library of Haskala](https://mannheim.judaicalink.org/haskala/) is online again: every book, person, place and
term from haskala-library.net, now with a search. We rebuilt it from its data alone, which is possible only because
the data had been kept and published openly.

<!--more-->

The Library of Haskala is a research database on 525 books in German and Hebrew published between the
mid-eighteenth century and the early nineteenth century within the context of the Haskalah, the Jewish Enlightenment.
The database provides detailed information on these books and about 1,980 persons involved in their production, as
authors, editors, translators and funders. Furthermore, records may describe a respective edition in more detail,
exploring its material form, the publisher and printing press, the prefaces and their writers, other people involved
in its production or otherwise mentioned in them, its textual models and sources, and refer to later editions and
translations. In addition, the database includes information on the location of respective copies of books, although
this information is not exhaustive.

The Library of Haskala was compiled as part of a German-Israeli research project (2004–2010) headed by Shmuel Feiner
(Bar-Ilan University), Zohar Shavit (Tel Aviv University) and Christoph Schulte (University of Potsdam). From 2015 the
database was published as haskala-library.net, hosted by the Judaica Division at the Frankfurt University Library.
The site ran on Drupal 7, whose support ended in January 2025, and went offline in summer 2025.

What remained was the data. JudaicaLink had published the data on the persons in the Library as Linked Data in 2019,
taken from the web pages and linked to the GND. The bibliographical data has been partially integrated in
[Catalogues](https://portal.jewishstudies.de/Search/Results?type=AllFields&filter%5B%5D=%7Efid_judaica_collections%3A%22haskala%22)
of the FID Jewish Studies. However, the database in its entirety remained inaccessible. Thus, we decided to start
again from the original dump of the database of April 2015. As reference to the original visual representation each
record is linked to the Internet Archive copy of the old database.

From the Drupal database we recreated the JudaicaLink dataset [haskala](/datasets/haskala/) with all 525 books,
1,980 people, 327 editions, 1,867 mentions of people in books, 667 roles in the production of books, 272 prefaces,
19 translations and 809 terms in 19 vocabularies (places, publishers, topics, languages, textual models). The dataset
also describes the schema of the database, every field with its label, help text and order, so that the data can be
read without the software it came from.

Persons are linked to VIAF and to the GND and this way linked into the knowledge graph. The dataset is open, under
CC BY 4.0.

The Library of Haskala is the work of the research project of Shmuel Feiner, Zohar Shavit and Christoph Schulte;
earlier JudaicaLink versions of the dataset were made by Maral Dadvar (2019) and Benjamin Schnabel (2025). The
JudaicaLink service itself is part of the [FID Jewish Studies portal](https://www.jewishstudies.de/en/judaicalink/).
