const express = require("express");
const router = express.Router();
const productController = require("../controller/products");
router.post("/", productController.create);
router.get("/", productController.getAllData);
router.get("/:id", productController.getData);
router.put("/:id", productController.replaceData);
router.patch("/:id", productController.updateData);
router.delete("/:id", productController.deleteData);

exports.router = router;
