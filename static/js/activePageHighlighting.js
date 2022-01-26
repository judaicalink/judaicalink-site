pathName = window.location.pathname.trim();
page = pathName.split("/").filter(function (e) {return e != null;});

if (page[1] != null) {
    console.log(page[1]);
    $("a[href='/" + page[1] + "']").addClass("active");
    $("#" + page[1]).addClass("active");
    //id = $.find("#" + page[1]);
    //console.log(id);
    //$.find(page[1]).addClass('active');

}