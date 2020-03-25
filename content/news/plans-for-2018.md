+++
author = "Kai Eckert"
date = "2018-03-09T14:07:27+02:00"
title = "Status of JudaicaLink"

+++

With the upcoming third year of the FID Jewish Studies project, we had to specify our plans for the DFG. Here are the cornerstones:
<!--more-->

So far we concentrated on three main aspects within the project:

1. Stabilizing the JudaicaLink infrastructure and the processes for the generation, loading and provision of data.
2. Aquiring new data, either from openly available sources like GND or DBpedia or by getting new permissions to provide data for proprietary sources like for example the [Biographic Handbook of Rabbis](../bhr-encyclopedia).
3. Making use of JudaicaLink for the contextualization of the metadata within the FID Jewish Studies project, first and foremost the Freimann collection and the database Compact Memory.

At the same time, we helped with the creation of the FID Portal and thought of ways how to integrate JudaicaLink in the most beneficial (but also doable) way to enhance user experience.

As it turns out, this is not as easy as it might sound. The (VUfind-based) portal focuses on the presentation of catalog entries where only limited possibilities exist to link to external resources. Of course GND is supported, that's why we focus currently on the generation of as many links to the GND as possible - including the generation of new GND records where they are missing. This is ideal from a sustainability perspective, as every library can immediately benefit from this new data, but provides no solution to allow people to make use of the rich interlinking with external sources that we aim at in JudaicaLink.

One way to create "backlinks" from GND to JudaicaLink is via EntityFacts, a service provided by the German National Library, where additional information about GND records (like links to Wikipedia) is provided. Again this is important to do from a sustainability perspective, but is limited to our entries with a GND link.

Another problem is that we have no single JudaicaLink URI for all entities. We have single URIs for each resource per dataset, but of course many entities are described in different datasets. We create links between these duplicate entries using various linking techniques, but they are neither perfect nor complete. Which of the URIs should we now use to link to JudaicaLink? All of them? This would probably confuse users of the FID portal who seek one link into JudaicaLink to explore then links to other resources.

In parallel, we got feedback from various occasions when we presented JudaicaLink. The main desired features are a simple search functionality and a service where some metadata or fulltext can be uploaded and matching JudaicaLink entries can be retrieved.

Based on this feedback and considerations, we therefore concentrate on the following tasks for the remaining time (until June 2019) in this phase of the FID project:

1. We create aggregating <b>"entity pages"</b> for our JudaicaLink entries where we provide information from matching entries in all datasets, including links to all internal and external resources with further information.
2. We will redesign the JudaicaLink pages to make them more consistent with the FID portal and to provide a more <b>appealing look</b> for the users of the portal. No worries, the data will still all be there ;-)
3. We implement a <b>full text search</b> that allows researchers to use JudaicaLink independently of the portal, without the need to learn SPARQL first.
4. We would like to create a <b>conextualization API</b> that allows easy integration of JudaicaLink as a contextualization service. This has currently not the highest priority, as it does not directly benefit the FID work, but certainly would be great for the Jewish studies data community.

So, lots of stuff on the todo list, but also exciting developments ahead of us. Stay tuned.
