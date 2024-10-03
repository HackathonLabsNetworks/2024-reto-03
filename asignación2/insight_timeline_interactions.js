(function () {
  'use strict';

  // Jump to specific time from mesage payload
  function notifyWidgets(evt) {

    if (!evt) {
      return;
    }
    var origin = evt.origin || evt.originalEvent.origin;

    // Validate that event comes from videoindexer domain.
    if ((origin.indexOf(".videoindexer.ai") !== -1 || origin.indexOf("videoindexer.ai.azure.us") !== -1) && (evt.data.time !== undefined || evt.data.currentTime !== undefined || evt.data.language !== undefined)) {

      // Pass message to other iframe.
      if ('postMessage' in window) {
        var iframes = window.document.getElementsByTagName('iframe');
        try {
          for (var index = 0; index < iframes.length; index++) {
            iframes[index].contentWindow.postMessage(evt.data, origin);
          }
        } catch (error) {
          throw error;
        }
      }
    }
  }

  function clearMessageEvent() {
    if (window.removeEventListener) {
      window.removeEventListener("message", notifyWidgets);
    }
  }

  // Listen to message events from breakdown iframes
  window.addEventListener("message", notifyWidgets, false);

  // Clear the event if window unloads
  window.onunload = clearMessageEvent;

}());