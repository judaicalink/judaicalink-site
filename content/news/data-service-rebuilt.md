+++
author = "Kai Eckert"
date = "2025-06-18T10:00:00+02:00"
# HINWEIS: Datum bitte pruefen.
title = "Migration: the Linked Data delivery has been rebuilt"
+++

The component that serves our RDF has been replaced. It is the first visible step in moving
JudaicaLink from Mannheim to the portal of the FID Jewish Studies in Frankfurt.
<!--more-->

For years the Linked Data views of JudaicaLink were served by a Pubby instance running in
Mannheim. That component has been retired and replaced by a new frontend for Apache Jena Fuseki,
written in Django so that it fits the portal it is moving into. At the same time the
synchronisation between triple store and search index was reworked.

Nothing changes in the data itself. What changes is who runs the machinery, and that is the point
of the exercise: a service meant to last should not depend on a research group's infrastructure.
