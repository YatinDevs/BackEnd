const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const products2 = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
  { id: "104", name: "ring", category: "accessories", price: 1000 },
  { id: "105", name: "Shirt", category: "Clothing", price: 1500 },
];

const app = express();
app.use(express.json());

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/product.json`));

app.get("/api/v1/products", (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      message: "Products Details sucessfully Fetched",
      data: {
        total: products.length,
        products: products,
      },
    });
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
});

app.get("/api/v1/products/:productId/name/:name", (req, res) => {
  try {
    const { productId, name } = req.params;
    console.log(productId, name);

    const productData = products.find((prd) => prd.id === productId);

    if (productData) {
      res.status(200).send({
        status: "success",
        message: "Product Details sucessfully Fetched",
        data: {
          product: productData,
        },
      });
    } else {
      res.status(400).send({
        status: "failure",
        message: "Product Not found!",
      });
    }
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
});

app.get("/product", (req, res) => {
  console.log("query params", req.query);
  const { category, name, maxPrice } = req.query;
  console.log("maxPrice", maxPrice);
  if (category) {
    const filteredBasedOnCategory = products2.filter(
      (product) => product.category === category
    );
    res.send({
      total: filteredBasedOnCategory.length,
      records: filteredBasedOnCategory,
    });
  }

  if (maxPrice) {
  }
});

app.post("/api/v1/product/new", (req, res) => {
  try {
    // create a new product
    // need data from request
    console.log("body", req.body);
    const newProduct = { id: products.length + 1, ...req.body };
    // randomly generate a 6 digit ID; --> use Math.random
    products.push(newProduct);
    fs.writeFile(
      `${__dirname}/data/product.json`,
      JSON.stringify(products),
      (err) => {
        if (err) {
          res.status(500).send({
            status: "Failed",
            message: "Failed to create new product",
          });
        } else {
          res.status(201).send({
            status: "success",
            message: "Product created sucessfully",
            data: {
              product: newProduct,
            },
          });
        }
      }
    );
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
});

app.put("/api/v1/product/:productId", (req, res) => {
  // need id to search product --> params
  // need complete data to update ---> req.body
  try {
    const productId = req.params.productId * 1;
    const productIdx = products.findIndex((prd) => prd.id === productId);
    const productToReplaced = { id: productId, ...req.body };
    // steps --> find the el
    // then --> remove the existing
    // add the new one
    if (productIdx) {
      products.splice(productIdx, 1, productToReplaced);
      fs.writeFile(
        `${__dirname}/data/product.json`,
        JSON.stringify(products),
        (err) => {
          if (err) {
            res.status(500).send({
              status: "Failed",
              message: "Failed to update product",
            });
          } else {
            res.status(201).send({
              status: "success",
              message: "Product Replaced sucessfully",
              data: {
                product: productToReplaced,
              },
            });
          }
        }
      );
    } else {
      res.status(400).send({
        status: "failure",
        message: "Product Not found!",
      });
    }
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
});

app.patch("/api/v1/product/:productId", (req, res) => {
  // need id to search product --> params
  // need complete data to update ---> req.body
  try {
    const patchData = { ...req.body };
    const productId = req.params.productId * 1;
    const productIdx = products.findIndex((prd) => prd.id === productId);
    const product = products[productIdx];
    // steps --> find the el
    // then --> remove the existing
    // add the new one
    const patchedProduct = { ...product, ...patchData };
    if (productIdx) {
      products.splice(productIdx, 1, patchedProduct);

      fs.writeFile(
        `${__dirname}/data/product.json`,
        JSON.stringify(products),
        (err) => {
          if (err) {
            res.status(500).send({
              status: "Failed",
              message: "Failed to update product",
            });
          } else {
            res.status(201).send({
              status: "success",
              message: "Product Updated sucessfully",
              data: {
                product: patchedProduct,
              },
            });
          }
        }
      );
    } else {
      res.status(400).send({
        status: "failure",
        message: "Product Not found!",
      });
    }
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
});

app.delete("/api/v1/product/:productId", (req, res) => {
  // steps --> find the el
  // step - 1 --> delete el
  try {
    const productId = parseInt(req.params.id);
    const productIdx = products.findIndex((prd) => prd.id === productId);
    const deletedProduct = products.splice(productIdx, 1);
    if (deletedProduct) {
      fs.writeFile(
        `${__dirname}/data/product.json`,
        JSON.stringify(products),
        (err) => {
          if (err) {
            res.status(500).send({
              status: "Failed",
              message: "Failed to Delete product",
            });
          } else {
            res.status(200).send({
              status: "success",
              message: "Product Deleted sucessfully",
              data: {
                product: deletedProduct,
              },
            });
          }
        }
      );
    } else {
      res.status(400).send({
        status: "failure",
        message: "Product Not found!",
      });
    }
  } catch (err) {
    res.status(500).send({ status: "failed", message: err.message });
  }
});

const PORT = 4040;
app.listen(PORT, () => {
  console.log(`server is sucessfully running on port : ${PORT}`);
});
