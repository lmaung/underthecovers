// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511

(function () {
    "use strict";
    var roamingSavedSettings = Windows.Storage.ApplicationData.current.roamingSettings;

    WinJS.UI.Pages.define("/pages/jsPage/jsPage.html", {

        ready: function (element, options) {

            $(window).resize(function () {
                $('.centerScreen').css({
                    position: 'absolute',
                    left: ($(window).width() - $('.centerScreen').outerWidth()) / 2,
                    top: ($(window).height() - $('.centerScreen').outerHeight()) / 2
                });
            });

            $(window).resize();

            var editor = CodeMirror.fromTextArea(document.getElementById("codeBlockJS"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: "text/typescript"
            });

            var imgPgCurl = document.getElementById("imgPageCurl");
            imgPgCurl.addEventListener("click", cmdShowAppBar, false);

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
    function cmdShowAppBar() {
        document.getElementById('jsAppBar').winControl.show();
    }

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
