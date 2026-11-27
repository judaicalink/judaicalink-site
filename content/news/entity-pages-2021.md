+++
author = "Kai Eckert"
date = "2021-05-28T10:00:00+02:00"
title = "Entity pages: one page for every person and place"
+++

JudaicaLink now has entity pages: one page for each person, place or other entity, bringing together what all our
datasets say about it.

<!--more-->

The same person often appears in many of our sources: in an encyclopedia, in a library's authority file, in a
bibliography. Each of them has its own record, with its own URI. An entity page joins these records: it links to all
records that describe the same entity, following the identity links between them (`owl:sameAs`, shared GND numbers),
and collects their labels, types, dates and places of birth and death.

The page of the Haskala author Naftali Herz Homberg, for example, joins his records in the YIVO Encyclopedia, the
Library of Haskala, the Resources on German-Jewish Education and Religion and the Judaica collection of the University
Library Frankfurt with the GND, VIAF, the Library of Congress, the Bibliothèque nationale de France and Wikidata.

Entity pages have URIs of the form `http://data.judaicalink.org/data/ep/<number>`, and these URIs are meant to stay
stable: an entity page always stands for the same entity. When new data shows that two pages describe the same
entity, one of them is kept and the other refers to it; when a page turns out to join records of different entities,
it is split, and the old page refers to the new ones. A page is never reused for another entity. The entity pages are
published as the dataset [ep](/datasets/ep/).

*Update 2026: the current [page of Naftali Herz Homberg](https://mannheim.judaicalink.org/data/ep/2781574) on
mannheim.judaicalink.org.*
