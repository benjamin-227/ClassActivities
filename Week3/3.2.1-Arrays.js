// create an Array using an Array literal
const animals = ["cat", "dog", "bird", "turtle", "monkey"];
// access the 1st item in the Array
const animal1 = animals[0];
console.log(animal1);
// access the last item in the Array
const animal5 = animals[4];
console.log(animal5);
// print the length of the Array
console.log(animals.length);
// use the length property to access the last item in the Array
const lastAnimal = animals[animals.length - 1];
console.log(lastAnimal);
// with for...of, loop over the Array, modify the value and add to a different Array

let animalCall = [];
for (const animal of animals) {
  animalCall.push(`${animal}YYeeeeeYeeeeYeee`);
}

console.log(animals);
console.log(animalCall);
