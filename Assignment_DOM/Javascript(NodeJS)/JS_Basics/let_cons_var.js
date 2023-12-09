// What is Key Difference in Let , Var and Const?

/*
  - Var is Older version and way of Creating a Variable.
  - Let and const  are more strict and newly introduced in ES6.
  Key Difference are in :
  1. declaration.
  2. initialization/re-assign.
  3. scoping.
  4. hoisting.
*/

/*
  1. So in Declaration :
*/

// 1. can redeclare using var :
var a = 10;

console.log(a);

var a = 200;

console.log(a);

// 1. cannot redeclare using let/const :
