const port = 3032;
const http = require('http');
const url = require('url');

 
 var healthCheckResponse = "<?xml version='1.0' encoding='UTF-8'?><isCheckPassed>true</isCheckPassed>";

 const requestHandler = (request, response) => {
 	console.log(request.url);
 	response.writeHead(200, {'Content-Type': 'application/xml'});
 	response.write(healthCheckResponse);
 	response.end();
 }

const server = http.createServer(requestHandler); 
server.listen(port, (err)=>{
	if(err){
		return console.log("Not able to launch the server on port", err);
	}

	console.log("server is listening on port: "+port);
});


