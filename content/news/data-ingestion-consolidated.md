+++
author = "Kai Eckert"
date = "2025-11-20T10:00:00+02:00"
title = "Migration: data ingestion consolidated"
+++

The Django applications that load and index datasets have been cleaned up as part of preparing
JudaicaLink for the move to Frankfurt.
<!--more-->

Over the years, loading a dataset into JudaicaLink had come to involve several separate pieces
that had grown apart: a generators component, a backend for indexing, and a couple of earlier
attempts that were never finished. The unfinished pieces have been removed, and what remains —
dataset generation, loading into the triple store, indexing into SOLR — has been brought
together into one clear pipeline, with a proper dataset catalogue in front of it.

Nothing changes about the data this pipeline produces. What changes is that there is now one
path from source data to a dataset you can browse and search, instead of several, which is
what a service handed over to Frankfurt needs to have.
