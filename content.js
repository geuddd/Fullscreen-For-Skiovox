chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'toggleFullscreen') {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }
});
