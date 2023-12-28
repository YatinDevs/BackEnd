// https://excalidraw.com/#json=TfIGlD8eAq1M1TnuT2Rdw,rN3r-kjFc23jevT5EC6rOA

const fs = require("fs");
const express = require("express"); // npm i express
// > 5. Third-party Middleware :--------------------*
const morgan = require("morgan"); // npm i morgan
// create server with express
const server = express();

// 5.
// server.use(morgan("default"));
// server.use(morgan("dev"));

// > 4. Built-in Middleware :
// -  req.body will be readable now which was JSON type .
// 1. bodyParser - previous we use to do
server.use(express.json());
// 2. urlendcoded
// server.use(express.urlencoded());
// 3. static hosting.
// helps to declare static html page which we declared in public folder -> named index.html
// any thing in public static folder  --> we can fetch with -> /index.html -> i.e file name
// directly
server.use(express.static("public"));

// Data fetch
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// Case 3 :  Middleware :

// Types MiddleWare :
// 1. Application Level Middleware
// 2. Router Level Middleware
// 3. Error-handling Middleware
// 4. Built-in Middleware
// 5. Third-party Middleware

// - Execute any Code.
// - Make changes to req and the res objects
// - end the req-res cycle.
// - call the next middleware in the stack.

// >  1. Application Level Middleware :
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-Agent")
  );
  next();
});

// >  2. Router Level Middleware :

// With Req.query :
// const auth = (req, res, next) => {
//   console.log(req.query);
//   if (req.query.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401); // unauthorized status code - 401 error
//   }
// };
// server.use(auth); // - whole app

// > Built-in MiddleWare -> used in line 9 -> server.use(express.json());
// With Req.body -  req.body will be readable now which was JSON type .

const auth = (req, res, next) => {
  console.log(req.body);
  if (req.body.password == "1234") {
    next();
  } else {
    res.sendStatus(401); // unauthorized status code - 401 error
  }
};
//  Case 2:  API - ENDPOINTS - Route

// API ROOT, BASE Url ,example - google.com/api/v2 --> ahead -> params
//! Start Products -> Resource - REST APIs   C R U D
// REST API type :

// Create POST /products
server.post("/products", (req, res) => {
  console.log(req.body); // use built in body parser to fetch
  products.push(req.body);
  res.status(201).json(req.body);
});

// READ GET /products
server.get("/products", (req, res) => {
  console.log("get products");
  res.json(products);
});
// READ GET /products/:id -> Find Data in URL params
server.get("/products/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  console.log(typeof id);
  const product = products.find((product) => product.id == id);
  res.json(product);
});

// UPDATE PUT /products/:id -> Find Data in URL params
server.put("/products/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  console.log(typeof id);
  const productIndex = products.findIndex((product) => product.id == id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});
// update i.e put overrides previous data

// UPDATE PATCH /products/:id -> Find Data in URL params
server.patch("/products/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  console.log(typeof id);
  const productIndex = products.findIndex((product) => product.id == id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

// Delete DELETE /products/:id -> Find Data in URL params
server.delete("/products/:id", (req, res) => {
  console.log(req.params);

  const id = parseInt(req.params.id);
  console.log(typeof id);
  const productIndex = products.findIndex((product) => product.id == id);
  const deletedProduct = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(deletedProduct);
});

// auth middleware for particular path
server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});

// url parameter
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

// Case 1 : code here : API
server.get("/demo", (req, res) => {
  console.log("home");

  // Responses we can send :
  //   res.status(201).send("<h1>Hello</h1>");
  //   res.sendStatus(404);
  //   res.json(products);
  //   res.send("<h1>Welcome</h1>");
  //   res.sendFile("E:/BackEnd/ExpressJS/index.html");
});

// as convention listener should be at end
server.listen(8080, () => {
  console.log("server started");
});

/// 3 Ways of sending data :
/*
  req.query
  req.body
  req.params
  
*/
