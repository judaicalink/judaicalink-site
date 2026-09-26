---
title: "JudaicaLink in production"
description: "JudaicaLink is operated in the portal of the FID Jewish Studies in Frankfurt. This page describes the move and how development in Mannheim and operation in Frankfurt relate."
keywords: ["production", "frankfurt", "portal", "migration", "infrastructure"]
---

# JudaicaLink in production

JudaicaLink started as a research project. It is now a service that libraries and researchers
can rely on, operated in the portal of the Specialized Information Service Jewish Studies
(FID Jüdische Studien) at the University Library Johann Christian Senckenberg in Frankfurt am
Main.

<div class="alert alert-primary" role="alert">
<b>Use JudaicaLink in the FID portal.</b><br>
<a class="btn btn-primary mt-2" href="https://www.jewishstudies.de/en/judaicalink/">JudaicaLink at jewishstudies.de</a>
</div>

## Why the move

A knowledge graph is only useful if it is still there in ten years. Research groups change,
projects end, staff move on. Libraries, on the other hand, are built for exactly this kind of
continuity: they keep collections, catalogues and authority data available across decades.

JudaicaLink was developed at Mannheim Technical University, previously at Stuttgart
Media University. Running the production service there would have tied it to the lifetime of
a research group. Moving it into the FID portal puts it where the rest of the subject
infrastructure already lives, next to the subject catalogue, the repository and the authority
data work of the FID.

## What changed technically

The move was not a copy. The service was rebuilt to fit the portal:

- JudaicaLink is integrated as a **Django application** in the FID portal rather than running
  as a separate system.
- The search backend was migrated from **ElasticSearch to Apache SOLR**, all indices were
  rebuilt, and data structures and source code were adapted.
- Operation happens in the **Kubernetes infrastructure** of the library, with data kept on its
  central PostgreSQL server — the same environment that carries the portal itself and the
  Research Navigator. JudaicaLink no longer needs infrastructure of its own.
- **`data.judaicalink.org` now resolves to Frankfurt.** Entity URIs keep working and serve
  HTML, RDF/XML, Turtle or JSON-LD through content negotiation, so references stored in other
  applications remain valid.
- **Dumps and the BEACON file** are delivered from Frankfurt. The German National Library
  receives its updates for EntityFacts from there.

## Who does what now

**Frankfurt runs the service.** Operation, data curation, the dataset catalogue and user
support are with the FID. The
[dataset documentation](https://www.jewishstudies.de/en/judaicalink/datasets/) is maintained
there, and that is where additions and corrections belong. For questions about the content
of JudaicaLink or about the service itself, the
[FID team in Frankfurt](/about-us/#the-fid-team-in-frankfurt) are the people to ask.

**Mannheim develops.** This is where work continues on the knowledge graph itself: the data
model and ontology, provenance of individual statements using RDF-star, the planned
integration with Wikidata, and the processes that turn heterogeneous source data into Linked
Open Data. What proves itself here moves into the portal.

That division is the point of the arrangement. Development can take risks; a production
service should not.

## The older systems

Three systems were in use during development. Only this website remains in Mannheim:

| Address | What it was | Status |
|---|---|---|
| `web.judaicalink.org` | this website, the project site | active |
| `data.judaicalink.org` | Linked Data delivery | migrated to Frankfurt |
| `labs.judaicalink.org` | the prototype that became the production system | [being retired](/labs/) |

If an old link brought you here, the [Labs page](/labs/) lists where each function can be
found today.
