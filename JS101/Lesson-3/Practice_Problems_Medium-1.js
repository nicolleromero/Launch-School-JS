/* eslint-disable max-lines-per-function */

// let string = "The Flintstones Rock!";

// for (let i = 0; i <= 10; i++) {
//   let line = string.padStart(i + string.length);
//   console.log(line);
// }

// let munstersDescription = "The Munsters are creepy and spooky.";

// function changeCase(string) {
//   let newString = '';
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i).toUpperCase() !== string.charAt(i)) {
//       newString += string.charAt(i).toUpperCase();
//     } else {
//       newString += string.charAt(i).toLowerCase();
//     }
//   }
//   return newString;
// }

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (divisor <= 0) {
//       return 0;
//     }
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// console.log(factors(0));
// console.log(factors(30));
// console.log(factors(-15));

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  let oldBuffer = buffer;
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  console.log(oldBuffer);
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  let oldBuffer = buffer;
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  console.log(oldBuffer);
  return buffer;
}

console.log(addToRollingBuffer1([1, 2, 3, 4, 5], 3, 6));
console.log(addToRollingBuffer2([1, 2, 3, 4, 5], 3, 6));