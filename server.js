var express = require('express');
var app 	= express();
var morgan 	= require('morgan');

app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(8080);