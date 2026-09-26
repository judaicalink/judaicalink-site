(function () {
    "use strict";

    var path = window.location.pathname.trim();
    var segments = path.split("/").filter(function (segment) { return segment != null; });

    if (segments[1] != null) {
        var link = document.querySelector("a[href='/" + segments[1] + "']");
        if (link) {
            link.classList.add("active");
        }
    }
})();
