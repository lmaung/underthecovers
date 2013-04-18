// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/contactDeveloper/contactDeveloper.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var btnSendMail = document.getElementById("btnSendEmail");
            btnSendMail.addEventListener("click", doCmdbtnSendMail, false);



            
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });

    function doCmdbtnSendMail() {
        var emailBody = document.getElementById("contactMessage").value;
        document.location.href = "mailto:lwin@pressffive.com?Subject=Under%20the%20Cover%20Series%3A&Body=" + emailBody ;
    }

})();
