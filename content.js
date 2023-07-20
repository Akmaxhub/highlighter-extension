let isHighlighterActive = false;

function toggleHighlighter() {
  isHighlighterActive = !isHighlighterActive;

  if (isHighlighterActive) {
    document.body.style.cursor = "crosshair";

    document.addEventListener("mouseup", highlightSelectedText);
  } else {
    document.body.style.cursor = "auto";

    document.removeEventListener("mouseup", highlightSelectedText);
  }
}

function highlightSelectedText() {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return;
  }

  const range = selection.getRangeAt(0);
  const newNode = document.createElement("span");
  newNode.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
  newNode.classList.add("highlighted-text");

  range.surroundContents(newNode);
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === "toggleHighlighter") {
    toggleHighlighter();
  }
});
