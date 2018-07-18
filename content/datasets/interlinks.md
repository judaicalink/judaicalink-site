+++
author = "Kai Eckert and Maral Dadvar"
authorlink = "http://wiss.iuk.hdm-stuttgart.de/people/kai-eckert"
date = "2018-02-15T10:37:07+02:00"
title = "Encyclopedia Interlinks"
links = "152 entities. 700 person groups interlinked. Maximum 24 resource per group" 
dataslug = "interlinks"
graph = "http://data.judaicalink.org/data/interlinks"
loaded = true


[[files]]
	url = "http://data.judaicalink.org/dumps/interlinks/current/interlinks.n3.gz"
	description = "Links between JudaicaLink entities."
	
[[files]]
	url = "http://data.judaicalink.org/dumps/interlinks/current/interlinks-04-enriched-09.ttl.gz"
	description = "Links between JudaicaLink persons."
	
	
+++

Links between JudaicaLink entities and persons. 
<!--more-->

The first file includes only a very preliminary example for entity linking. This dataset so far contains only links between [Rujen](/datasets/rujen) and [Yivo](/datasets/yivo).

The links are created based on [DBpedia](http://www.dbpedia.org/), i.e., if two entities are linked to the same DBpedia concept (potentially via different language editions), they are considered the same.

The second file contains links between the persons in all the existing datasets. For each group the transitive closure is also created and therefore each person is also interlinked to the external resources. 
