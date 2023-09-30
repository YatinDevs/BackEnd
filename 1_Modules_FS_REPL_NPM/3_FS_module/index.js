// To check time span peformance of File
const t1 = performance.now();

// Import modules
// Importing lib file
const lib = require("../1_require_module/lib.js");

/* #################################################################  */

// file system module fetched
const fs = require("fs");

/* #################################################################  */

/*

// # fs.readFileSync(path[, options])

// read the file
const txt = fs.readFileSync("demo.txt", "utf-8");
console.log(txt);

*/

/* #################################################################  */

// # fs.readFile(path[, options], callback)

/*
fs.readFile("demo.txt", "utf-8", (err, txt) => {
  console.log(txt);
});

//  fetching functions from lib module with require js modules.
let sum = lib.sum(10, 20);
console.log(sum);

let diff = lib.diff(40, 20);
console.log(diff);

*/
/* #################################################################  */
// To check time span peformance of File
const t2 = performance.now();

console.log(t2 - t1);
