const BASE_URL = "https://reddit.com/r/";
var sub = "";

/*browser.omnibox.setDefaultSuggestion({
	description: BASE_URL
});*/

browser.omnibox.onInputChanged.addListener((input, suggest) => {
	sub = input;
	/*browser.omnibox.setDefaultSuggestion({
		description: BASE_URL + sub
	});*/
});

browser.omnibox.onInputEntered.addListener((input, disposition) => {
	url = BASE_URL + sub;
	
	switch (disposition) {
		case "currentTab":
			browser.tabs.update({url});
			break;
		case "newForegroundTab":
			browser.tabs.create({url});
			break;
		case "newBackgroundTab":
			browser.tabs.create({url, active: false});
			break;
	}
	
	sub = "";
	/*browser.omnibox.setDefaultSuggestion({
		description: BASE_URL
	});*/
});