var Panel = document.querySelector(".Panel");
var rootElement = document.querySelector(".Container");
function checkJSON(result) {
    var errPanel = initErrPanel(Panel, result);
    if (result) {
        var rootElement = document.querySelector(".Container").style.display = "block";

        initSizePanel(Panel);
    }
}

function initErrPanel(parentPanel, result) {

    clearPanel(parentPanel);
    parentPanel.style.display = "block";
    var errPanel = document.createElement("p");
    errPanel.className = "P";
    parentPanel.appendChild(errPanel);

    if (result) {
        errPanel.innerText = "JSON STATUS: JSON OK";
        errPanel.style.color = "green";
    } else {
        errPanel.innerText = "JSON STATUS: INCORRECT DATA";
        errPanel.style.color = "red";
    }
    return errPanel;
}

function clearPanel(parentPanel) {
    while (parentPanel.firstChild) {
        parentPanel.removeChild(parentPanel.firstChild);
    }
}

function initSizePanel(parentPanel) {
    var sizePanel = document.createElement("p");
    sizePanel.className = "P";  
    parentPanel.appendChild(sizePanel);

    sizePanel.innerText = "JSON SIZE: " + jsonObject.getSize;
}