let http = require('http');

var server = http.createServer((req,res) =>{

    res.writeHead(200,{'Content-type':'text/plain'})//mostra come contenuto testuale/html
    res.end('hello world');
})

server.listen(3000, '127.0.0.1') //127.0.0.1 local host
console.log('server running at http://127.0.0.1:3000')