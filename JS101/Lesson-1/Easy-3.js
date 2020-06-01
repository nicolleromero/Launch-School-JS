
// function crunch(str) {
//   if (str === '') {
//     return str;
//   }
//   let newStr = str[0];

//   for (let i = 1; i < str.length; i++) {
//     if (str.charAt(i) !== str.charAt(i - 1)) {
//       newStr += str.charAt(i);
//     }
//   }
//   console.log(newStr);
//   return newStr;
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// function logInBox(message) {
//   let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
//   let emptyLine = `|${" ".repeat(message.length + 2)}|`;

//   console.log(horizontalRule, `\n`, emptyLine, `\n`, `| ${message} |\n`, emptyLine, `\n`, horizontalRule);
// }

// console.log(logInBox('To boldly go where no one has gone before.'));

// function stringy(size) {
//   let result = '10'.repeat(size / 2);
//   if (size % 2 === 0) {
//     return result;
//   } else {
//     result += '1';
//     return result;
//   }
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// function findFibonacciIndexByLength(length) {
//   let first = 1;
//   let second = 1;
//   let index = 2;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     index += 1;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return index;
// }

// // (1, 1, 2, 3, 5, 8, 13, 21, ...)
// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

function cleanUp(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (/[a-z]/i.test(str[i])) {
      newStr = str[i] + newStr;
    } else {
      newStr = " " + newStr;
    }
    newStr = newStr.replace(/\s+/gi, " ");
  }
  return newStr;
}

// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "