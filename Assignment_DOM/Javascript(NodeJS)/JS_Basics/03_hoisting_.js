// ? 4. hoisting.

/*
   JavaScript Hoisting refers to the process whereby the interpreter
   appears to move the declaration of functions, variables, classes,
   or imports to the top of their scope, prior to execution of the
   code.
*/

// ? four function declarations below are hoisted with type 1 behavior;

// * Type 1 - Hoisting with Value:

// Applies to function declarations and import declarations.

f1();

function f1() {
  console.log("I am Hosited");
}

// * Type 2 - Hoisting with Undefined Value:

console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// * var declaration is hoisted with type 2 behavior;

/*
console.log(a); // undefined
var a = 100;
console.log(a);
*/

// * Type 3 - Hoisting with Temporal Dead Zone (TDZ):
/*
- Applies to variable declarations using let, const, and 
class declarations.
- The variable is hoisted, but there's a temporal dead zone where 
accessing the variable results in a ReferenceError.
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

// * Type 4 - Hoisting with Side Effects:

// import "./someModule";
// Side effects of the import may occur before the rest of the code
//  is executed
