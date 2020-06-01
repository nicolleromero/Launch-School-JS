/* eslint-disable max-lines-per-function */
// Write a function that takes one integer argument, which may be positive, negative, or zero.
// This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// function isOdd(num) {
//   return (Math.abs(num) % 2 !== 0);
// }


// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// function logNums() {
//   for (let num = 1; num <= 99; num++) {
//     console.log(num);
//   }
// }

// logNums();



// // Note: 1 square meter == 10.7639 square feet
// let readlineSync = require("readline-sync");

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = (length * width).toFixed(2);

// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);

// console.log(
//   `The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`
// );

// function multisum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }


// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// function transpose(mat) {
//   let arr = [[], [], []];

//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       arr[i].push(mat[j][i]);
//     }
//   }
//   return arr;
// }

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1]
// ];

// function transpose(mat) {
//   let newMatrix = [];
//   for (let dimArr = 0; dimArr < mat[0].length; dimArr++) {
//     newMatrix.push([]);
//   }
//   for (let i = 0; i < mat.length; i++) { //rows
//     for (let j = 0; j < mat[i].length; j++) { //columns
//       newMatrix[j].push(mat[i][j]);
//     }
//   }
//   return newMatrix;
// }

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                     // [[1]]

// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// function rotate90(matrix) {
//   let rotated = [];
//   let newRowsCount = matrix[0].length;

//   for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
//     rotated.push([]);
//   }

//   for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
//     for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
//       rotated[colIdx].push(matrix[rowIdx][colIdx]);
//     }
//   }

//   for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
//     rotated[rowIdx].reverse();
//   }

//   return rotated;
// }

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// function merge(arr1, arr2) {
//   let result = [];
//   let newArr = [...arr1, ...arr2];
//   let max = newArr.length;

//   while (result.length < max) {
//     let min = Math.min(...newArr);
//     let index = newArr.indexOf(min);
//     result.push(newArr[index]);
//     newArr.splice(index, 1);
//   }

//   return result;
// }


// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// function letterPercentages(str) {
//   let divisor = str.length;
//   let lcSum = 0;
//   let ucSum = 0;
//   let neitherSum = 0;

//   for (let i = 0; i < str.length; i++) {
//     if ((/[a-z]/g).test(str[i])) {
//       lcSum += 1;
//     } else if ((/[A-Z]/g).test(str[i])) {
//       ucSum += 1;
//     } else {
//       neitherSum += 1;
//     }
//   }
//   return {
//     lowercase: String((lcSum / divisor * 100).toFixed(2)),
//     uppercase: String((ucSum / divisor * 100).toFixed(2)),
//     neither: String((neitherSum / divisor * 100).toFixed(2)),
//   };
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// function triangle(num1, num2, num3) {
//   if (num1 < 1 || num2 < 1 || num3 < 1) {
//     return "invalid";
//   }

//   let arr = [num1, num2, num3].sort((a, b) => (a - b));
//   if (arr[0] + arr[1] < arr[2]) {
//     return "invalid";
//   }
//   if (num1 === num2 && num2 === num3) {
//     return "equilateral";
//   } else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
//     return "scalene";
//   } else {
//     return "isosceles";
//   }

// }

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

// function fridayThe13ths(year) {

// }

// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// function union(arr1, arr2) {
//   let newArr = [...arr1, ...arr2];
//   let result = [];
//   for (let i = 0; i < newArr.length; i++) {
//     if (!result.includes(newArr[i])) {
//       result.push(newArr[i]);
//     }
//   }
//   return result;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


// function halvsies(arr) {
//   let halfIdx = [];
//   let arr1 = [];
//   let arr2 = [];

//   if (arr.length === 0) {
//     return [[],[]];
//   }
//   if (arr.length % 2 === 0) {
//     halfIdx = arr.length / 2;
//     arr1 = arr.slice(0, halfIdx);
//     arr2 = arr.slice(halfIdx);
//   } else {
//     halfIdx = Math.floor(arr.length / 2);
//     arr1 = arr.slice(0, halfIdx + 1);
//     arr2 = arr.slice(halfIdx + 1);
//   }
//   return [arr1, arr2];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]


// function findDup(arr) {

//   for (let num of arr) {
//     if (arr.indexOf(num) !== arr.lastIndexOf(num)) {
//       return num;
//     }
//   }
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//   38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//   14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//   78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//   89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//   41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//   55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//   85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//   40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// function interleave(arr1, arr2) {
//   let newArr = [];
//   let combined = [...arr1, ...arr2];

//   for (let i = 0; i < combined.length / 2; i++) {
//     newArr.push(arr1[i]);
//     newArr.push(arr2[i]);
//   }
//   return newArr;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// function multiplicativeAverage(arr) {
//   let sum = 1;
//   for (let num of arr) {
//     sum *= num;
//   }
//   return String((sum / arr.length).toFixed(3));
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// function multiplyList(arr1, arr2) {

//   return arr1.map((num, idx) => num * arr2[idx]);

// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// function digitList(num) {
//   let arr = String(num).split("");
//   return arr.map((element) => Number(element));
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]


// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//   'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

// function countOccurrences(arr) {
//   let sortedArr = arr.map((word) => word.toLowerCase()).sort();
//   console.log(sortedArr);
//   let index = 0;
//   while (index < sortedArr.length) {
//     let word = sortedArr[index];
//     let start = sortedArr.indexOf(word);
//     let end = sortedArr.lastIndexOf(word);
//     let count = end - start + 1;

//     console.log(`${word} => ${count}`);
//     index = end + 1;
//   }
// }

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// function average(arr) {
//   return Math.floor(arr.reduce((sum, num) => sum + num) / arr.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40


// function binarySearch(arr, target) {
//   if (arr.length === 0) {
//     return -1;
//   }

//   let middle = Math.floor(arr.length / 2);

//   if (arr[middle] === target) {
//     return middle;
//   } else if (arr[middle] > target) {
//     let result = binarySearch(arr.slice(0, middle), target);
//     if (result === -1) {
//       return -1;
//     } else {
//       return result;
//     }
//   } else if (arr[middle] < target) {
//     let result = binarySearch(arr.slice(middle + 1), target);
//     if (result === -1) {
//       return -1;
//     } else {
//       return result + middle + 1;
//     }
//   }

// }

// console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3


// let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

// function average(nums) {
//   let sum = nums.reduce((total, num) => total + num);

//   return sum / nums.length;
// }

// function median(nums) {
//   let median;
//   let length = nums.length;

//   nums.sort((a, b) => a - b);

//   if (length % 2 === 0) {
//     median = average([nums[(length / 2) - 1], nums[length / 2]]);
//   } else {
//     median = nums[Math.floor(length / 2)];
//   }

//   return median;
// }

// // Tests

// let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
// let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
// let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
// let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// // should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

// console.log(median(quarter1ExamScores) === 89.5);
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
// console.log(median(quarter4ExamScores) === 89.5);


// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(word, textBlock) {
//   let regex = new RegExp(`\\b${word}\\b`, 'gi');
//   let matches = textBlock.match(regex);

//   if (matches) {
//     return matches.length;
//   } else {
//     return 0;
//   }
// }

// console.log(searchWord('sed', text));      // 3

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// function searchWord(target, text) {
//   let arr = text.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     console.log(word.toUpperCase(), target.toUpperCase());
//     if (word.toUpperCase() === target.toUpperCase()) {
//       console.log(`getting here?`);
//       arr[i] = highlight(word);
//     }
//   }
//   return arr.join();
// }

// function highlight(word) {
//   console.log(`how about here?`);
//   return "**" + word.toUpperCase() + "**";
// }


// console.log(searchWord('sed', text));

// function staggeredCase(str) {
//   let arr = str.split("");
//   let lastIdx = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let regex = new RegExp(/[a-zA-Z]/);
//     if (regex.test(arr[i])) {
//       if (arr[lastIdx] !== arr[lastIdx].toUpperCase() || i === 0) {
//         arr[i] = arr[i].toUpperCase();
//         lastIdx = i;
//       } else {
//         arr[i] = arr[i].toLowerCase();
//         lastIdx = i;
//       }
//     }
//   }

//   return arr.join("");

// }


// console.log(staggeredCase("I Love Launch School!"));
// console.log(staggeredCase("ALL CAPS"));
// console.log(staggeredCase("ignore 77 the 444 numbers"));

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// function removeVowels(arr) {
//   let newArr = arr.slice();
//   let vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < newArr.length; i++) {
//     let word = newArr[i];
//     for (let j = 0; j < word.length; j++) {
//       if (vowels.includes(word[j].toLowerCase())) {
//         word = word.slice(0, j) + word.slice(j + 1);
//         j--;
//       }
//     }
//     newArr[i] = word;
//   }

//   return newArr;
// }

// function removeVowels(arr) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];

//   return arr.map((word) => {
//     return word.split("").filter((char) => {
//       return !vowels.includes(char.toLowerCase());
//     }).join("");
//   });
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// function letterCaseCount(str) {
//   let arr = str.split("");

//   let lcSum = arr.reduce((sum, char) => {
//     if (char.match(/[a-z]/)) {
//       sum += 1;
//     }
//     return sum;
//   }, 0);

//   let ucSum = arr.reduce((sum, char) => {
//     if (char.match(/[A-Z]/)) {
//       sum += 1;
//     }
//     return sum;
//   }, 0);

//   let otherSum = str.length - lcSum - ucSum;


//   return { lowercase: lcSum, uppercase: ucSum, neither: otherSum };
// }


// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


// function wordCap(str) {
//   let arr = str.split(" ");

//   let result = arr.map((word) => {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   });
//   return result.join(" ");
// }

// function initialCap(word) {
//   let arr = word.split("");
//   return arr.map((char, i) => {
//     if (i === 0) {
//       return char.toUpperCase();
//     } else {
//       return char.toLowerCase();
//     }
//   }).join("");
// }


// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// function nthSwap(str, nth) {
//   let arr = str.split("");
//   if (str === "" || nth === 0) {
//     return str;
//   }

//   for (let i = 0; i < arr.length; i += nth) {
//     if (arr[i].match(/[a-z]/g)) {
//       arr[i] = arr[i].toUpperCase();
//     } else {
//       arr[i] = arr[i].toLowerCase();
//     }
//   }
//   return arr.join("");

// }

// console.log(nthSwap("hello there!", 3));
// console.log(nthSwap("", 3));
// console.log(nthSwap("hello there!", 0));

// Swap the capitalization of every “nth” letter of a string

// // input => string and num
// // return => a new string
// // Examples? "hello there!", 3 => outputs "HelLo tHerE!"
// // Edge cases? enter 0 for nth? enter empty string?
// // Data Structure: convert string to array to mutate chars, then rejoin
// // algorithm: loop, incrament index by nth, check for case, convert to opposite, join array then return


// Shift all the vowels in a string N letters later in the alphabet
// inputs => string, num
// output => new string
// Examples? "hello there!" num is 1
// Edge cases? num is 0, string is empty, new letter is past 'z'?
// Data structure? convert to array so we can use array methods
// Algorithm: convert to array or chars, iterate over chars, look for vowels, if vowel convert to new letter (UTF16?)


// function shiftVowels(str, num) {

//   for (let i = 0; i < str.length; i++) {
//     let currentLetterCode = str.charCodeAt(i);
//     if (str[i].match(/[aeiouAEIOU]/)) {
//       console.log(str[i]);
//       console.log(currentLetterCode);
//       let newLetter = String.fromCharCode(currentLetterCode + num);
//       console.log(newLetter);
//       str = str.slice(0, i) + newLetter + str.slice(i + 1);
//       console.log(str);
//     }
//   }
//   return str;
// }

// console.log(shiftVowels("cat", 2)); // "cct"
// console.log(shiftVowels("oooLALA", 1)); // "pppLBLB"
// console.log(shiftVowels("uooLALA", 8)); // "pppLBLB"


// Remove all non-letter characters from a string
// Reverse a string using only the reduce method

// function palindromes(str) {
//   if (str.length === 0) {
//     return [];
//   }
//   let newArr = [];
//   let arr = str.split("");
//   for (let startIdx = 0; startIdx < arr.length; startIdx++) {
//     for (let endIdx = startIdx + 1; endIdx <= arr.length; endIdx++) {
//       let word = arr.slice(startIdx, endIdx).join("");
//       let reverseWord = arr.slice(startIdx, endIdx).reverse().join("");
//       if (word === reverseWord && word.length > 1) {
//         newArr.push(word);
//       }
//     }
//   }

//   return newArr;
// }


// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// function sumOfSums(numArr) {
//   return numArr.map((num, i) => num * (numArr.length - i))
//     .reduce((sum, num) => sum + num);
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35