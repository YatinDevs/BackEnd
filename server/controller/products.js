// https://mongoosejs.com/docs/queries.html

const fs = require("fs");
const mongoose = require("mongoose");
// // data from JSON file :
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
// // console.log(products);

// data from Mongodb database:
const model = require("../model/product");
const Product = model.Product;
// functions CRUD :

// Create POST -> /products
exports.create = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Read GET -> /products
exports.getAllData = async (req, res) => {
  const products = await Product.find();
  // we can use Cases like below price > 500
  // const products = await Product.find({ price: { $gt: 500 } });
  res.status(200).json(products);
};

// Read GET -> /products/:id
exports.getData = async (req, res) => {
  console.log(req);

  const id = req.params.id;
  // console.log(req);
  console.log({ id });
  const product = await Product.findById(id);
  // const products = await Product.findOne({ _id: id });
  // const products = await Product.findOne();
  res.status(200).json(product);
};

// update PUT -> /products/:id --> overrides previous data
exports.replaceData = async (req, res) => {
  try {
    const id = req.params.id;
    // A.findOneAndReplace(filter, replacement, options)  // return Query
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(400).json({ error: "Internal Server Error", errordoc: error });
  }
};

// update PATCH -> /products/:id --> overwrites previous data
exports.updateData = async (req, res) => {
  try {
    const id = req.params.id;
    // A.findOneAndUpdate(conditions, update, options)  // returns Query
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(400).json({ error: "Internal Server Error", errordoc: error });
  }
};

// delete DELETE -> /products/:id
exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    // A.findOneAndDelete(conditions, options)  // return Query
    const doc = await Product.findOneAndDelete({ _id: id }, { new: true });
    res.status(201).json(doc);
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(400).json({ error: "Internal Server Error", errordoc: error });
  }
};

/*
Document Reference :
https://mongoosejs.com/docs/queries.html
Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()

*/
