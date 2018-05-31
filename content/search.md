

# SEARCH

## Fulltext Search

<form action="javascript:search()">
<input type="text" id="query">
<input type="submit" value="Search" />
</form>
<p></p>
<div id="results">
</div>
<p></p>
<p>Note: this is a very early experimental search functionality, currently limited to at most 10 results. However, it might help to quickly figure out, if we have something in our knowledge graph regarding your search.</p>
<p>
The search functionality is powered by ElasticSearch and currently indexes name, birth- and death dates, and abstract.
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
