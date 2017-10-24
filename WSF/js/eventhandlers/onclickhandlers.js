function init(){
	$("#openHomePage").click(function(){
		var shell = require('electron').shell;
		shell.openExternal('http://agnosticstrings.com');
	});
}