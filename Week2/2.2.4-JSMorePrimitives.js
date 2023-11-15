// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let number = 5000;
let boolean = false;
let string = "string";
let hello;
let missing = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof hello);
console.log(typeof missing);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let tempLit = `True of False: The Earth is ${number} years old. Answer: ${boolean}.`;
// reassign the value of the variable that references "null"
missing = "Im here!";
// print the value and its type
console.log(missing);
console.log(typeof missing);
// print a variable that causes a ReferenceError
console.log(missing);
// alter the previous line to no longer cause a ReferenceError
