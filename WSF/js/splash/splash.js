var fs = require('fs');

function showMainPage(){
	window.location = "main.html"
}

function loadproperties(){
	loadDBProperties();
}

function setTimeOutToReleaseSplash(){
	loadproperties();
	setTimeout(function(){
		showMainPage();
	}, 3000);
}

function loadDBProperties(){
	var lineReaderObj = getLineReader('wsf.pref');
	lineReaderObj.on('line', function (lineStr) {
  		var propsArray = lineStr.split('=');
  		localStorage.setItem(propsArray[0], propsArray[1]);
	});
}

function getLineReader(file){
	var lineReader = require('readline').createInterface({
  		input: require('fs').createReadStream(file)
	});
	return lineReader;
}