+++
author = "Kai Eckert"
date = "2018-06-18T08:30:27+02:00"
title = "Search Improvements"

+++

Snippets, paging and more for our search!
<!--more-->

We today deployed an update to our search functionality which makes it much more usable. First of all the limitation to at most 10 hits is gone, we now support proper paging through all search result pages.

Second, we provide snippets of our data fields where the search term was actually found. This not only gives you an idea what an entity is actually about, it also shows, *why* an entity is found given your query.

Last, not least, we tuned the search configuration so that now names and alternative names get higher weight compared to other fields. This means, when you search for a specific name, entities with this name *should* show first. Let us know if you find search results not intuitive, we will look further into tuning the results.

So have fun with it - and be patient, it is still under heavy development and things inevitably will break.
