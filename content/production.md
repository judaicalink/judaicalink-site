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

Moving JudaicaLink into the FID portal was part of the plan since the project's third DFG
funding phase, not a late decision. Two things motivated it. A knowledge graph is only useful
if it is still there in ten years, and libraries are built for exactly that kind of
continuity, unlike a research group whose staff and projects change. And a connection between
two institutions and several servers that relies purely on Linked Data conventions only goes
so far — moving JudaicaLink into the same application as the rest of the subject
infrastructure allows a closer integration with the subject catalogue, the repository and the
authority data work of the FID than that.

JudaicaLink was developed at Mannheim Technical University, previously at Stuttgart
Media University.

## What changed technically

The move was not a copy. The service was rebuilt to fit the portal:

- JudaicaLink is integrated as a **Django application** in the FID portal rather than running
  as a separate system.
- The search backend was migrated from **ElasticSearch to Apache SOLR** already in Mannheim,
  ahead of the move, since SOLR is what all search applications in the Frankfurt portal use.
  All indices were rebuilt, and data structures and source code were adapted.
- The service was **containerized**, again already in Mannheim ahead of the move, to make
  deployment simpler and more flexible than the previous server setup allowed.
- **Data ingestion was consolidated.** The Django applications that control loading and
  indexing datasets were cleaned up and brought together, so that fewer, clearer components
  do the job.
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
| `labs.judaicalink.org` | where JudaicaLink itself ran during development | [being retired](/labs/) |

If an old link brought you here, the [Labs page](/labs/) lists where each function can be
found today.
