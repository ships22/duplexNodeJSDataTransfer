var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas'){
    var ninjas = [{name: 'ships', job: 'developper'}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  }
});
server.listen(3000);
console.log("server is listening");
