/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
// function nestingBird(chars) {
//   // let result = "" + chars;
//   // for (let i = 0; i < chars.length; i++) {
//   //   if (!Array.isArray(chars[i])) {
//   //     result += chars[i];
//   //   } else {
//   //     for (let j = 0; j < chars[i].length; j++) {
//   //       result += chars[i][j];
//   //     }
//   //   }
//   // }

//   return String(chars).replace(/,/g, "");

// }

// function nestingBird(chars) { // array -> string
//   let result = "";
//   for (let char of chars) {
//     if (Array.isArray(char)) {
//       result += nestingBird(char);
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(nestingBird(['r', 'o', ['b', ['i', 'n']]]));
// console.log(nestingBird([['b'], 'l', ['u', ['e', 'j'], 'a', 'y']]));

// String([['b'], 'l', ['u', ['e', 'j'], 'a', 'y']]).replace(/,/g, "");

// function binarySearch(arr, target) {
//   if (arr.length === 0) {
//     return -1;
//   }

//   let middle = Math.floor(arr.length / 2);

//   if (arr[middle] === target) {
//     return middle;
//   } else if (arr[middle] > target) {
//     return binarySearch(arr.slice(0, middle), target);
//   } else if (arr[middle] < target) {
//     let result = binarySearch(arr.slice(middle + 1), target);
//     if (result === -1) {
//       return -1;
//     } else {
//       return result + middle + 1;
//     }
//   }

// }

// function diamond(num) {
//   let mid = Math.ceil(num / 2);
//   for (let row = 1; row <= num; row++) {
//     let spaces = " ".repeat(mid - Math.ceil(row / 2));
//     if (row === 1) {
//       console.log(spaces + "*".repeat(row));
//     } else if (row % 2 === 1) {
//       console.log(spaces + "*".repeat(1) + " ".repeat(row - 2) + "*".repeat(1));
//     }
//   }
//   for (let row = num - 2; row >= 1; row--) {
//     let spaces = " ".repeat(mid - Math.ceil(row / 2));
//     if (row === 1) {
//       console.log(spaces + "*".repeat(row));
//     } else if (row % 2 === 1) {
//       console.log(spaces + "*".repeat(1) + " ".repeat(row - 2) + "*".repeat(1));
//     }
//   }
// }

// function diamond(num) {
//   let mid = Math.ceil(num / 2);
//   for (let row = 1; row <= num; row++) {
//     let spaces = " ".repeat(mid - Math.ceil(row / 2));
//     if (row % 2 === 1) {
//       console.log(spaces + "*".repeat(row));
//     }
//   }
//   for (let row = num - 2; row >= 1; row--) {
//     let spaces = " ".repeat(mid - Math.ceil(row / 2));
//     if (row % 2 === 1) {
//       console.log(spaces + "*".repeat(row));
//     }
//   }
// }

function diamond(max, hollow = true) {
  let mid = Math.ceil(max / 2);
  const rows = [];

  for (let row = max; row >= 1; row -= 2) {
    let spaces = " ".repeat(mid - Math.ceil(row / 2));
    let stars;

    if (hollow && row > 1) {
      stars = "*" + " ".repeat(row - 2) + "*";
    } else {
      stars = "*".repeat(row);
    }

    rows.push(spaces + stars);
    if (row !== max) {
      rows.unshift(spaces + stars);
    }
  }

  console.log(rows.join('\n'));
}

diamond(1);
diamond(3);
diamond(7);
diamond(9);
diamond(15);

// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// let blocks = {
//   B:'O',
//   X:'K',
//   D:'Q',
//   C:'P',
//   N:'A',
//   G:'T',
//   R:'E',
//   F:'S',
//   J:'W',
//   H:'U',
//   V:'I',
//   L:'Y',
//   Z:'M'
// };

// function isBlockWord(word) {
//   let ucWord = word.toUpperCase();

//   for (let i = 0; i < ucWord.length; i++) {
//     if (i !== ucWord.lastIndexOf(ucWord[i])) {
//       return false;
//     }
//     if (blocks[ucWord[i]] && ucWord.includes(blocks[ucWord[i]])) {
//       return false;
//     }
//   }
//   return true;
// }


// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('floW'));       // true
// console.log(isBlockWord('APPLE'));      // false
// console.log(isBlockWord('apple'));      // false
// console.log(isBlockWord('apPLE'));      // false
// console.log(isBlockWord('Box'));        // false