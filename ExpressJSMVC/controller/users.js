const fs = require("fs");
// fetch JSON data present in folder using FS module
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// console.log(data.products);
const users = data.users;

// functions CRUD :

exports.createUsers = (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUser = (req, res) => {
  //   console.log(parseInt(req.params.id));
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.status(200).json(user);
};

exports.replaceUser = (req, res) => {
  const id = parseInt(req.params.id);
  const usersIdx = users.findIndex((user) => user.id === id);
  users.splice(usersIdx, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const usersIdx = users.findIndex((user) => user.id === id);
  const user = users[usersIdx];
  users.splice(usersIdx, 1, { ...user, ...req.body });
  res.status(201).json();
};
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const usersIdx = users.findIndex((user) => user.id === id);
  const userspopped = users[usersIdx];
  users.splice(usersIdx, 1);
  res.status(200).json(userspopped);
};
