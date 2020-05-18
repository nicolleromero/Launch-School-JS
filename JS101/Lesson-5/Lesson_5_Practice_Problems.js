//Lesson 5

// Question 1

// let arr = ['10', '11', '9', '7', '8'];

// console.log(arr.sort((a, b) => Number(b) - Number(a)));

// Question 2

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// console.log(books.sort((a, b) => {
//   return Number(a['published']) - Number(b['published']);
// }));

// Question 3

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

// arr1[[2][1][3];
// arr2[1]['third'][0];
// arr3[2]['third'][0[0]];
// obj1['b'][1];
// Object.keys(obj2['third'])[0];

// Question 4

// let arr1 = [1, [2, 3], 4];

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// let obj1 = { first: [1, 2, [3]] };

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

// arr1[1][1] = 4;
// arr2[2] = 4;
// obj1['first'][2][0] = 4;
// obj2['a']['a'][2] = 4;

// Question 5

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// function sumMaleAge(munsters) {
//   let sum = 0;
//   for (let person in munsters) {
//     if (munsters[person]['gender'] === 'male') {
//       sum += munsters[person]['age'];
//     }
//   }
//   return sum;
// }

// // console.log(sumMaleAge(munsters));

// function printMember(munsters) {
//   let info = Object.entries(munsters);
//   for (let person of info) {
//     console.log(`${person[0]} is a ${person[1]['age']}-year-old ${person[1]['gender']}.`);
//   }
// }

// console.log(printMember(munsters));

// for (let name in munsters) {
//   console.log(`${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}.`);
// }

// Question 6

// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2;
// arr[1][0] -= a;

// Question 8

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split("").forEach(char => {
//       if (/[aeiou]/.test(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

// Question 9

// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


// let newArr = arr.map(set => {
//   if (typeof set[0] === 'string') {
//     return set.slice().sort();
//   } else {
//     return set.slice().sort((a, b) => a - b);
//   }
// });

// console.log(newArr);

// Question 10

// let newArr = arr.map(set => {
//   if (typeof set[0] === 'string') {
//     return set.slice().sort().reverse();
//   } else {
//     return set.slice().sort((a, b) => b - a);
//   }
// });

// console.log(newArr);

// Question 11

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let newArr = arr.map(obj => {
//   let temp = {};
//   for (let key in obj) {
//     temp[key] = obj[key] + 1;
//   }
//   return temp;
// });

// console.log(newArr);

// Question 12

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let newArr = arr.map(subArray => {
//   return subArray.filter(num => num % 3 === 0);
// });

// console.log(newArr);

// Question 13

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// function sumOddsOrder(arr) {
//   let newArr = arr.slice().sort((a, b) => {
//     let oddSumA = a.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);
//     let oddSumB = b.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);
//     return oddSumA - oddSumB;
//   });
//   return newArr;
// }

// console.log(sumOddsOrder(arr));

// Question 14

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// Object.values(obj).map(info => {
//   if (info['type'] === 'fruit') {
//     return info['colors'].map(char => capitalize(char));
//   } else {
//     return info['size'].toUpperCase();
//   }
// });

// console.log(Object.values(obj));


// [ { type: 'fruit', colors: [ 'red', 'green' ], size: 'small' },
//   { type: 'vegetable', colors: [ 'orange' ], size: 'medium' },
//   { type: 'fruit', colors: [ 'red', 'green' ], size: 'medium' },
//   { type: 'fruit', colors: [ 'orange' ], size: 'medium' },
//   { type: 'vegetable', colors: [ 'green' ], size: 'large' } ]

// Question 15

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });

// Question 16
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// let obj = {};
// arr.forEach(subArray => {
//   let key = subArray[0];
//   let value = subArray[1];

//   obj[key] = value;
// });

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// Question 17

function makeUUID() {
  let set = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let UUID = "";
  for (let num = 0; num < 36; num++) {
    if (num === 8 || num === 13 || num === 18 || num === 23) {
      UUID = UUID.concat("-");
    } else {
      let randomCharIndex = (Math.floor(Math.random() * set.length));
      UUID = UUID.concat(set[randomCharIndex]);
    }
  }
  return UUID;
}

console.log(makeUUID());


//5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'