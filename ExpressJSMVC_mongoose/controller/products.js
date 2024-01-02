const fs = require("fs");

// data from JSON file :
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// console.log(products);

// functions CRUD :

// Create POST -> /products
exports.create = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body); // created 201 or 200 OK
};

// Read GET -> /products
exports.getAllData = (req, res) => {
  res.status(200).json(products);
};

// Read GET -> /products/:id
exports.getData = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((prd) => prd.id === id);
  res.status(200).json(product);
};

// update PUT -> /products/:id --> overrides previous data
exports.replaceData = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  const productReplaced = products[productIndex];
  products.splice(productIndex, 1, { id: id, ...req.body });
  res.status(201).json();
};

// update PATCH -> /products/:id --> overwrites previous data
exports.updateData = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((prd) => prd.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(202).json(); // updated async 202 Accepted or 200 OK
};

// delete DELETE -> /products/:id
exports.deleteData = (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.find((product) => product.id === id);
  const productPopped = products[productIndex];
  products.splice(productIndex, 1);
  res.status(200).json(productPopped); // deleted async 202 Accepted or 200 OK
};
