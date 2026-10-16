+++
slug = "lc"
title = "LC Name Authority File: the records JudaicaLink uses"
author = "Kai Eckert"
date = "2026-10-16"
website = "https://id.loc.gov/download/"
example = "http://data.judaicalink.org/data/lc/n79021164"
kind = "authority"
method = ["converted"]
namespaces = ["lc"]

[license]
name = "Public domain"
uri = "https://creativecommons.org/publicdomain/zero/1.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png"
statement = "https://web.archive.org/web/20260814162252/https://id.loc.gov/about/"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/lc"
+++
<!-- Copy of catalog/lc.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The records of the Library of Congress Name Authority File (LCNAF) that one of our datasets links.

<!--more-->

The LCNAF is the name authority file of the Library of Congress and its partners in the Name Authority Cooperative
Program (NACO): its records (persons, organisations, places, works) are made and maintained by cataloguers, by the
rules of RDA. They are among the most reliable identifiers we link; errors are reported to the Library of Congress.
The data of id.loc.gov is in the public domain.

The dataset is made from the bulk export of id.loc.gov in MADS/RDF; the file names and dates of the export are in the
metadata of each version. Each record keeps the statements of the authority record and of the person, organisation
or place it identifies (its "Real World Object": dates, places, occupations), with the IRIs in canonical form, and in
addition the JudaicaLink and SKOS terms that the other datasets use. Exact external authorities that are identifiers
of a known source (GND, VIAF, ISNI, Wikidata, TGN) are stated as `owl:sameAs`. Identifiers LC has withdrawn
(deprecated) that our data cites are stated with `owl:deprecated` (decision 0029); the export names no successors.

`lc-selection.tsv.gz` lists, for every LC identifier, the datasets that link it.
