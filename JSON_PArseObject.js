class JSON_ParseObject {
    
    constructor(url) { 
        this.url = url;
    }

    get getSize() {
        return this.size;
    }

    httpGet() { 
        let request = this.createHttpObject(); 
        request.open("GET", this.url, true); 
        request.send(null); 

        request.onreadystatechange = 
            function() { 
            if (request.readyState == 4)  {
                try {
                    var arr = JSON.parse(request.responseText);
                } catch (e) { 
                    checkJSON(false);
                };
                
                this.size = JSON.stringify(arr).length;

                var rootElement = document.querySelector(".Container");
                while (rootElement.firstChild) {
                    rootElement.removeChild(rootElement.firstChild);
                }
                isGlobalObj = true;
                outputJSON(arr, rootElement); 
            }            
        }
    } 

    createHttpObject() {
        var xmlhttp;
        try {
          xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (E) {
            xmlhttp = false;
          }
        }
        if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
          xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    }
}

