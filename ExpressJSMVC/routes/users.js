const express = require("express"); // npm i express
const usersController = require("../controller/users");
const router = express.Router();

// Rest API's -> CRUD Operations
router
  .post("/", usersController.createUsers) // CREATE POST /products --> post by req.body
  .get("/", usersController.getAllUsers) // READ GET /products
  .get("/:id", usersController.getUser) // READ GET /products/:id -> get by req.params
  .put("/:id", usersController.replaceUser) // UPDATE PUT /products/:id -> get by req.params
  .patch("/:id", usersController.updateUser) // UPDATE patch /products/:id -> get by req.params
  .delete("/:id", usersController.deleteUser); // DELETE delete /products/:id -> get by req.params

exports.router = router;
