//1.
var http = require('http');
 
//2.
var credentials = {
    userName: "integration",
    password: "kony@1234"
};
var realm = 'Basic Authentication';
function authenticationStatus(resp) {
    resp.writeHead(401, { 'WWW-Authenticate': 'Basic realm="' + realm + '"' });
    resp.end('Authorization is needed');
 
};

var server = http.createServer(function (request, response) {
    var authentication, loginInfo;
	console.log("Recieved a server hit"+request.headers.len);

    if (!request.headers["X-Custom-Auth"]) {
        authenticationStatus (response);
        return;
    }

    authentication = request.headers.headers["X-Custom-Auth"].replace(/^Basic/, '');

    authentication = (new Buffer(authentication, 'base64')).toString('utf8');

    loginInfo = authentication.split(':');

    if (loginInfo[0] === credentials.userName && loginInfo[1] === credentials.password) {
        response.end('Great You are Authenticated...');
    }
    authenticationStatus (response);
 
});

console.log("Server started on port 1729")
server.listen(1729);