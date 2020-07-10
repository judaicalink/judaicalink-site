
//$('#sidebarCollapse').click(function(){
//    $(this).find('i').toggleClass('fas fa-times', 'fas fa-bars')
//});
//
//$("#sidebarCollapse").on("click", ".fas fa-bars", function() {
//    $(this).toggleClass("fas fa-times");

/*-------------------SIDEBAR-------------------------*/
$(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                /*$('.buttonnav i').toggleClass( 'fas fa-times');*/
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });

/*---------------------------------------------------*/


search = function() {
  var BACKEND_DEV = "http://localhost:3000"
  var BACKEND_PROD = "http://search.judaicalink.org"

  /* CHANGE THIS TO BACKEND_PROD BEFORE DEPLOYING! */
  var backend = BACKEND_PROD

  var query = $("#query").val()
  if (query.trim().length == 0) {
    console.log("Empty query")
    return
  }
  console.log("Query: " + JSON.stringify(query))

  var fieldMap = {
    "name": "Name",
    "Abstract": "Summary",
    "deathDate": "Date of Death",
    "birthDate": "Date of Birth",
    "deathLocation": "Location of Death",
    "birthLocation": "Location of Birth",
    "Alternatives": "Alternative Labels",
    "Publication": "Publications"
  }

  var fieldOrder = ["name", "Alternatives", "birthDate", "deathDate", "birthLocation", "deathLocation", "Abstract", "Publication"]

  var updateResults = function(query, pageNumber, cb) {

    $.getJSON(backend + "/search/" + pageNumber + "/" + query, function(data) {
      // console.log(data)		
      var total = data.response.hits.total
      var hits = data.response.hits.hits.length
      var h = $("#results")
      h.html("<p>Total Hits: " + total + "</p>")
      var reslist = $('<ul class="results"></ul>').appendTo(h)
      for (i = 0; i < hits; i++) {
        var result = data.response.hits.hits[i]
        var snippet = '<span class="snippet">'
        for (hl of fieldOrder) {
          if (hl in result["highlight"]) {

            if (snippet !== '<span class="snippet">') {
              snippet = snippet + " / "
            }
            snippet = snippet + "<b>" + fieldMap[hl] + ":</b> "
            for (o of result["highlight"][hl]) {
              snippet = snippet + o + "... "
            }
          }
        }
        snippet = snippet + "</span"
        reslist.append("<li class='hit'><a href='" + result["_id"] + "'>" + result["_source"].name + "</a> <br />" + snippet + "<span class='score'>(Score: " + result["_score"].toFixed(2) + ")</span></li>")
      }
      if (typeof cb === 'function') {
        cb(total)
      }
    })
  }

  updateResults(query, 1, function(total) {

    $("#pagination").pagination({
      items: total,
      itemsOnPage: 10,
      cssStyle: 'light-theme',
      onPageClick: function(pageNumber) {
        updateResults(query, pageNumber)
      }
    });
  })


}
