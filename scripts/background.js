chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.url == "https://cecil.auckland.ac.nz/Scripts/SessionAlert.js")
            return {redirectUrl: chrome.extension.getURL("scripts/session_alert.js")};
    },
    {urls: ["https://cecil.auckland.ac.nz/Scripts/SessionAlert.js"]},
    ["blocking"]
);

chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        chrome.tabs.create({url: chrome.extension.getURL("html/firstrun.htm")});
    }
});