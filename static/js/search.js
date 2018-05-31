search = function() {
	query = $("#query").val()
	console.log("Query: " + JSON.stringify(query))
	$.getJSON("http://localhost:3000/search/" + query, function(data) {
		console.log(data)		
		total = data.response.hits.total
		hits = data.response.hits.hits.length
		h = $("#results")
		h.html("<p>Total Hits: " + total + "</p>")
		h.append("<p>First " + hits + " hits:</p>")
		h.append("<ol></ol>")
		l = $(h, "ol")
		for (i=0;i<hits;i++) {
			result = data.response.hits.hits[i]
			l.append("<li><a href='" + result["_id"] + "'>"+result["_source"].name+"</a> (Score: " + result["_score"] + ")</li>")
		}
	})
}
