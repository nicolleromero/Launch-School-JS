/* eslint-disable no-confusing-arrow */

// function negative(num) {
//   if (num <= 0) {
//     return num;
//   } else {
//     return -num;
//   }
// }

// function negative(number) {
//   return Math.abs(number) * -1;
// }

const negative = (num) => num >= 0 ? -Math.abs(num) : num;


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0