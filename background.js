chrome.webRequest.onBeforeRequest.addListener(
  function (info) {
    if (
      info.url &&
      info.url.indexOf("ViewImpexMonitor-DownloadLogFile") != -1
    ) {
      chrome.tabs.sendMessage(info.tabId, info, { frameId: info.frameId });
      return {
        redirectUrl: "javascript:",
      };
    }
  },
  {
    urls: ["*://*.demandware.net/on/demandware.store/Sites-Site/default/*"],
    types: ["main_frame"],
  },
  ["blocking"]
);
