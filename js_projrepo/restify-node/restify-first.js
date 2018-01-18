// Passowrd : [{"key":"X-Custom-Auth","value":"Basic aW50ZWdyYXRpb246a29ueUAxMjM0","description":""}]
var restify = require('restify');

var credentials = {
    userName: "integration",
    password: "kony@1234"
};

var claims = {
	"security_attributes": {
		"session_token": "%s",
		"session_ttl": "-1"
	},
	"user_attributes": {
		"user_id": "bharadwaj.turlapati@kony.com",
		"email": "bharadwaj.turlapati@kony.com",
		"firstname": "bharadwaj",
		"lastname": "turlapati",
		"user_attributes": {
			"user_id": "bharadwaj.turlapati@kony.com"
		},
		"profile_attributes": {
			"firstname": "bharadwaj",
			"userid": "bharadwaj.turlapati@kony.com",
			"email": "bharadwaj.turlapati@kony.com",
			"lastname": "turlapati"
		}
	}
}

var failure_response = {
    "backend_error_message": "backendErrorMessage",
    "opstatus": 8009,
    "errmsg": "Request unsuccessful for service login, server responded with status code 401",
    "backend_error_code": "123",
    "httpStatusCode": 401
}
//Demo function
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function respond_to_login(req, res, next){
	processToken(req);
	res.send(claims);
	next();
}

function respond_to_logout(req, res, next){
	res.send(claims);
	next();
}

function processToken(request){
	var custom_auth_header = request.headers["x-custom-auth"];
	console.log("START******************START");
	console.log("****************** HEADERS");
	console.log(request.headers);
	console.log("****************** BODY");
	console.log(request.body);
	console.log("END******************END");
	/*if (!custom_auth_header) {
        return failure_response;
    }

    authentication = custom_auth_header.replace(/^Basic/, '');

    authentication = (new Buffer(authentication, 'base64')).toString('utf8');

    loginInfo = authentication.split(':');

    if (loginInfo[0] === credentials.userName && loginInfo[1] === credentials.password) {
       return claims;
    }
    
	return failure_response;
	*/
}

var server = restify.createServer();
server.post('/login', respond_to_login);
server.post('/logout', respond_to_logout);
server.name = "restserver";

server.listen(3005, function() {
  console.log('%s listening at %s', server.name, server.url);
});