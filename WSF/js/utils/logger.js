var logFile = "logs/apps.log";
var LOGGER = {
	log : function(errorObject){
		var date = new Date();
		var content = "["+date.toString()+"]"+" "+errorObject;
		fs.writeFile(logFile, content, function(err) {
    		if(err) {
        		return console.log(err);
    		}
		}); 
	}
}
