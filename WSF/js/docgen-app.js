var docgenUploadFilters = [
    { name: 'JSON Files', extensions: ['json'] }
  ];

var docgenUploadCallback = function(fileNames){
	var fileName = fileNames[0];
	fs.readFile(fileName, function read(err, data){
		if (err) {
        	throw err;
    	}
    	postToServer(data);
	});

}

function generateApiDoc(){
	var dialog = require('electron').remote.dialog;

	dialog.showOpenDialog({
		title:"Upload Json Collection",
		filters:docgenUploadFilters
	}, docgenUploadCallback);

}

function postToServer(fileData){
	console.log(fileData.toString('utf-8'));
}