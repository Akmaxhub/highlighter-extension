document.addEventListener("DOMContentLoaded", function () {
    const highlightButton = document.getElementById("highlightButton");
  
    // Send a message to the content script to toggle the highlighter on the active tab
    highlightButton.addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          const activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, { action: "toggleHighlighter" });
        });
      });
  });
  