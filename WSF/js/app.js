const fs = require("fs");
function addLocation(inputpath, locaname, id, addToDBEnabled){
	var htmlString = quickAccessModel(inputpath, locaname, id);

	$("#locations").append(htmlString);

	if(addToDBEnabled){
		addLocationToDB(inputpath, locaname);
	}
}

function quickAccessModel(inputpath, locaname, id){
	var imagePath = "assets/img/coat-01.jpeg";
	var closeButton = "<div><i onclick='removeCurrentNode()' class='fa fa-times'></i>";
	closeButton += "<i class='fa fa-trash-o' data='"+id+"'' onclick='removeFromDB()'></i> </div>";
	var htmlString = "<div class='product-card'>";
	htmlString += closeButton;
	htmlString += "<div class='product-image' onclick='openinExplorer()' info='"+inputpath+"'>"
	 +"<img src='"+imagePath+"'></div> <div class='product-info'> "
	 +"<h5>"+inputpath+"</h5> <h6>"+locaname+"</h6> </div> </div>";
	
	return htmlString;
}

function initAddQuickAccessTab(){
	fetch("http://127.0.0.1:8000/api/quickaccess/",{
    	method: "GET"
	})
	.then(function(res){ return res.json(); })
	.then(function(data){ loadData(data); });
}

function loadData(data){
	for(var i=0; i<data.length; i++){
		var eachJson = data[i];
		addLocation(eachJson.fileurl, eachJson.nickname, eachJson.id, false);
	}
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
	.then(function(data){ console.log( JSON.stringify( data ) ) });
}

function removeFromDB(){
	var id = event.currentTarget.getAttribute("data");
	var delete_url = "http://127.0.0.1:8000/api/quickaccess/"+id;
	fetch(delete_url,{
    	method: "DELETE"
	})
	.then(function(res){ return res.json(); })
	.then(function(data){ console.log( JSON.stringify( data ) ) });

	removeCurrentNode();
}