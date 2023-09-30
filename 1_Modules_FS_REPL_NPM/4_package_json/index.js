const lib = require("../1_require_module/lib.js");

// Express module
const express = require("express");

console.log("hello world");

// creating server
const server = express();
server.listen(8080);
