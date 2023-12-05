const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
console.log(nums);
const item1 = nums.pop();
const item2 = nums.pop();
console.log(`Item 1: ${item1}, Item 2: ${item2}, The Array after: ${nums}`);
// remove each of the first two items with shift(), saving each item to a variable
const item3 = nums.shift();
const item4 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
console.log(`Item 3: ${item3}, Item 4: ${item4}`);
console.log(nums);
nums.unshift(item2);
nums.push(item4, item3);
console.log(nums);
