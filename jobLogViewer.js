chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      console.log(xhr.responseText);

      var head = document.head;
      // var css = 'pre { display: block; word-wrap: break-word; white-space: pre-wrap; overflow-x: auto; }';
      var css =
        "pre { 	box-sizing: border-box; width: 100%; white-space: pre-wrap; padding: 0; margin: 0; overflow: auto; overflow-y: hidden; font-size: 12px; line-height: 20px; background: #efefef; border: 1px solid #777; padding: 10px; color: #333; }";
      var style = document.createElement("style");
      head.appendChild(style);
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));

      const dialog = document.createElement("dialog");
      dialog.innerHTML = "<pre>" + xhr.responseText + "</pre>";
      document.body.appendChild(dialog);
      dialog.showModal();
    }
  };
  xhr.open("GET", request.url);
  xhr.send();
});
