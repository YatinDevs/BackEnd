// https://github.com/atapas/promise-interview-ready/blob/main/src/tasks/readme.md

function f1() {
  console.log("f1");
}

console.log("Let's do it!");

setTimeout(function () {
  console.log("in settimeout");
}, 0);

f1();
f1();
f1();
f1();

// Call Stack :

// console.log
// from callback queue function comes FEC
// Event loop check stack empty now
/*
happens for every f1 call
 {FEC removed
 console.log
 FEC f1}
*/
// settimeout removed
// settimeout ----> handling callback goes ---> Web API
// console.log

// output : lets do it f1 f1 f1 f1 in settimeout

/*
  Statements :
  JS is Single Threaded
  By Default JS is a Synchronous Programming language.

*/

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

function f4() {
  console.log("f4");
}

console.log("Let's do it!");

setTimeout(function () {
  f1();
}, 0);

f4();

setTimeout(function () {
  f2();
}, 5000);

setTimeout(function () {
  f3();
}, 3000);

// output :
// Lets do it f4 f1 f3 f2
