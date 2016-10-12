var express = require('express')
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());

app.post('/login', (req, res) => {
	console.log(req.body);
	res.send(200);
});

app.get('/login', (req, res) => {
	res.send('<html><body><form>'
		+'<label for="username">Username</label><input type="text" name="username" value="" />'
		+'<label for="password">Password</label><input type="password" name="password" value="" />'
		+'<button type="submit">Login</button>'
		+'</form></body></html>');
});

app.listen(7150, function() {
	console.log('Example app listening on port 7150');
});
