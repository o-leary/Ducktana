chrome.webRequest.onBeforeRequest.addListener(
function(details){

	return { redirectUrl: details.url.replace("www.bing.com/search", "duckduckgo.com/")};
},
 {urls: ["*://www.bing.com/search*"]}, ["blocking"]);