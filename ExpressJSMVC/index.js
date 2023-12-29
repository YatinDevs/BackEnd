// MVC - ExpressJS
const express = require("express"); // npm i express
const morgan = require("morgan");
// create server
const server = express();
const productRouter = require("./routes/product");
const usersRouter = require("./routes/users");

// built-in middleware:
server.use(express.json()); // req.body will be readable now which was of JSON type
// converts JSON data -> BodyParser --> was the name previously
server.use(morgan("dev"));
// morgan gives logs
// server.use(express.static("public"));

// routes
server.use("/products", productRouter.router);
server.use("/users", usersRouter.router);

//? >  MVC  Concept - Model - View - Controller

server.get("/", (req, res) => {
  res.send("<h1>Header</h1>");
});

// server listener
server.listen(8080, () => {
  console.log("server started on port:8080");
});
