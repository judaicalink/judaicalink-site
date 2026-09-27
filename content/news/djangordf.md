+++
author = "Kai Eckert"
date = "2024-10-01T10:00:00+02:00"
title = "DjangoRDF: a software project of its own within the FID"
+++

Working with RDF inside a Django application is a recurring problem, not one specific to any
single service. We have released the library we use for it under an open licence.
<!--more-->

DjangoRDF grew out of work within the FID Jewish Studies project and is developed and
maintained as a project in its own right. It supports building and extending RDF-based
services in Django: keeping a triple store in step with Django models, without doing that
synchronisation by hand.

It is currently used in the Research Navigator, which is being developed for the FID portal
in Frankfurt. None of what it does is specific to Jewish Studies, which is why it is released
separately, for anyone building Linked Open Data services on Django.

[DjangoRDF on GitHub](https://github.com/judaicalink/djangordf)
