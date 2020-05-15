// let myNumbers = [1, 4, 3, 7, 2, 6];

// myNumbers;                // => [1, 4, 3, 7, 2, 6]

// function doubleNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       arr[i] *= 2;
//     }
//   }
//   return arr;
// }

// for odd indices only

// function doubleOddIndecesNumbers(arr) {
//   for (let i = 1; i < arr.length; i += 2) {
//     arr[i] *= 2;
//   }
//   return arr;
// }

// console.log(doubleOddIndecesNumbers(myNumbers));

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i] * n;
    newArr.push(num);
  }
  return newArr;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]