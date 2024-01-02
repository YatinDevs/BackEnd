require("dotenv").config(); // for env configuration
const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { Schema } = mongoose;
// server creation
const server = express();

// db connection
main().catch((err) => console.log(err.message));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected successfully...");
}

// Schema - (consider it as configuration for collection)
// The Permitted SchemaTypes are :
/*
  - String
  - Number
  - Date
  - Buffer 
  - Boolean
  - Mixed
  - ObjectId
  - Array
  - Decimal128
  - Map
*/
const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  discountPercentage: { type: String },
  rating: { type: Number },
  stock: { type: Number },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: [String],
});

// we create Schema and convert it to Model.
// A instance of model is called Document
const Product = mongoose.model("Product", productSchema);

// router
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");

// built-in middlewares:
server.use(express.json()); // body_parser -> converts JSON data
server.use(morgan("dev")); // logs
server.use(express.static(process.env.PUBLIC_DIR));

// routes
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// port listeners
server.listen(process.env.PORT, () => {
  console.log("Server Up and Running...");
});
