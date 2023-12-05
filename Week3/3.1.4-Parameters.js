// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

// invoke the function and pass in two numbers

// invoke the function and pass in more than two numbers

// invoke the function and pass in only one number

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers

function add(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

function subtract(num1 = 2, num2 = 8, ...nums) {
  console.log(num1);
  console.log(num2);
  nums.forEach(num => console.log(num));
}

subtract(3, 5, 6, 32, 3, 1, 4, 5);
