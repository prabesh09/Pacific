document.getElementById("openButton").addEventListener("click", function () {
    chrome.tabs.create({ url: "index.html" });
});
