const http = require("http");
const fs = require('fs');
const memberArray = require('./source/src-memeber-id-array');

http.createServer(function(request, response) {

    if(request.method !== "GET") {
      throw new Error("해당 서버는 GET요청 처리만 가능하게끔 만들어져 있습니다.");
    }
    if(request.url === "/") {
      response.writeHead(200, {"Content-Type":"text/plain; charset= utf-8"});
      response.end("주소뒤에 자신의 github 아이디를 작성해주세요");
    }
    const getRoute = (requestUrl) => {
      memberArray.forEach((member) => {
          let value = "/" + member;
          if(requestUrl === value) {
            let responseData = value + ".html"
            fs.readFile("./static" + responseData, (err, data) => {
              if(err) {
                console.error('파일읽기 에러');
              }
              response.writeHead(200, { "Content-Type" : "text/html;" });
              response.write(data);
              response.end();
            })
          }
        })
      };
    getRoute(request.url);
}).listen(8080); // 포트설정