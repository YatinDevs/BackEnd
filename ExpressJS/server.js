const fs = require("fs");
const express = require("express"); // npm i express
// create server with express
const server = express();

// Data fetch
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// Case 3 :  Middleware :
// - Execute any Code.
// - Make changes to req and the res objects
// - end the req-res cycle.
// - call the next middleware in the stack.
server.use;

//  Case 2:  API - ENDPOINTS - Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

// Case 1 : code here : API
server.get("/demo", (req, res) => {
  console.log("home");

  // Responses we can send :
  //   res.status(201).send("<h1>Hello</h1>");
  //   res.sendStatus(404);
  //   res.json(products);
  //   res.send("<h1>Welcome</h1>");
  //   res.sendFile("E:/BackEnd/ExpressJS/index.html");
});

// as convention listener should be at end
server.listen(8080, () => {
  console.log("server started");
});
