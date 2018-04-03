const fs = require("fs");
function addLocation(inputpath, locaname, id){

	htmlString = quickAccessModel(inputpath, locaname, id);

	$("#locations").append(htmlString);
}

function quickAccessModel(inputpath, locaname, id){
	var closeButton = "<div class='quickaccess-options'><i onclick='removeCurrentNode()' class='fa fa-times'></i>";
	closeButton += "<i class='fa fa-trash-o' data='"+id+"' onclick='removeFromDB()'></i>";
	var expand = "<i class='fa fa-expand' data='"+inputpath+"' onclick='callJSTreeInternal()'></i>";
	var openInTerminal = "<i class='fa fa-terminal' data='"+inputpath+"' onclick='openInDefaultTerminal()'></i>"
	expand+=openInTerminal;
	closeButton += expand +"</div>"

	var htmlString = "<div class='product-card'>";
	htmlString += closeButton;
	htmlString += "<div class='product-image' onclick='openinExplorer()' info='"+inputpath+"'>"
	 +locaname+"</div> <div class='product-info'> "
	 +"<h5 class='product-path'>"+inputpath+"</h5> <h6 class='product-name'>"+locaname+"</h6> </div> </div>";
	
	return htmlString;
}

function initAddQuickAccessTab(){
	quickaccessDbService.getAllData(loadData)
}

function loadData(data){
	for(var i=0; i<data.length; i++){
		var eachJson = data[i];
		addLocation(eachJson.fileurl, eachJson.shortname, eachJson.data_id);
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
	fetch("http://127.0.0.1:8000/waas/api/quickaccess/",{
    	method: "POST",
    	body: JSON.stringify(payload),
    	headers:{
    				"Content-Type": "application/json"
    			}
	})
	.then(function(res){ return res.json(); })
	.then(function(data){addLocation(data.fileurl, data.nickname, data.id); });
}

function removeFromDB(){
	var id = event.currentTarget.getAttribute("data");
	var delete_url = "http://127.0.0.1:8000/waas/api/quickaccess/"+id;
	fetch(delete_url,{
    	method: "DELETE"
	})
	.then(function(res){ return res.json(); })
	.then(function(data){ console.log( JSON.stringify( data ) ) });

	removeCurrentNode();
}

function viewInJsTree(){
	var location = event.currentTarget.getAttribute("data");
	return fs.readdirSync(location);
}


function callJSTreeInternal(){
	var listOfDirs = viewInJsTree();
	var htmlString = "<div><i class='fa fa-times times-button' onclick='hideFolderView()'></i></div>";
	for(var i=0;i<listOfDirs.length;i++){
		var currentFile = listOfDirs[i];
		if(currentFile.indexOf(".")>0){
			htmlString += "<div><i class='fa fa-file folder-icon-in-view'></i>"+ currentFile+"</div>";
		}
		else{
			htmlString += "<div><i class='fa fa-folder-open folder-icon-in-view'></i>"+ currentFile+"</div>";
		}
	}
	clearDomTree($("#cardAsTree")[0]);
	$("#cardAsTree").append(htmlString);
	$("#cardAsTree").show();
}

function openInDefaultTerminal(){
	var child_process = require('child_process');
	var location = event.currentTarget.getAttribute("data");
	child_process.execSync("cmd.exe /c start /d ;"+location);
}

function clearDomTree(node){
	while (node.firstChild) {
    	node.removeChild(node.firstChild);
	}
}

function hideFolderView (){
     $("#cardAsTree").hide();
}

function initTabs(){
		initAddQuickAccessTab();
	/* Left it for reference do not remove, this is how you initialize codemirror
	if(tabLoaded == "docgen-tab" || tabLoaded == "simple-formatter"){
		CodeMirror($("#code-mirror")[0],{
			mode:"javascript",
			lineNumbers:true,
			theme:"base16-dark"
		});
	}*/
}