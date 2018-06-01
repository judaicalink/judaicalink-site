search = function() {
	query = $("#query").val()
	if (query.trim().length==0) {
		console.log("Empty query")
		return
	}
	console.log("Query: " + JSON.stringify(query))
	$.getJSON("http://search.judaicalink.org/search/" + query, function(data) {
		// console.log(data)		
		total = data.response.hits.total
		hits = data.response.hits.hits.length
		h = $("#results")
		h.html("<p>Total Hits: " + total + "</p>")
		h.append("<p>First " + hits + " hits:</p>")
		reslist = $("<ol></ol>").appendTo(h)
		for (i=0;i<hits;i++) {
			result = data.response.hits.hits[i]
			reslist.append("<li><a href='" + result["_id"] + "'>"+result["_source"].name+"</a> (Score: " + result["_score"] + ")</li>")
		}
	})
}
