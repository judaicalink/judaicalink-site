+++
author = "Kai Eckert"
date = "2026-10-13T09:00:00+02:00"
title = "JudaicaLink passes 20 million triples"
+++

The JudaicaLink knowledge graph now holds more than 20 million triples: 20,575,257, to be exact.
<!--more-->

JudaicaLink started in 2013 with the first encyclopedia and has grown steadily since then: more
reference works, research databases and library data, links to authority files, entity pages that
bring together what different sources say about the same person or place, and, with Compact Memory,
the structure of a large collection of Jewish periodicals. Now it has passed the mark of 20 million
triples.

The figures below are for the knowledge graph as a whole: the stable versions of all datasets in our
[catalogue](/datasets/), each in its own graph, with the corrections applied. Not everything is
loaded in the production system in Frankfurt yet. Recent changes in particular are still under
review before they reach the production graph. The
[FID Jewish Studies](https://www.jewishstudies.de/judaicalink/) offers search, the SPARQL endpoint
and the REST API.

## At a glance

| | |
|---|---|
| Triples | 20,575,257 |
| Distinct subjects | 4,033,938 |
| Properties | 390 |
| Datasets in the catalogue | 43, with data from 39 of them in the graph |
| Entity pages | 310,214 |
| `owl:sameAs` links to other sources | 1,598,842, to 86 hosts |
| Files | 179 in 57 versions, 318 MB compressed |

## Triples by kind of dataset

| Kind | Datasets | Triples |
|---|---:|---:|
| Records: data from one source, one resource per record | 20 | 3,241,130 |
| Complements: data added to the records of other datasets | 9 | 7,350,250 |
| Entity pages | 1 | 4,784,702 |
| Support data, including the page metadata of Compact Memory | 2 | 4,553,501 |
| Linksets | 5 | 641,874 |
| Ontology and vocabulary | 2 | 513 |
| Descriptions of the datasets | | 3,287 |

## The largest datasets

| Dataset | Triples |
|---|---:|
| [Linking Compact Memory - Resources and References](/datasets/cm-tagme/) | 5,995,568 |
| [Entity Pages - Judaicalink](/datasets/ep/) | 4,784,702 |
| [Linking Compact Memory - Pages](/datasets/compact-memory/) | 4,553,474 |
| [NLI authority records (persons and works)](/datasets/nli-records/) | 1,523,564 |
| [OCR quality estimate for Compact Memory pages](/datasets/cm-ocr-quality/) | 846,808 |
| [Legacy nli-persons URIs linked to the NLI authority records](/datasets/ls-nli-legacy/) | 623,071 |
| [Persons from GND](/datasets/gnd-persons/) | 591,714 |
| [Epidat - Epigraphical Database](/datasets/epidat/) | 416,724 |
| [Normalised dates, places and occupations of the records](/datasets/records-normalized/) | 236,205 |
| [Encyclopedia of Russian Jewry](/datasets/rujen/) | 140,472 |

## Entity pages

An entity page brings together the records that different sources hold about the same entity.

| | Entity pages |
|---|---:|
| Persons | 290,466 |
| Places | 11,442 |
| Works | 7,312 |
| Subjects | 830 |
| Organisations | 164 |
| Total | 310,214 |

## Compact Memory

| | |
|---|---:|
| Periodicals | 336 |
| Volumes | 2,741 |
| Issues | 46,620 |
| Articles | 24,463 |
| Pages | 846,499 |
| References from the pages to entities | 749,446 |

## Links to other sources

| Target | Links |
|---|---:|
| VIAF | 634,747 |
| Library of Congress | 224,213 |
| GND (d-nb.info) | 194,630 |
| Culturegraph | 74,286 |
| ISNI | 65,445 |
| Wikidata | 55,498 |
| Wikipedia | 51,631 |
| DBpedia | 46,952 |
| Deutsche Digitale Bibliothek | 39,794 |
| Bibliothèque nationale de France | 38,944 |
| Kalliope | 18,925 |
| GeoNames | 9,133 |

A further 182,868 `owl:sameAs` links connect resources within JudaicaLink.

## Languages

Text values with a language tag, by language: Hebrew 625,782, English 89,155, German 74,283,
Russian 32,743; in all, 272 different language tags occur.

## Where to find it

The [catalogue](/datasets/) describes every dataset with its versions, files and changes, and the
[data finder](/dataindex/) shows where the files are. How each version was made is documented in the
[judaicalink-data repository](https://github.com/judaicalink/judaicalink-data).

*The figures were counted on 13 October 2026 by loading the stable versions of all datasets in the
catalogue into a triple store, with the corrections applied.*
