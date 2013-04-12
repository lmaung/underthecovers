(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            $(window).resize(function () {

                $('.centerScreen').css({
                    position: 'absolute',
                    left: ($(window).width() - $('.centerScreen').outerWidth()) / 2,
                    top: ($(window).height() - $('.centerScreen').outerHeight()) / 2
                });

            });

            $(window).resize();

            var HTMLPage = document.getElementById("cmdShowHTML");
            HTMLPage.addEventListener("click", doCmdHTMLPage, false);

            var CSSPage = document.getElementById("cmdShowCSS");
            CSSPage.addEventListener("click", doCmdCSSPage, false);

            var JSPage = document.getElementById("cmdShowJS");
            JSPage.addEventListener("click", doCmdJSPage, false);

            var HomePage = document.getElementById("cmdHomePage");
            HomePage.addEventListener("click", doCmdHomePage, false);
        }
    });



    function doCmdHTMLPage() {
        WinJS.Navigation.navigate("/pages/htmlPage/htmlPage.html");
    }

    function doCmdCSSPage() {
        WinJS.Navigation.navigate("/pages/cssPage/cssPage.html");
    }

    function doCmdJSPage() {
        WinJS.Navigation.navigate("/pages/jsPage/jsPage.html");
    }

    function doCmdHomePage() {
        WinJS.Navigation.navigate("/pages/demoPage/demoPage.html");
    }

})();
