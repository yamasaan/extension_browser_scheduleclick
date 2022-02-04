// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Installed");
// });

chrome.alarms.onAlarm.addListener(async (name) => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: result,
  });
  console.log(name);
});

const result = () => {
  //simple click at element id or class name
  document.querySelector(".btn").click();
};
