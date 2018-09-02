var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
  console.log('request was made' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');
// myReadStream.on('data', function(dataChunk){
//   console.log('new chunk received');
//   myWriteStream.write(dataChunk);
myReadStream.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log('hey, server is now listening to port 3000');
