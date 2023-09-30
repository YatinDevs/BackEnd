console.log("====================index=========================");
// Import modules
// Importing lib file
const lib = require("./lib.js");

console.log(lib);

//  fetching functions from lib module with require js modules.

let sum = lib.sum(10, 20);
console.log(sum);

let diff = lib.diff(40, 20);
console.log(diff);
