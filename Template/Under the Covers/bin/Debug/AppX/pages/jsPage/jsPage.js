// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511



(function () {
    "use strict";
    var roamingSavedSettings = Windows.Storage.ApplicationData.current.roamingSettings;

    WinJS.UI.Pages.define("/pages/jsPage/jsPage.html", {

        ready: function (element, options) {
            var HTMLPage = document.getElementById("cmdShowHTML");
            HTMLPage.addEventListener("click", doCmdHTMLPage, false);

            var CSSPage = document.getElementById("cmdShowCSS");
            CSSPage.addEventListener("click", doCmdCSSPage, false);

            var JSPage = document.getElementById("cmdShowJS");
            JSPage.addEventListener("click", doCmdJSPage, false);

            var HomePage = document.getElementById("cmdHomePage");
            HomePage.addEventListener("click", doCmdHomePage, false);
        },

        unload: function () {

        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.

        }
    });
    //CODE GOES HERE
    function doCmdHTMLPage() {
        WinJS.Navigation.navigate("/pages/htmlPage/htmlPage.html");
    }

    function doCmdCSSPage() {
        WinJS.Navigation.navigate("/pages/cssPage/cssPage.html");
    }

    function doCmdJSPage() {
        //WinJS.Navigation.navigate("/pages/jsPage/jsPage.html");
    }

    function doCmdHomePage() {
        WinJS.Navigation.navigate("/pages/demoPage/demoPage.html");
    }

})();
