(function () {
	
	var button = document.createElement("button");
    button.className = "GetButton"
    button.innerText = "GET";

	var input = document.createElement("input");
	input.className = "Input";
    //input.value = "https://api.worldoftanks.ru/wot/account/list/?language=en&application_id=demo&search=Jove"; (JUST FOR TEST)
	input.value = "http://query.yahooapis.com/v1/public/yql?q=select%20%2a%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D%27WRC%27&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback";
	
	input.addEventListener("click", function(){input.value = "";});
	
	var tool = document.querySelector(".Tool");
	tool.appendChild(input);
	tool.appendChild(button); 
	
	var Panel = document.createElement("div");
	Panel.className = "Panel";
	tool.appendChild(Panel);
})();
