// Listener to redirect to Google
chrome.webRequest.onBeforeRequest.addListener(
function(details){
	return { redirectUrl: details.url.replace("www.bing.com/search", "duckduckgo.com/")};
}, { urls: ["*://www.bing.com/search*"] }, ["blocking"]);

// Listener to check if extension is installed (when browsing installer page)
chrome.runtime.onMessageExternal.addListener(
function (request, sender, sendResponse) {
    if (request) {
        if (request.message) {
            if (request.message == "version") {
                sendResponse({ version: "1.1" });
            }
        }
    }
    return true;
});
