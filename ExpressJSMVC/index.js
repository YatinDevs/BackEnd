// MVC - ExpressJS

const express = require("express"); // npm i express
const fs = require("fs");
const morgan = require("morgan");

// create server
const server = express();

// built-in middleware:
server.use(express.json()); // req.body will be readable now which was of JSON type
// converts JSON data -> BodyParser --> was the name previously
server.use(morgan("dev"));
// morgan gives logs

// fetch JSON data present in folder using FS module
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// console.log(data.products);
const products = data.products;

// functions CRUD :

const createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  //   console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  const product = products.find((prd) => prd.id === id);
  res.status(200).json(product);
};

const replaceProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productidx = products.findIndex((prd) => prd.id === id);
  products.splice(productidx, 1, { ...req.body, id: id });
  res.status(201).json();
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const prdIdx = products.findIndex((prd) => prd.id === id);
  const product = products[prdIdx];
  products.splice(prdIdx, 1, { ...product, ...req.body });
  res.status(201).json();
};
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const prdIdx = products.findIndex((prd) => prd.id === id);
  const productpopped = products[prdIdx];
  products.splice(prdIdx, 1);
  res.status(200).json(productpopped);
};

server.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
// Rest API's -> CRUD Operations

// CREATE POST /products --> post by req.body
server.post("/products", createProduct);

// READ GET /products
server.get("/products", getAllProducts);

// READ GET /products/:id -> get by req.params
server.get("/products/:id", getProduct);

// UPDATE PUT /products/:id -> get by req.params
server.put("/products/:id", replaceProduct);

// UPDATE patch /products/:id -> get by req.params
server.patch("/products/:id", updateProduct);

// DELETE delete /products/:id -> get by req.params
server.delete("/products/:id", deleteProduct);

// server listener
server.listen(8080, () => {
  console.log("server started on port:8080");
});
