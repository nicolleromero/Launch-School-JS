// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// function makeObj(arr) {
//   let newObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i];
//     newObj[name] = i;
//   }
//   return newObj;
// }

// console.log(makeObj(flintstones));

// let flintstonesObj = {};

// flintstones.forEach((name, index) => {
//   flintstonesObj[name] = index;
// });

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// function sumUp(obj) {
//   let sum = 0;
//   Object.values(ages).forEach(age => sum += age);
//   return sum;
// }

// console.log(sumUp(ages));

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// function minAge(obj) {
//   let arr = Object.values(obj);
//   return Math.min(...arr);
// }

// console.log(minAge(ages));

let statement = "The Flintstones Rock";
//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

function findFrequency(string) {
  let arr = string.split("");
  let results = {};

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = 1;
      } else {
        results[letter]++;
      }
    }
  }
  return results;
}

console.log(findFrequency(statement));

let result = ['a', 'b', 'c'].filter(function(item) {
  console.log(item);
});