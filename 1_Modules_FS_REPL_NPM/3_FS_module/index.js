// To check time span peformance of File
const t1 = performance.now();

// Import modules
// Importing lib file
const lib = require("../1_require_module/lib.js");

/* #################################################################  */

// file system module fetched
// To use the promise-based APIs:
// const fs = require("node:fs/promises");

// To use the callback and sync APIs:
const fs = require("node:fs");
/* #################################################################  */

// # fs.readFileSync(path, [options])
// https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options

// read the file
const txt = fs.readFileSync("demo.txt", "utf-8");
console.log(txt);

/* #################################################################  */

// # fs.readFile(path[, options], callback)
// callback (err,data)=>{}
// fs.readFile("demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

//  fetching functions from lib module with require js modules.
let sum = lib.sum(10, 20);
console.log(sum);

let diff = lib.diff(40, 20);
console.log(diff);

/* #################################################################  */
// To check time span peformance of File
const t2 = performance.now();

console.log(t2 - t1);
