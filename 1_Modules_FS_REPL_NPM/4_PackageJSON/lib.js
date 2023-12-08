// console.log("==============================lib=============================");

const a = 5;

// -------------------------------------------------------------------------------------------------------
// * Old Way to Export Module.
// function sum(a, b) {
//   return a + b;
// }

// exports.sum = sum; // .sum named property assigning sum function to it.

// -------------------------------------------------------------------------------------------------------
exports.sum = (a, b) => {
  return a + b;
};

exports.diff = (a, b) => {
  return a - b;
};

// .sum named property assigning  function to it.
