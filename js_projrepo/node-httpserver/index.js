const port = 3031;
const http = require('http');
const url = require('url');

 
 var healthCheckResponse = {
 	isCheckPassed : true
 }

 const requestHandler = (request, response) => {
 	console.log(request.url);
 	response.writeHead(200, {'Content-Type': 'application/json'});
 	var q = url.parse(request.url, true);
 	healthCheckResponse["path"] = q;
 	healthCheckResponse["headers"] = request.headers;
 	response.write(JSON.stringify(healthCheckResponse));
 	response.end();
 }

const server = http.createServer(requestHandler); 
server.listen(port, (err)=>{
	if(err){
		return console.log("Not able to launch the server on port", err);
	}

	console.log("server is listening on port: "+port);
});


