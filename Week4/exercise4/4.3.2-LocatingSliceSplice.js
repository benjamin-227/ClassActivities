const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const aIndex = arr.indexOf("a");
const bIndex = arr.indexOf("b");
const cIndex = arr.indexOf("c");

console.log(aIndex, bIndex, cIndex);
// find the last index of "a", "b", and "c"
const lastA = arr.lastIndexOf("a");
const lastB = arr.lastIndexOf("b");
const lastC = arr.lastIndexOf("c");
console.log(lastA, lastB, lastC);
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let firstIsLast = false;
while (!firstIsLast) {
  let firstA = arr.indexOf("a");
  let lastA = arr.lastIndexOf("a");
  firstIsLast = firstA === lastA;
  if (!firstIsLast) {
  }
}
console.log(arr);
