// importing file System module
const fs = require("fs");

// FS related :
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// console.log(products);

const express = require("express");

// creating Server with Express
const server = express();

// server.get("/", (req, res) => {
//   res.send("hello");
// });

// issue in sendFile -> path should be mention absolute from root
server.get("/", (req, res) => {
  res.sendFile("E:BackEnd\3_ExpressJSindex.html");
});

server.listen(8080, () => {
  "server Started..";
});
