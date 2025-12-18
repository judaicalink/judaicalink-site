+++
author = "Benjamin Schnabel"
authorlink = ""
date = "2025-12-18T14:00:00+01:00"
title = "Occupations"
website = "https://www.judaicalink.org/"
dataslug = "occupations"
graph = "http://data.judaicalink.org/data/occupations"
loaded = true
category = "judaicalink"
example = "http://data.judaicalink.org/data/occupation/rabbiner"

[[files]]
    url = "http://data.judaicalink.org/dumps/occupations/current/occupations.ttl.gz"
    description = "SKOS-based occupation concepts derived from jl:occupation literals"

[license]
name = "CC BY 4.0"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
uri = "https://creativecommons.org/licenses/by/4.0/"
+++

The **Occupations** dataset provides a normalized and reusable collection of occupation concepts
derived from literal values used in the JudaicaLink knowledge graph.

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
