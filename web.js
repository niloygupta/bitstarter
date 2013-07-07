var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

//var buf = new Buffer(64);
app.get('/', function(request, response) {
 var buf =  fs.readFileSync('index.html');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
