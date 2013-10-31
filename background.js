chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.cookies.getAll({
  },
  function(cookies) {
    alert(cookies.length);
  });
});