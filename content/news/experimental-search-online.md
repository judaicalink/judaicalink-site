+++
author = "Kai Eckert"
date = "2018-05-31T17:11:27+02:00"
title = "Experimental full text search online"

+++

We have some news regarding search functionalities in JudaicaLink.
<!--more-->

As we said [earlier](../plans-for-2018), we plan to develop a full text search for JudaicaLink. Today, we launch a first version of it, although it is still very limited.

You can now [search](/search) our data, backed by ElasticSearch. We are currently mainly working again on the backend part of this, like the processes to populate the search index, the integration with the data pages and so on.

This first search functionality is therefore very limited: you can search in a subset of our data fields (name/title, abstract, birthDate, deathDate, birthLocation, deathLocation) and only the first 10 results (if any) are shown, as simple links to the data pages.

We nevertheless think this is already useful (at least we use it), as this way you can quickly find out, if there are some matching resources available in JudaicaLink, and you can also find quickly some new entries to explore our dataset.

So have fun with it - and be patient, it is still under heavy development and things inevitably will break.
