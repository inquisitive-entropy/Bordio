var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var request = require('request');
var key = process.env.D_API_TOKEN;



app.use(express.static('./client'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/key', function(req, res){
	var dUrl = "https://api.dribbble.com/v1/shots?&timeframe=week"
	var page = page || 1;
    var limit = limit || 21;
	var dCallback = '&callback=JSON_CALLBACK'
	request(dUrl + process.env.D_API_TOKEN + '&page=' + page + '&per_page=' + limit + dCallback, function(err, response, body){
	console.log(response)
	res.json(body)
	});
});

var port = 8080;
app.listen(port, function(){
  console.log('Successfully landed on port ' + port);
});
