---
title: "JudaicaLink Labs"
description: "JudaicaLink Labs has been superseded by the production service in the FID portal in Frankfurt."
keywords: ["labs", "migration", "frankfurt", "portal"]
aliases: ["/search/"]
---

# JudaicaLink Labs

**If a link brought you here, the service you were looking for has moved.**

JudaicaLink Labs (`labs.judaicalink.org`) was where JudaicaLink itself ran until the
migration to Frankfurt: data ingestion, the backend that controlled indexing, and the
frontend for searching the knowledge graph were all Django applications operated from here.
Moving the service into the portal of the Specialized Information Service Jewish Studies at
Goethe University Library Frankfurt had been part of the plan since the project's third
funding phase, both to secure long-term operation and to allow closer integration than a
Linked-Data-only connection across two institutions and several servers could offer.
The background of the move is described under [JudaicaLink in production](/production/).

<div class="alert alert-primary" role="alert">
<b>JudaicaLink now runs in Frankfurt.</b><br>
<a class="btn btn-primary mt-2" href="https://www.jewishstudies.de/en/judaicalink/">Go to JudaicaLink in the FID portal</a>
</div>

## Where things are now

| What you were looking for | Where it is now |
|---|---|
| Search the knowledge graph | [Graph Search](https://www.jewishstudies.de/en/judaicalink/graph-search/) |
| Compact Memory full texts | [Compact Memory Fulltext Search](https://www.jewishstudies.de/en/judaicalink/cm-search/) |
| Entities in Compact Memory | [Compact Memory Entity Search](https://www.jewishstudies.de/en/judaicalink/cm-e-search/) |
| Datasets and dumps | [Dataset catalogue](https://www.jewishstudies.de/en/judaicalink/datasets/) |
| SPARQL endpoint | [SPARQL](https://www.jewishstudies.de/en/judaicalink/sparql/) |
| REST API | [Swagger UI](https://www.jewishstudies.de/en/judaicalink/api/swagger/) |
| Entity URIs (`data.judaicalink.org/data/…`) | resolve to the portal automatically, including content negotiation |
| Contact, reporting data errors | [About us](/about-us/) |

## What happens to Labs

Most of what was available on labs is not in production and from a user's perspective it does not make sense to have two entry points into JudaicaLink. We plan to reduce labs back to what it was in the beginning: a minimal showcase for new developments around JudaicaLink. 

