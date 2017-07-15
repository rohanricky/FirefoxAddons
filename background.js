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

function openInNewTab(url){
  var a = document.createElement("a");
  a.target = "_blank";
  a.href = url ;
  a.click();
}

browser.contextMenus.onClicked.addListener((info,tab)=>{
    switch(info.menuItemId){
      case "download":
          console.log(info.linkUrl);
        break;
    }
});
