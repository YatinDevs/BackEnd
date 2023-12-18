/*
<MDN >
      A callback function is a function passed into another
function as an argument, which is then invoked inside
the outer function to complete some kind of routine 
or action.
*/

/*

There are two ways in which the callback may be called:
- synchronous and asynchronous. 
 
- Synchronous callbacks : are called immediately after the
invocation of the outer function, with no intervening
asynchronous tasks.

- asynchronous callbacks are called at some point later,
after an asynchronous operation has completed.

*/
// Synchronous Callback function

/*
- Synchronous callbacks are typically used in scenarios 
  where the result can be obtained immediately without 
  blocking the execution.

*/

// Case 1 : Basic Synchronous Callback :
function func1(name, callback) {
  console.log("Higher Order function Executed : ", name);
  callback();
}

function sayHi() {
  console.log("Hi Iam firstClass Func");
}

// func1("Yatin", sayHi);

// Case 2 : Synchronous Callback with Parameters:

function calc(callback, a, b) {
  const ans = callback(a, b);
  console.log(ans);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// calc(add, 30, 20);
// calc(sub, 30, 20);

// Case 3 : Synchronous Callback and Closure:

function outerFunc(callback) {
  const outer1 = "Im outer variable1";
  const outer2 = "Im outer variable2";
  callback();
  function innerfunc() {
    console.log(outer1, outer2);
  }
  innerfunc();
}

// outerFunc(() => {
//   console.log("Callback Executed");
// });

function calc(callback, a, b) {
  return callback(a, b);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const ans1 = calc(sub, 30, 20);
const ans2 = calc(add, 30, 20);

// console.log(ans1);
// console.log(ans2);
