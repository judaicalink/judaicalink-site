/* Sidebar-Navigation und Hamburger-Button.
 *
 * Zwei Zustaende, je nach Breakpoint mit unterschiedlicher Mechanik:
 *
 *   breit (> 540px):  Sidebar steht offen. .nav-collapsed auf #sidebar und
 *                     #content klappt sie weg und verbreitert den Inhalt.
 *   schmal (<= 540px): Sidebar liegt ausserhalb des Viewports. .nav-expanded
 *                     auf #sidebar schiebt sie herein, der Inhalt bleibt breit.
 *
 * Beide Klassen sagen genau eine Sache aus, deshalb zwei statt einer. Den
 * sichtbaren Zustand spiegelt data-nav am Button, daran haengt das Icon.
 */
(function () {
    "use strict";

    var NARROW = "(max-width: 540px)";

    function init() {
        var button = document.getElementById("sidebarCollapse");
        var sidebar = document.getElementById("sidebar");
        var content = document.getElementById("content");

        if (!button || !sidebar) {
            return;
        }

        function isNarrow() {
            return window.matchMedia(NARROW).matches;
        }

        function isOpen() {
            return isNarrow()
                ? sidebar.classList.contains("nav-expanded")
                : !sidebar.classList.contains("nav-collapsed");
        }

        function sync() {
            var open = isOpen();
            button.setAttribute("data-nav", open ? "open" : "closed");
            button.setAttribute("aria-expanded", open ? "true" : "false");
            button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        }

        function toggle() {
            if (isNarrow()) {
                sidebar.classList.toggle("nav-expanded");
            } else {
                sidebar.classList.toggle("nav-collapsed");
                if (content) {
                    content.classList.toggle("nav-collapsed");
                }
            }
            sync();
        }

        button.setAttribute("aria-controls", "sidebar");
        sync();

        button.addEventListener("click", toggle);

        // Beim Wechsel des Breakpoints wuerden sonst Klassen der jeweils
        // anderen Mechanik stehen bleiben.
        window.matchMedia(NARROW).addEventListener("change", function () {
            sidebar.classList.remove("nav-expanded", "nav-collapsed");
            if (content) {
                content.classList.remove("nav-collapsed");
            }
            sync();
        });

        // Auf schmalen Schirmen nach der Auswahl wieder schliessen.
        sidebar.addEventListener("click", function (event) {
            if (event.target.closest("a") && isNarrow()) {
                sidebar.classList.remove("nav-expanded");
                sync();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
