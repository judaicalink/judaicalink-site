+++
author = "Kai Eckert"
date = "2024-10-01T10:00:00+02:00"
# HINWEIS: Datum bitte pruefen.
title = "DjangoRDF: a by-product of JudaicaLink, useful beyond it"
+++

Working with RDF inside a Django application turned out to be a recurring problem. The library we
built for it is available on its own.
<!--more-->

JudaicaLink is a Django application that has to keep a triple store in step with its own models.
Doing that by hand is tedious and easy to get wrong. DjangoRDF handles the mapping: full CRUD on
RDF triples, automatic synchronisation with the triple store, and generation of the ontology from
the model definitions.

None of this is specific to Jewish Studies. Any project that wants to publish Linked Open Data
from a Django application faces the same task, which is why the library is released separately
under an open licence.

[DjangoRDF on GitHub](https://github.com/judaicalink/djangordf)
