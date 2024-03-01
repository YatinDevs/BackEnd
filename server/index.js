// nodejs core modules
require("dotenv").config(); // for env configuration
const express = require("express"); // express library
const fs = require("fs"); // filessystem
const morgan = require("morgan"); // morgan
const mongoose = require("mongoose"); // log
const cors = require("cors"); // consume cors similar to middle ware

// server creation
const server = express();

// db connection
main().catch((err) => console.log(err.message));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected successfully...");
}

// router
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");

// built-in middlewares:
server.use(cors());
server.use(express.json()); // body_parser -> converts JSON data
server.use(morgan("dev")); // logs
// server.use(express.static(process.env.PUBLIC_DIR));
// routes
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// port listeners
server.listen(process.env.PORT, () => {
  console.log("Server Up and Running on Port :", process.env.PORT);
});
