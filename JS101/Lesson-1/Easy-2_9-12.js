/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
// function stringToInteger(string) {
//   let number = 0;
//   number = (string / 1);
//   return number;
// }


// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

function stringToSignedInteger(string) {
  let arr = string.split("");
  let sum = 0;
  let sign = 1;
  if (string[0] === '-') {
    sign = -1;
  }
  if (string[0] === '-' || string[0] === '+') {
    arr = arr.slice(1);
    console.log(arr);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i].charCodeAt(0) - 48;
    sum += num * (10 ** (arr.length - i - 1));
  }
  console.log(sum * sign);
  return sum * sign;
}

function integerToString(num) {
  let sign = '';
  let numString = '';
  let digit = 0;
  if (num < 0) {
    sign = '-';
  }
  for (let i = 0; i < 100; i++) {
    digit = Math.floor(num / (10 ** i));
    if ()
    let char = String.fromCharCode(digit + 48);
    numString.concat(char);
    num -= (digit * (10 ** i));
  }
  return sign.concat(numString);
}

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

console.log(integerToString(4321));      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890);      // "1234567890"