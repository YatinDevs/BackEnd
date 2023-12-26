const http = require("http");

// consider data variable
const data = { age: 23 };

// Creating an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  console.log("server started");

  // setting new Header
  res.setHeader("key", "value");
  res.setHeader("Content-Type", "application/json");
  // sending Response
  //   res.end("<h1>hello Welcome</h1>");
  // sending
  res.end(JSON.stringify(data));
});

// listen binding to port number
server.listen(8080);
