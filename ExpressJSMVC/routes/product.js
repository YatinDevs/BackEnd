const express = require("express"); // npm i express
const productController = require("../controller/product");
const router = express.Router();

// Rest API's -> CRUD Operations
router
  .post("/", productController.createProduct) // CREATE POST /products --> post by req.body
  .get("/", productController.getAllProducts) // READ GET /products
  .get("/:id", productController.getProduct) // READ GET /products/:id -> get by req.params
  .put("/:id", productController.replaceProduct) // UPDATE PUT /products/:id -> get by req.params
  .patch("/:id", productController.updateProduct) // UPDATE patch /products/:id -> get by req.params
  .delete("/:id", productController.deleteProduct); // DELETE delete /products/:id -> get by req.params

exports.router = router;
