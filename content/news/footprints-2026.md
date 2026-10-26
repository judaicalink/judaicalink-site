+++
author = "Kai Eckert"
date = "2026-10-26T15:00:00+01:00"
title = "Footprints: the complete dataset, and a map of where the books went"
image = "footprints-showcase.jpg"
+++

[Footprints: Jewish Books Through Time and Place](https://footprints.ctl.columbia.edu/) collects the evidence that a
copy of a Jewish book was at a place at a time: an owner's signature, a censor's mark, a bookseller's catalogue, a
library catalogue. A new version of the JudaicaLink dataset [footprints](/datasets/footprints/) now holds all of it,
and a new showcase puts it on a map.
<!--more-->

The dataset is made from the Footprints API and keeps its records and identifiers: 3,765 works, 6,860 imprints,
10,998 copies and 24,482 footprints, with 11,642 persons in their roles (authors, printers, owners, sellers, censors,
libraries) and 1,027 places. The places carry their GeoNames identifiers, confirmed by Footprints for 983 of them.
Dates are kept in the Extended Date/Time Format that Footprints uses, so that "around 1924" or "between 1900 and
1961" stay what they are.

On the entity pages of JudaicaLink, the Footprints records are joined with the records of the same persons and
places from the other sources. For the VIAF identifiers that Footprints gives its persons, every link was checked
on its own: by rules, and by a language model that compared what both sides say. The 1,185 links judged correct form
a linkset of their own, [ls-footprints-viaf](/datasets/ls-footprints-viaf/), marked as automatic linking; the
judgement and its reason are published for every link.

The new showcase [Footprints](https://mannheim.judaicalink.org/footprints/) on mannheim.judaicalink.org shows where
the books were printed, where their copies were found, and the journeys of the copies from place to place, filtered
by time, area and kind of evidence. Select a place, a book, a copy or a person, and follow every record to the
Footprints site and to its view in the knowledge graph. The picture shows the way of one copy of the Prague Haggadah
of 1526. The [Atlas](https://mannheim.judaicalink.org/atlas/) now includes the imprints of Footprints as well.

Footprints was developed by researchers of the Jewish Theological Seminary, Columbia University, the University of
Pittsburgh and Stony Brook University with Columbia's Center for Teaching and Learning; its principal investigators
are Marjorie Lehman, Michelle Margolis, Adam Shear and Joshua Teplitsky. Its data are collected and curated by a
growing number of contributors and partner institutions, among them, since 2018, the University Library Frankfurt am
Main, and published under CC BY-SA 4.0 ([About Footprints](https://footprints.ctl.columbia.edu/about/)). The
JudaicaLink service itself is part of the [FID Jewish Studies portal](https://www.jewishstudies.de/en/judaicalink/).
