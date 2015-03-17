/**
 * Modified original SessionAlert.js to bypass alert dialog and renew session.
 *
 * Original source: https://cecil.auckland.ac.nz/Scripts/SessionAlert.js? (empty get param to bypass this extension)
 * Retrieved on:    14 March 2014 20:46
 *
 * @author Leo Xiong<hello at leoxiong dot com>
 **/
function SessionAlert(timeout, queryString, warningMessage, resetMessage, noResetMessage) {
    var timeToExpireInMin = 1000 * 60 * (timeout - 5);

    //Create the timer
    var mytimer = window.setTimeout(alertUser, timeToExpireInMin);
    this.resetAlert = resetAlert;
    this.ResetSession = ResetSession;

    //Function to prompt the user to renew the session
    function alertUser() {
        ResetSession();
    }

    function alertNotInTime() {
        alert("Your session was unable to be renewed, possibly due to a network error. Therefore your session is now expired.");
        log("Session expired.");
    }

    //This function is called when any page is reloaded.
    //It resets the global timer.
    function resetAlert() {
        clearTimeout(mytimer);
        mytimer = window.setTimeout(alertUser, timeToExpireInMin);
    }

    //The following functions will  take care of renewing the session and timer
    //This function is used to renew the session using AJAX
    function createRequestObject() {
        var ro;
        var browser = navigator.appName;
        if (browser == "Microsoft Internet Explorer") {
            ro = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            ro = new XMLHttpRequest();
        }
        return ro;
    }

    var http = createRequestObject();

    //The function called to reset the session
    function ResetSession(supressWarning) {
        resetAlert();
        http.open('get', UrlConstants.ResumePageView + '?' + queryString);
        if (!supressWarning)
            http.onreadystatechange = warnSessionWasReset;
        http.send(null);
    }

    //Display the alert to the user and reset the timer
    function warnSessionWasReset() {
        if (http.readyState == 4) {
            if (http.status == 200) {
                resetAlert();
                log("XHR request sent, session reset.");
            } else {
                alertNotInTime();
                log("XHR HTTP response status: " + http.status);
            }
        }
    }

    // End of Renewing the session
    //=======================================


    // Functions to display messages
    function warnSessionWasNotReset() {
        alert(noResetMessage);
    }

    function log(message) {
        console.log("[" + new Date() + "] " + message)
    }
}