+++
author = "Kai Eckert"
authorlink = "http://wiss.iuk.hdm-stuttgart.de/people/kai-eckert"
date = "2020-07-31T16:37:07+02:00"
title = "Enrichment of Birth- and Deathdates"
website = ""
concepts = ""
persons = ""
links = ""
dataslug = ""
example = "http://data.judaicalink.org/data/bhr/Aach_Löb"
bookmarklet = ""
picture = ""
aliases = []

graph = "http://data.judaicalink.org/data/date-enriched"
loaded = true
category = "judaicalink"

[[files]]
	url = "http://data.judaicalink.org/dumps/date-enriched/date-enriched.ttl.gz"
	description = "Parsed Dates, using Labs Command date_enrichment"
	
+++

This is work in progress. The idea is to parse all available dates and create
these additional properties:

- jl:birthYear
- jl:birthMonth
- jl:birthDay

Issues: 

- birthDay might be confused with birthDate. 
- birthDate should be the parsed datetime, current String representation should go to jl:birthDateString.

Same for deathDate, of course.
