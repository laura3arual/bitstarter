var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var message;

app.get('/', function(request, response) {
    fs.readFile('index.html','utf8',function(err,data){
	if(err){
	throw err; 
	}  
	 message = data;
    });
    response.send('xxx');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
