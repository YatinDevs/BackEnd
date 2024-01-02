const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

router.post("/", userController.create);
router.get("/", userController.getAllData);
router.get("/:id", userController.getData);
router.put("/:id", userController.replaceData);
router.patch("/:id", userController.updateData);
router.delete("/:id", userController.deleteData);

exports.router = router;
