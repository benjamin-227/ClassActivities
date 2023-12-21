/*
Team 5
Write a function that determines if a string in a palindrome. A palindrome is a string that is the same forward and backwards.

Examples:
isPalindrome('racecar') // --> true
isPalindrome('table') // --> false

input: string
output: boolean

1. What should happen if the string provided has capital letters?
2. Single string?
3. What about if the string has spaces?
4. return the boolean or log to console?

enter string
  convert the input string to lowercase
  turn string into an array
  reverse the array and save to new variable
  join the array to convert back to string
  compare variable 1 to variable 2
  log to console the resulting boolean
*/

function isPalindrome(word) {
  if (typeof word !== "string") {
    return console.log(`${word} is not a string!`);
  }
  const pal1 = word.toLowerCase();
  const pal1Array = pal1.split("");
  const reversedArray = pal1Array.reverse();
  const reversedWord = reversedArray.join("");
  if (reversedWord === pal1) {
    console.log(`${pal1}: True`);
  } else {
    console.log(`${pal1}: False`);
  }
}

// isPalindrome("dog");
// isPalindrome("racecar");
// isPalindrome("table");
// isPalindrome("kayak");
// isPalindrome("civic");
// isPalindrome("noon");
// isPalindrome("Racecar");
// isPalindrome(1);

//isPalindrome including strings with spaces

function isPalandromeWithSpaces(word) {
  if (typeof word !== "string") {
    return console.log(`${word} is not a string!`);
  }
  let pal1 = word.toLowerCase();
  let pal2 = pal1.replace(/\s/g, "");
  const pal2Array = pal2.split("");
  const reversedArray = pal2Array.reverse();
  const reversedWord = reversedArray.join("");
  if (reversedWord === pal2) {
    console.log(`${pal1}: True`);
  } else {
    console.log(`${pal1}: False`);
  }
}

// isPalandromeWithSpaces("race car");
// isPalandromeWithSpaces("noon");
// isPalandromeWithSpaces("Racecar");
// isPalandromeWithSpaces(1);

function avgTestScores(name, ...args) {
  const argsArray = [...args];
  const numbers = [];
  const arrayOfNumbers = argsArray.filter(input => {
    if (typeof input === "number") {
      numbers.push(input);
    }
  });
  let avg = numbers.reduce((score, total) => score + total) / numbers.length;
  console.log(`${name} took ${numbers.length}, tests, earning these scores: ${numbers.join(', ')}`)
  console.log(`That's an average score of ${avg}`);
}

avgTestScores("ben", 8, 5, 3, 2);
