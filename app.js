const http = require("http");
http.createServer(function(request, response) {
  console.log(request.url);
  let writeHaedObject = {
    'Content-Type': 'text/html'
  }
  response.writeHead(200, writeHaedObject);
  response.end("hello");
  
}).listen(8080); // 포트설정