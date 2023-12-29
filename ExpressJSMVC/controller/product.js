const fs = require("fs");
// fetch JSON data present in folder using FS module
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// console.log(data.products);
const products = data.products;

// functions CRUD :

exports.createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

exports.getProduct = (req, res) => {
  //   console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  const product = products.find((prd) => prd.id === id);
  res.status(200).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const productidx = products.findIndex((prd) => prd.id === id);
  products.splice(productidx, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const prdIdx = products.findIndex((prd) => prd.id === id);
  const product = products[prdIdx];
  products.splice(prdIdx, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const prdIdx = products.findIndex((prd) => prd.id === id);
  const productpopped = products[prdIdx];
  products.splice(prdIdx, 1);
  res.status(200).json(productpopped);
};
