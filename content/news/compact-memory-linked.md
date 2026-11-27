+++
author = "Kai Eckert"
date = "2021-04-29T10:00:00+02:00"
title = "Compact Memory in the knowledge graph: who is mentioned where"
image = "compact-memory-title-pages.jpg"
imagecredit = "Title pages from [Compact Memory](https://sammlungen.ub.uni-frankfurt.de/cm), University Library Frankfurt"
+++

The Jewish periodicals of Compact Memory are now part of JudaicaLink: the persons and places mentioned on their pages
are linked to the knowledge graph, and a new search finds pages by these entities.

<!--more-->

Compact Memory, digitised by the University Library Frankfurt, holds the Jewish periodicals of the German-speaking
countries from 1768 to 1938, more than 800,000 pages. Since 2020, JudaicaLink Labs has offered a full-text search over
them. Now we have gone a step further:

- The entity linker TagMe found 747,758 mentions of 5,445 JudaicaLink entities, mainly persons and places, on about
  316,000 pages. The dataset [cm-tagme](/datasets/cm-tagme/) records these mentions, the dataset
  [compact-memory](/datasets/compact-memory/) the journals, issues and pages they appear on.
- The new CM Entity Search in JudaicaLink Labs finds the pages that mention a person or place, combined with the
  words of the full text.

This connects the full text with what the knowledge graph knows about the entities: their life dates, occupations
and places, and their links to the GND, VIAF and Wikidata.

*Update 2026: JudaicaLink Labs has been retired. The full-text search of Compact Memory is part of the
[FID portal](https://www.jewishstudies.de/en/judaicalink/) in Frankfurt, and the search by mentioned entities is
shown in the [Compact Memory showcase](https://mannheim.judaicalink.org/compact-memory/) on mannheim.judaicalink.org.
See [JudaicaLink in production](/production/).*
