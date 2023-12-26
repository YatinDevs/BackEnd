const fs = require("fs");
const express = require("express"); // npm i express
// create server with express
const server = express();

// Data fetch
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// code here
server.get("/", (req, res) => {
  console.log("home");
  res.json(products);
  //   res.send("<h1>Welcome</h1>");
  //   res.sendFile("E:/BackEnd/ExpressJS/index.html");
});

// as convention listener should be at end
server.listen(8080, () => {
  console.log("server started");
});
