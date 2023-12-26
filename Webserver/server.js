// Creating web server using Nodejs
// importing http module

const http = require("http");

// Creating an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  console.log("server started");
  // sending Response
  res.end("<h1>hello</h1>");
});

// listen binding to port number
server.listen(8080);

// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
