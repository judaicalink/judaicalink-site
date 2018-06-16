

# SEARCH

## Fulltext Search
<b>ALPHA version, things will break!</b>

The search functionality is still under development, therefore it not be available at all or have errors. See our [news](/news/experimental-search-online/).

<form action="javascript:search()">
<input type="text" id="query">
<input type="submit" value="Search" />
</form>
<p></p>
<div id="results"> </div>
<div id="pagination"> </div>
<p></p>
<p>
The search functionality is powered by ElasticSearch and currently indexes name, birth- and death dates, abstract, and publications.
</p>
<p>
<b>Example Queries:</b><br/>
<pre>
thora
birthDate:1870
birthDate:18*
name:abraham
deathLocation:Hamburg
</pre>
</p>
## SPARQL Endpoint
To further investigate the knowledge graph, you can of course use our public <a href="http://data.judaicalink.org/sparql.html">SPARQL endpoint</a>.
