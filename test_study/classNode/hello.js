const http = require("http");
const server = http.createServer(function (request, responses) {
  responses.writeHead(200, { Content_Type: "text/plane" });
  responses.write("Hello this is our first node.js application");
  responses.end();
});

const port = 8080;
server.listen(port);
console.log("Server running ar port=" + port);
