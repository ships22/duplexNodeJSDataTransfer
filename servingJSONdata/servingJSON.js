var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made for JSON data:' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
	"name": "Ships",
	"job": "Developper",
	"hobbies": "Programming, Guitar, Photography"
};
  res.end(JSON.stringify(myObj)); //.end method only takes string/buffer.
});

server.listen(3000, '127.0.0.1');
console.log("Server is listening on port 3000");
