+++
author = "Kai Eckert"
date = "2025-12-16T10:00:00+02:00"
title = "Migration: JudaicaLink Labs was containerized"
+++

Alongside the move to SOLR, the whole stack behind JudaicaLink Labs was packaged into Docker
containers.
<!--more-->

The previous setup ran directly on a server, configured by hand over the years. That made
deployment fragile and slow to reproduce. Splitting the stack into containers — the Django
application, the loaders and generators, Pubby, Fuseki, SOLR — makes it possible to bring up
a working environment from a checkout instead of a memory of past configuration steps, and to
change one part without risking the rest.

This was groundwork for the move to Frankfurt as much as an improvement on its own: a
container setup is far easier to hand over, inspect, or run somewhere else than a server that
grew organically.
