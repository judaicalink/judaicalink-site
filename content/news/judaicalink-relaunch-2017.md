+++
author = "Kai Eckert"
date = "2017-02-16T17:05:52+02:00"
title = "Technical relaunch of JudaicaLink... and a new server!"
+++
Finally, we actually moved JudaicaLink from the server in Mannheim (thanks [DWS](http://www.dwslab.de) for hosting us!) to Stuttgart!
<!--more-->
With the move, we also rethought the whole technical setup and aimed at increasing the stability and maintainability. So, what's new?

1. The Fuseki triple store runs now within Apache Tomcat that reliably restarts when the server gets restarted. This hopefully leads to less (or none) downtime of JudaicaLink.
2. The Drupal system running www.judaicalink.org (this website) has been replaced by [Hugo](http://gohugo.io). This means no worrying about security issues in Drupal anymore and also more flexibility in reusing the content, which is worth an own point:
3. The frontmatter (i.e., metadata that is defined for each Hugo page) is now directly used by a Python script to keep the triple store in sync with the dataset descriptions on the website. This way, you (and we... ;-)) always know what's actually loaded in JudaicaLink if you use our [SPARQL endpoint](http://data.judaicalink.org/sparql.html).
4. As we now use page metadata to load JudaicaLink, we can of course also make the data that is loaded available to you: you can now download all data as single dump files listed on the dataset descriptions.
5. As JudaicaLink constantly moves from providing data versions of encyclopediae to providing a diverse knowledge graph for the Judaica domain, we renamed the Encyclopediae section to Datasets, accordingly. 

If you are intersted in the inner workings of our Hugo implementation, feel free to browse the sources at [GitHub](http://github.com/wisslab/judaicalink-site).

Many thanks to [Jens Steilen](http://wiss.iuk.hdm-stuttgart.de/people/jens-steilen), who did the heavy lifting of migrating JudaicaLink from Drupal to Hugo.

Have fun with our new JudaicaLink and stay tuned for further changes, there is new data on the way!
