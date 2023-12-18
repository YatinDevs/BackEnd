// ! What is Key Difference in Let , Var and Const?

/*
  - Var is Older version and way of Creating a Variable.
  - Let and const  are more strict and newly introduced in ES6.
  Key Difference are in :
 ? 1. declaration.
 ? 2. initialization/re-assign.
 ? 3. scoping.
 ? 4. hoisting.
*/

// ? 1. So in Declaration :

// * 1. can redeclare using var :

/*
var a;

console.log(a);

var a;

console.log(a);
*/

// * 1. cannot redeclare using let/const :

/*
let b;

console.log(b);

let b;
// Uncaught SyntaxError: Identifier 'a' has already been declared

console.log(b);
*/

// ? 2. initialization

// * 2. In var and let Re-initialization and Re-assign Possible

/*
let a = 10; // initialization
console.log(a);

a = 200; // Re initialization or Re-assign
console.log(a);
*/

// * 2. In const Re-initialization /Re-assignment not Possible.

/*
const a = 10;

a = 200;

console.log(a);
// Uncaught TypeError: Assignment to constant variable.
*/

// ? 3.Scoping

// What is Scope ?
/*
  The Scope is current context of execution in which values and expression
  are visible or can be referenced.

  if any variable or expression are present in current context of execution
  i.e in its scope it will take reference of it
  if not  Scope can also  be layered Hierarchy
  child Scope has Access to parent scope.

  * Global Scope : Default scope for all code running in Script mode.
  * Module Scope : The scope for code running in module mode.
   - Import export of variable and function is Module Scoping
  * Function Scope : The scope created with a function.
  * Block Scope : The Scope created with Block { } curly braces.
*/

// * Var is function scoped
/*

var a = 20;
console.log(a); // 20

{
  var a = 300;
  console.log(a); //20
}
console.log(a); // 300

*/

/*
var a = 20;
console.log(a); // 20

function f1() {
  var a = 300; // Var is function scoped
  console.log(a); //300
}
f1();
console.log(a); // 20
*/

// * let and const are block scoped:
/*
let a = 20;
console.log(a);

{
  let a = 300;
  console.log(a);
}

console.log(a);
*/

// ? 4. hoisting.

/*
   JavaScript Hoisting refers to the process whereby the interpreter
   appears to move the declaration of functions, variables, classes,
   or imports to the top of their scope, prior to execution of the
   code.
*/

// * var declaration is hoisted with type 2 behavior;

/*
console.log(a); // undefined
var a = 100;
console.log(a);
*/

/*
 * let and const are also  hoisted with type 3 behavior;

But they are in Temporal Dead Zone.
Hence Throws Error
Some prefer to see let, const, and class as non-hoisting, 
because the temporal dead zone strictly forbids any use of the 
variable before its declaration.

*/
/*

console.log(b);
// Uncaught ReferenceError: Cannot access 'a' before initialization
const b = 300;
console.log(b);
*/
