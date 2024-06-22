chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            console.log("yeahhh1!!!")
        }
    });
});