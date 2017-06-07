+++
author = "Maral Dadvar"
date = "2017-06-07T19:15:24+02:00"
title = "Two new datasets on JudaicaLink; persons from GND and DBpedia"

+++
We are happy to announce that two new datasets, list of Jewish persons from GND and list of Jewish persons from DBpedia, are added to JudaicaLink datasets.

There are knowledge bases which contain a vast variety of information including facts related to Jewish culture and history. Two of the most comprehensive ones are DBpedia and GND. However such general-purpose resources are hard to use due to their sheer size while only a very small subset of the data is actually relevant. Therefore, JudaicaLink aims to integrate only the relevant subsets of these data sources. To do so we have extracted a focused knowledge graph of concepts for the domain of Jewish studies. 

<a href="http://wiki.dbpedia.org/">DBPedia</a> is a large-scale source of structured and multilingual knowledge extracted from Wikipedia. 
This knowledge base contains over 400 million facts that describe 3.7 million things. We follow several approaches to extract relevant concepts from DBpedia: 
our main focus so far was on identifying prominent Jewish persons from different fields of activities. By identifying categories used to describe Jewish persons, 
we generated a list of these categories and searched for further persons. For each person, we extracted the name in all available languages, as well as links to other data sources. 
The extracted DBpedia dataset currently contains 5,294 persons with 35 distinct occupations.  Here is an example:  http://data.judaicalink.org/data/dbpedia/Aaron_Alfandari

The Integrated Authority File (<a href="http://www.dnb.de">GND</a>) of the German National Library is an authority file that contains among other identifiers for persons. 
Strategies to find relevant entries include the exploitation of publication data where the relevance can be determined via the publication. 
We also considered geographic information where available, for example for persons from Israel.  For every person the name, occupation and identifiers were extracted. 
This dataset includes 4,029 persons and 303 occupations. Here is an example:  http://data.judaicalink.org/data/gnd/100938523

All the extraction and data generation python codes are available open source on our Github <a href="https://github.com/wisslab/judaicalink-loader/">repository</a>. 
In the resulted RDF files the persons and their corresponding attributes were mapped to JudaicaLink ontology. 
The datasets data can also be accessed directly via our SPARQL <a href="http://data.judaicalink.org/sparql.html">endpoint</a>.  
Details on all 7 JudaicaLink datasets can be found <a href="http://www.judaicalink.org/datasets/">here</a>  




