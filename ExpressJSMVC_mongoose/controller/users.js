const fs = require("fs");

// data from JSON file :
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
// console.log(products);

// functions CRUD :

// Create POST -> /products
exports.create = (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body); // created 201 or 200 OK
};

// Read GET -> /products
exports.getAllData = (req, res) => {
  res.status(200).json(users);
};

// Read GET -> /products/:id
exports.getData = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.status(200).json(user);
};

// update PUT -> /products/:id --> overrides previous data
exports.replaceData = (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  const userReplaced = users[userIndex];
  users.splice(userIndex, 1, { id: id, ...req.body });
  res.status(201).json();
};

// update PATCH -> /products/:id --> overwrites previous data
exports.updateData = (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((prd) => prd.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(202).json(); // updated async 202 Accepted or 200 OK
};

// delete DELETE -> /products/:id
exports.deleteData = (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.find((user) => user.id === id);
  const userPopped = users[userIndex];
  users.splice(userIndex, 1);
  res.status(200).json(userPopped); // deleted async 202 Accepted or 200 OK
};
