const http = require("http");
http.createServer(function(request, response) {
  let writeHaedObject = {
    'Content-Type': 'text/html'
  }
  response.writeHead(200, writeHaedObject);
  response.end("hello");
  
}).listen(8080); // 포트설정

console.log("수정함")