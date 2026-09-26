+++
author = "Kai Eckert"
date = "2025-11-24T10:00:00+02:00"
# HINWEIS: Datum bitte pruefen.
title = "Migration: the search has been rebuilt on Apache SOLR"
+++

JudaicaLink's search has been moved from ElasticSearch to Apache SOLR, and all indices have been
rebuilt from scratch.
<!--more-->

This was the largest single piece of work in the migration. SOLR is the search technology used in
the FID portal, so adopting it was a precondition for running JudaicaLink there rather than beside
it. Index structures, data structures and a good deal of source code had to be adapted, and a
dataset catalogue was added along the way.

The change should be invisible in everyday use, which is the intention. Improvements to result
ranking and to the facets are a separate matter and remain on the agenda.
