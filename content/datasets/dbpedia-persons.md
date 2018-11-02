+++
author = "Maral Dadvar"
authorlink = "http://wiss.iuk.hdm-stuttgart.de/people/maral-dadvar"
date = "2018-11-02T10:37:07+02:00"
title = "Persons from DBPedia" 


graph = "http://data.judaicalink.org/data/dbpedia-persons"  
loaded = true
example = "http://data.judaicalink.org/data/dbpedia/Aaron_Alfandari"


[[files]]
	url = "http://data.judaicalink.org/dumps/dbpedia-person/current/generated_persons_DBPedia_enriched_02.ttl.gz"  
	description = "Rabbis extracted from DBPedia."
	
[[files]]
	url = "http://data.judaicalink.org/dumps/dbpedia-person/current/persons-gndid.ttl.gz" 
	description = "GND links for all persons in this dataset."

	
+++

List of persons from DBpedia.
<!--more-->

Currently, this dataset contains a set of Rabbis extracted from DBpedia. This was done using an iterative process to identify classes that are associated with Rabbis and consequently all Rabbis associated with these classes.

In a second step, we created links to persons in the common authority file (Gemeinsame Normdatei, GND) of the German National Library.
