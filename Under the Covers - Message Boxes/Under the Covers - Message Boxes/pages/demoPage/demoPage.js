// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511



(function () {
    "use strict";
    var roamingSavedSettings = Windows.Storage.ApplicationData.current.roamingSettings;

    WinJS.UI.Pages.define("/pages/demoPage/demoPage.html", {

        ready: function (element, options) {

            $(window).resize(function () {
                $('.centerScreen').css({
                    position: 'absolute',
                    left: ($(window).width() - $('.centerScreen').outerWidth()) / 2,
                    top: ($(window).height() - $('.centerScreen').outerHeight()) / 2
                });
            });

            $(window).resize();
            var changedTxt = document.getElementById("changedText");
            changedTxt.innerHTML = "Message will be changed <strong>after</strong> dialog is displayed.";

            var btnMsgDlg = document.getElementById("btnMessageBox");
            btnMsgDlg.addEventListener("click", cmdShowMessageBox, false);

            var btnMsgDlgDone = document.getElementById("btnMessageBoxDone");
            btnMsgDlgDone.addEventListener("click", cmdShowMessageBoxDone, false);

            var btnMsgDlgChoice = document.getElementById("btnMessageBoxChoice");
            btnMsgDlgChoice.addEventListener("click", cmdShowMessageBoxChoices, false);

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
    function cmdShowMessageBox() {
        var changedTxt = document.getElementById("changedText");
        changedTxt.innerHTML = "Message will be changed <strong>after</strong> dialog is displayed.";
        var md = new Windows.UI.Popups.MessageDialog('Hello Message', 'Title');
        md.showAsync();
    }

    function cmdShowMessageBoxDone() {
        var changedTxt = document.getElementById("changedText");
        changedTxt.innerHTML = "Message will be changed <strong>after</strong> dialog is displayed.";
        var md = new Windows.UI.Popups.MessageDialog('Hello Message', 'Title').showAsync().done(
            function () {
                changedTxt.innerHTML = "I am <strong>CHANGED!</strong>";
        });
    }

    function cmdShowMessageBoxChoices() {
        var changedTxt = document.getElementById("changedText");
        changedTxt.innerHTML = "Message will be changed <strong>after</strong> dialog is displayed.";
        var md = new Windows.UI.Popups.MessageDialog('Hello Message', 'Title');
        // Add commands and set their command handlers 
        md.commands.append(new Windows.UI.Popups.UICommand("Choice 1", cmdChoice1));
        md.commands.append(new Windows.UI.Popups.UICommand("Choice 2", cmdChoice2));
        // Set the command that will be invoked by default 
        md.defaultCommandIndex = 0;
        // Set the command to be invoked when escape is pressed 
        md.cancelCommandIndex = 1;
        // Show the message dialog 
        md.showAsync();
    }
    function cmdChoice1() {

    }
    function cmdChoice2() {

    }

    function cmdShowAppBar() {
        document.getElementById('demoAppBar').winControl.show();
    }

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
        //WinJS.Navigation.navigate("/pages/demoPage/demoPage.html");
    }

})();
