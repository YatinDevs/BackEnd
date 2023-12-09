// In Javascript

/*

-  JavaScript is a dynamic language with dynamic types. 
Variables in JavaScript are not directly associated with any particular
value type, and any variable can be assigned (and re-assigned) 
values of all types:


*/
/*
let foo = 42; // foo is now a number
console.log(typeof foo);
foo = "bar"; // foo is now a string
console.log(typeof foo);
foo = true; // foo is now a boolean
console.log(typeof foo);
*/
/*
JavaScript is also a weakly typed language, which means it allows 
implicit type conversion when an operation involves mismatched types,
instead of throwing type errors.

*/

// const foo = 42; // foo is a number
// const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
// console.log(result); // 421

// There are Primitive Datatype and Reference Datatypes in JS:

// Primitive DatatypeS :
/*
  1. Number
  2. String
  3. Boolean
  4. null
  5. undefined
  6. Symbol
  7. Bigint
*/

/*
  ? Why String have methods if its primitive
  But you might be wondering about strings, because they do have methods.
  The fact is, JavaSvript converts primitive strings to string objects,
  so that it is possible to use string object methods.

*/

/*
  ?  Primitive Datatypes  Stored on a stack :
  When you declare a primitive data type in JavaScript, 
  it is stored on a stack. A stack is a simple data structure 
  that the computer uses to store and retrieve data quickly

*/

/*

 ? Reference data types in JavaScript
  Reference data types, unlike primitive data types, are dynamic in 
  nature. That is, they do not have a fixed size.
  
  Reference Datatypes :
  1. Objects.
  2. Functions.
  3. Collections.
  4. Arrays.
  5. Dates
  - Other types of Objects.
*/
/*
  The difference comes in when the computer has to store a reference 
  data type. When you create a variable and assign it a value that is 
  a reference data type, the computer does not directly store that data
  type in that variable (as is the case with primitive types).
  
 ? we have two data structures now. A stack, and a heap
  - Say we declared an object, for example
  - The object itself is stored on a heap,
  - its pointer is stored on a stack
  - The pointer is identified by the object's variable name,
   and points to that object.


*/

let object1 = {
  name: "Bingeh",
  age: 18,
};
let object2 = object1;

//updating object1,
object1.age = 20;

console.log(object2); //we see that object2 also updates the age attribute

// https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/

// Read Above Article REference type vS PRimitive datatype.
