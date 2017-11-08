var button = document.querySelector(".GetButton");
button.addEventListener("click", getUrl);
var jsonObject;

var isGlobalObj = true;
var ObjCount = 0;

function getUrl() {
    var url = document.querySelector(".Input").value;
    url = (typeof url !== "undefined") ?  url : defaultUrl;
    getJSON(url);
} 

function getJSON(url) {
    if (url == "") {                                  //CHANGE PLS
        alert("Invalid URL");        
    }
    jsonObject = new JSON_ParseObject(url);    
    jsonObject.httpGet();
}

function outputJSON(obj, parentNode) {
    
    if (typeof obj === "object" || Array.isArray(obj))  {   
        var objUl = document.createElement("div");
        objUl.className = "Obj";
        objUl.id = "Obj" + ObjCount++;
        parentNode.appendChild(objUl); 
    
        var span = document.createElement("span");
        span.className = "Span";
        objUl.appendChild(span); 
 
        if (!isGlobalObj) {
            span.innerText = JSON.stringify(key);
        } else {
            checkJSON(true);
            span.innerText = JSON.stringify(typeof obj);
        }
                 
        var spoiler = document.createElement("div");
        spoiler.className = "spoiler-content";
        objUl.appendChild(spoiler);           
        isGlobalObj = false; 
        
        span.addEventListener("click", openSpoiler);

        for (key in obj) { 
            outputJSON(obj[key], spoiler); 
        }     
        
    } else if (typeof obj !== "undefined") { 
        var ul = document.createElement("div"); 
        ul.className = "objectInnerData";
        ul.innerText = JSON.stringify(key) + ": " + JSON.stringify(obj); 
        parentNode.appendChild(ul); 
    }
}

function openSpoiler() {
    var targetObj = event.targetObj || event.srcElement; 
    Content = targetObj.parentNode.lastChild;

    if (Content.style.display != "block") {
        Content.style.display = "block";
        targetObj.style.background = "url(icon-close.png) no-repeat 0 50%";
    } else {
        Content.style.display = "none";
        targetObj.style.background = "url(icon-open.png) no-repeat 0 50%";
    }     
}
