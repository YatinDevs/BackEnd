// fetching functions from lib1 module with ecmaScript  export module

import { sum, diff } from "./lib1.js";

let res1 = sum(10, 20);
console.log(res1);

let res2 = diff(40, 20);
console.log(res2);
// Enabling ES Modules in Package.json --> to Run this file
