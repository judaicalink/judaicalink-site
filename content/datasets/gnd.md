+++
slug = "gnd"
title = "GND (Gemeinsame Normdatei): the records JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-16"
website = "https://data.dnb.de/opendata/"
example = "http://data.judaicalink.org/data/gnd/118540238"
kind = "authority"
method = ["converted"]
namespaces = ["gnd"]
replaces = ["gnd-persons"]

[license]
name = "CC0"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
statement = "https://web.archive.org/web/20260624101124/https://data.dnb.de/opendata/"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/gnd"
+++
<!-- Copy of catalog/gnd.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The records of the Gemeinsame Normdatei (GND) of the Deutsche Nationalbibliothek that JudaicaLink uses: every GND
record that one of our datasets links, the persons of two lists of UB Frankfurt (the Freimann collection and the
UB's person records), and every record of the former gnd-persons.

<!--more-->

The GND is the authority file of the German-speaking libraries: its records (persons, organisations, places, works,
subject headings) are made and maintained by cataloguers of the participating libraries, by the rules of the GND.
They are among the most reliable identifiers we link; errors are reported to the DNB.

The dataset is made from the dumps of the GND Linked Data Service and of DNB EntityFacts (CC0); the file names and
versions of the dumps are in the metadata of each version. Each record keeps the GND's own statements, with the
GND's IRIs in their canonical form (`https://d-nb.info/gnd/<number>`), and in addition the JudaicaLink and SKOS
terms that the other datasets use (names, dates, places of birth and death, occupations). The links of EntityFacts
to other authority files (VIAF, LC, ISNI, Wikidata, …) are added. Identifiers the GND has replaced are stated with
`dcterms:isReplacedBy`, deleted ones that our data cites with `owl:deprecated` (decision 0029).

`gnd-selection.tsv.gz` lists why each record is included: one row per GND number and reason (linked by a dataset,
or one of the selection rules), with the current number the GND gives for it.
