var express = require('express'), bodyParser = require('body-parser')
oauthserver = require('oauth2-server');

var app = express();

app.use(bodyParser.urlencoded({
	extended : true
}));

app.use(bodyParser.json());

app.oauth = oauthserver({
	model : {},
	grants : [ 'password' ],
	debug : true
});

app.all('/oauth/token', app.oauth.grant());

app.get('/', app.oauth.authorise(), function(req, res) {
	res.send('Authorized');
});

app.use(app.oauth.errorHandler());

app.listen(3000);