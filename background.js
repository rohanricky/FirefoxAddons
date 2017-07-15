function onCreated(){
  if(browser.runtime.lastError){
    console.log(`Error: ${browser.runtime.lastError}`);
  }
  else {
    console.log("Created!");
  }
}

browser.contextMenus.create({
  id: "download",
  title: "Download Video",
  contexts: ["link"]
}, onCreated);

function openInNewTab(url){                  // Not Using
  var a = document.createElement("a");
  a.target = "_blank";
  a.href = url ;
  a.click();
}

browser.contextMenus.onClicked.addListener((info,tab)=>{
    switch(info.menuItemId){
      case "download":
          url1 = info.linkUrl.slice(0,12);
          url2 = info.linkUrl.slice(12);
          ifitworks = url1 + "ss" + url2;
          var creating = browser.tabs.create({
            url : ifitworks
          });
          document.getElementsByClassName('def-btn-box').click();
        break;
    }
});
