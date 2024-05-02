const http = require("http");
const server = http.createServer(function (request, response) {
  response.writeHead(200, { Content_Type: "text/plane" });
  response.write("Hello this is our first node.js application");
  response.end();
});

const port = 8080;
server.listen(port);
console.log("Server running at port=" + port);

// 터미널에
// cd hyeonjun0630.github.io/test_study/classNode
// node hello.js
// 치기
