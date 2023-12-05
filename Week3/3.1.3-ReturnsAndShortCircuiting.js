// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}
//42
// change the function above to return a value

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}

// ? will the following function short circuit?
let height = 50;
function checkCircusRides() {
  return "bummer";
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}

// change the function above to use short circuiting

let greeting;
function weather(name, temp, condition) {
  greeting = `Hello ${name}, it is currently ${temp} degrees and is ${condition}.`;
  return greeting;
}
weather("ben", 43, "windy");
