+++
author = "Kai Eckert"
date = "2026-06-11T10:00:00+02:00"
# HINWEIS: Datum bitte pruefen. Der 11.06.2026 ist aus den Dateizeitstempeln der Dumps auf dem Frankfurter Server erschlossen, nicht belegt.
title = "Migration: data.judaicalink.org now resolves to Frankfurt"
+++

The DNS entry for `data.judaicalink.org` has been switched. Requests to our Linked Data addresses
are now answered by the portal of the FID Jewish Studies in Frankfurt.
<!--more-->

This is the step at which the migration becomes visible from the outside, and it is also the point
from which the services in Mannheim are being wound down. Dumps and the BEACON file are delivered
from Frankfurt, and the German National Library receives its updates for EntityFacts from there.

Existing links keep working. Entity URIs such as `data.judaicalink.org/data/gnd/118584472` resolve
to the corresponding pages in the portal and continue to serve HTML, RDF/XML, Turtle or JSON-LD
depending on what is requested. References stored in other applications therefore remain valid;
there is nothing you need to change.

What is not yet complete is the public launch of JudaicaLink in the portal. We will announce that
separately once it is.
