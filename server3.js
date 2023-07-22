var http = require('http');
var imp = require('./module2');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Head':'text/html'});
    res.write(imp.myLineLine());
    res.end();
}).listen(8080);