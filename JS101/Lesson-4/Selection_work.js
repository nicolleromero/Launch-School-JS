/* eslint-disable max-lines-per-function */
// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(produce) {
//   let result = {};
//   for (let key in produce) {
//     if (produce[key] === 'Fruit') {
//       result[key] = 'Fruit';
//     }
//   }
//   return result;
// }

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// function narcissistic(value) {
//   let originalNum = value;
//   if (value < 10) {
//     return true;
//   }
//   let sum = 0;
//   let power = String(value).length;
//   console.log(power);
//   for (let count = power; count > 0; count--) {
//     let num = value % 10;
//     sum += Math.pow(num, power);
//     value = (value - num) / 10;
//     console.log(sum);
//     console.log(value);
//   }
//   console.log(sum);
//   return (sum === originalNum);
// }

// console.log(narcissistic(371));

// function inArray(array1,array2) {
//   let result = [];
//   for (let i = 0; i < array2.length; i++) {
//     let sub = array1[i];
//     for (let j = 0; j < array2.length; j++) {
//       let word = array2[j];
//       if (word.includes(sub) && !result.includes(sub)) {
//         result.push(sub);
//       }
//     }
//   }
//   result.sort();
//   return result;
// }

// let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// let a1 = ["xyz", "live", "strong"];

// console.log(inArray(a1, a2));

function high(x) {
  let arr = x.split(" ");
  let sum = 0;
  let max = 0;
  let winningWord = "";

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    sum = 0;
    for (let j = 0; j < word.length; j++) {
      let code = 0;
      code = (word.charCodeAt(j)) - 96;
      sum += code;
      if (sum > max) {
        max = sum;
        winningWord = word;
      }
    }
  }
  return winningWord;
}

console.log(high('man i need a taxi up to ubud'));