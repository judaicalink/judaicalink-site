+++
author = "Maral Dadvar"
authorlink = "http://wiss.iuk.hdm-stuttgart.de/people/maral-dadvar"
date = "2018-11-02T10:37:07+02:00"
title = "Persons from DBPedia" 
dataslug = "dbpedia"
graph = "http://data.judaicalink.org/data/dbpedia-persons"  
loaded = true
category = "judaicalink"
productionurl = "https://www.jewishstudies.de/en/judaicalink/datasets/dataset/dbpedia-persons/"
example = "http://data.judaicalink.org/data/dbpedia/Aaron_Alfandari"



[[files]]
	url = "https://archive.judaicalink.org/dumps/dbpedia-person/current/generated_persons_DBPedia_enriched_02.ttl.gz"  
	description = "Rabbis extracted from DBPedia."
	
[[files]]
	url = "https://archive.judaicalink.org/dumps/dbpedia-person/current/persons-gndid.ttl.gz" 
	description = "GND links for all persons in this dataset."

[[files]]
	url = "https://archive.judaicalink.org/dumps/dbpedia-person/current/Entityfacts-dbpedia-sameas.ttl.gz" 
	description = "EntityFacts links for all persons with an GND-id in this dataset."


[license]
name = "CC-BY-SA-3.0"
image = "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
uri = "https://creativecommons.org/licenses/by-sa/3.0/"
	
+++

List of persons from DBpedia.
<!--more-->

Currently, this dataset contains a set of Rabbis extracted from DBpedia. This was done using an iterative process to identify classes that are associated with Rabbis and consequently all Rabbis associated with these classes.

In a second step, we created links to persons in the common authority file (Gemeinsame Normdatei, GND) of the German National Library.
