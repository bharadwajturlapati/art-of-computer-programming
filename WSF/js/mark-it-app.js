var md = window.markdownit();
var fs = require('fs');

$("html").keypress(function(event) {
	// need to check in mac
    if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)){
    	return true;
    } 
    renderMarkHtml();
    event.preventDefault();
    return false;
});

function renderMarkHtml(){
	var result = md.render($('textarea#textAreaInput').val());
	$("#markit-output").html(result);
}


function loadExample(){
	var text = "";
	fs.readFile('templates/sample-markit-text.txt', function(err, data){
		if(err){
			console.log(err);
			text = "Error Occured. Please look at console.";
			return;
		}
		$('textarea#textAreaInput').val(data.toString());
		setTimeout(renderMarkHtml(), 200);
	});
}