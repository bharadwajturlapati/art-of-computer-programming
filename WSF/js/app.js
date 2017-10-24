
function addLocation(inputpath, locaname){
	var htmlString = quickAccessModel(inputpath, locaname);

	$("#locations").append(htmlString);
	addLocationToDB(inputpath, locaname);
}

function quickAccessModel(inputpath, locaname){
	var imagePath = "assets/img/coat-01.jpeg";
	var closeButton = "<div><i onclick='removeCurrentNode()' class='fa fa-times'></i> </div>";
	var htmlString = "<div class='product-card'>";
	htmlString += closeButton;
	htmlString += "<div class='product-image' onclick='openinExplorer()' info='"+inputpath+"'>"
	 +"<img src='"+imagePath+"'></div> <div class='product-info'> "
	 +"<h5>"+inputpath+"</h5> <h6>"+locaname+"</h6> </div> </div>";
	
	return htmlString;
}

function removeCurrentNode(){
	event.currentTarget.parentNode.parentNode.remove();
}

function openinExplorer() {
	var shell = require('electron').shell;
	var fullPath = event.currentTarget.getAttribute("info");
	shell.showItemInFolder(fullPath)
}

function addLocationToDB(inputpath, locaname){
	var payload = {
		"fileurl": inputpath,
    	"nickname": locaname,
    	"logicalgroup": ""
	};
	fetch("http://127.0.0.1:8000/api/quickaccess/",{
    	method: "POST",
    	body: JSON.stringify(payload),
    	headers:{
    				"Content-Type": "application/json"
    			}
	})
	.then(function(res){ return res.json(); })
	.then(function(data){ console.log( JSON.stringify( data ) ) })
}