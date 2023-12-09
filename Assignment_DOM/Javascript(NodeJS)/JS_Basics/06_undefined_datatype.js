
// ##############  Undefined ##################

/*
#
      A variable that has not been assigned a value is 
of type undefined . A method or statement also returns 
undefined if the variable that is being evaluated does 
not have an assigned value. 
A function returns undefined if a value was not returned .


 # What is undefined data type in JavaScript?

    A variable in JavaScript that is without any value has a
value of undefined. The datatype of a variable that holds 
an undefined value is also 'undefined'. 
*/


// in case of var

var firstName;
console.log(typeof firstName);

//-- Extra
firstName = "Yatin";
console.log( typeof firstName,firstName);


// in case of let

let first;
console.log(typeof first);


// in case of const

// const first_Name; // (invalid)
// error -- > missing initializer in const declaration
// we need to initialize it in case of const.
console.log(typeof first_Name);




