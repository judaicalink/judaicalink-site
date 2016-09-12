+++
Autor = "Kai Eckert"
date = "2014-10-10T12:52:18+02:00"
title = "JudaicaLink got links and arrives in 'the cloud'"

+++

JudaicaLink is not only about the provision of stable URIs and data for concepts described in encyclopediae, it is also about the generation of links between these resources and other linked data resources on the Web.

In a first run, we used <a href="http://silkframework.org/">Silk</a> to generate links between JudaicaLink and the following sources:

<ul>
    <li><a href="http://wiki.dbpedia.org/">DBpedia</a></li>
    <li><a href="http://dm2e.eu/">DM2E</a></li>
    <li><a href="https://developers.google.com/freebase/">Freebase</a></li>
    <li><a href="http://www.dnb.de/DE/Service/DigitaleDienste/LinkedData/linkeddata_node.html">Gemeinsame Normdatei (Authority files of the German National Library)</a></li>
    <li><a href="http://www.geonames.org/">GeoNames</a></li>
    <li><a href="http://linkedgeodata.org/About">Linked Geodata</a></li>
    <li>New York Times</li>
</ul>
All links have been created automatically and are primarily based on the labels of the resources, so expect some wrong links. Nevertheless this is an important first step. For now, we provide the links directly together with the resource descriptions (as owl:sameAs links), but we will separate them with proper identification of the provenance as soon as we use more sophisticated linking approaches.

 <img src="/img/index.png" alt="picture" height="141" width="181"> 

With these links, JudaicaLink is now also part of the famous <a href="http://data.dws.informatik.uni-mannheim.de/lodcloud/2014/">LOD Cloud</a> that was released last week in its latest version. You can find us at the right border, at about 4 o'clock, right beside our neighbour project DM2E.
