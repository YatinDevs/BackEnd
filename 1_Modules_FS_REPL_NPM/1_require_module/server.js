//importing math.js module self made.
const math = require("./math");

console.log(math.add(20, 10));
console.log(math.multiply(20, 10));
console.log(math.sub(20, 10));

// or we can destructure functions or  data from modules and then use
// instead of dot notation.

const { divide } = require("./math");

console.log(divide(30, 10));

// This is Custom  Module Handling.
