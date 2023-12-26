// Node Core Modules.
// Http Module

const http = require("http");

// Creating an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  console.log("server started");
});

// listen binding to port number
server.listen(8080);
