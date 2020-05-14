/* eslint-disable max-lines-per-function */
/* 1. For test case array, check what first key is (array, object, or primitive item).
*  2.
*/


let testCase = [
  {
    a: {cat: {food: ['blue', 3, 4]}},
    b: 'yellow',
    c: ['red', 'green']
  },
  [10, 20, 30, 40],
  'birds',
  {
    I: [1, 2, 3],
    love: [4, 5, 6],
    you: [[1, 2], 8, 9]}
];

// function traverseArray(item[key]) {
//   let newArray = [];
//   for (let index = 0; index < arr.length; index++) {
//     newArray[index] = func(arr[index], index, arr);
//   }
//   return newArray;
// }

// function traverseObject(obj, keyPath) {
//   for (let key = keyPath[0]) {
//     newObj[key] = func(obj[key], key, obj);
//   }
//   return newObj;
// }

function getValue(item, keyPath) {
  if (keyPath.length === 0) {
    return item;
  }
  if (typeof item === 'object' && item !== null) {
    let key = keyPath[0];
    item = item[key];
    keyPath = keyPath.slice(1);
    return getValue(item, keyPath);
  } else {
    return undefined;
  }
}

function getKeyPath(item, target) {
  if (item === target) {
    return [];
  }
  if (Array.isArray(item)) {
    let result = traverseArray(item, getKeyPath, target);
  //send back through recursively if not an endpoint
  } else if (typeof branch === 'object' && branch !== null) {
  //check through object
  //send back through recursively if not an endpoint
  } else {
    return null;
  }
}

// arr = ['yo', {a: 10}]
// target = 10
// returns [1, 'a']
function traverseArray(arr, func, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return [index];
    } else {
      let result = func(arr[index], target); // ['a']
      if (result !== null) {
        return [index].concat(result); // [index, ...result]
      }
    }
  }
  return null;
}

// let keyPath = [2];
// let keyPath = [0, 'c', 1];
// let keyPath = [0, 'a', 'cat', 'food', 1];
// let keyPath = [0, 'b'];
// let keyPath = [3, 'love', 0];
let keyPath = [3, 'you', 0, 0];

console.log(getValue(testCase, keyPath));

// For testCase key path, should return testCase[0]['a'][1] = 'green'