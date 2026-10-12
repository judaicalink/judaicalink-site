+++
slug = "occupations"
title = "Occupations"
author = "Kai Eckert"
date = "2025-12-18"
website = "https://www.judaicalink.org/"
example = "http://data.judaicalink.org/data/occupation/rabbiner"
namespaces = ["occupation"]
kind = "vocabulary"
method = ["rule-based"]

[license]
name = "CC BY 4.0"
uri = "https://creativecommons.org/licenses/by/4.0/"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"

[generator]
repo = "https://github.com/judaicalink/judaicalink-data"
path = "generators/occupations"

[[changelog]]
date = "2025-12-18"
author = "Benjamin Schnabel"
text = "Entry and generator added (judaicalink-generators); no dump of this dataset was found."
+++
<!-- Copy of catalog/occupations.md of https://github.com/judaicalink/judaicalink-data (jl sync-site); change it there. -->
The **Occupations** dataset provides a normalized and reusable collection of occupation concepts
derived from literal values used in the JudaicaLink knowledge graph.
<!--more-->

Occupation strings occurring in the property `jl:occupation` (e.g. *Rabbiner*, *Historiker*,
*Verleger*) are transformed into stable **SKOS concepts** with persistent URIs.  
This allows consistent linking, browsing, and enrichment of occupational information across
JudaicaLink datasets and applications.

Each occupation is represented as a `skos:Concept` and includes at least:

- a preferred label (`skos:prefLabel`)
- a dataset reference (`dcterms:source`)

Where possible, occupation concepts are enriched with links to external authority resources,
including:

- Entity Pages (EP) within JudaicaLink
- the Integrated Authority File (GND)
- DBpedia

The dataset is generated automatically from the **union graph** of the JudaicaLink triple store
and reflects the actual usage of occupation information in the data.

The **Occupations** dataset serves as a foundation for dedicated occupation landing pages in Pubby,
enabling users to explore occupations and the persons associated with them in a structured and
consistent way.
