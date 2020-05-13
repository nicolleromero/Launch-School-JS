
function mapArray(arr, func) {
  let newArray = [];
  for (let index = 0; index < arr.length; index++) {
    newArray[index] = func(arr[index], index, arr);
  }
  return newArray;
}

function mapObject(obj, func) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = func(obj[key], key, obj);
  }
  return newObj;
}

function deepCopy(item) {
  if (Array.isArray(item)) {
    return mapArray(item, deepCopy);
  } else if (typeof item === 'object' && item !== null) {
    return mapObject(item, deepCopy);
  } else {
    return item;
  }
}


// let arr1 = [1, 2, 3, 4];
// const func = (x) => x * 2;
// console.log(mapArray(arr1, func));

// console.log(arr1.map(func));

// console.log(arr1.map((x) => x * 2));

// console.log(mapArray(arr1, (x) => (x % 2 === 0 ? x * 2 : x)));

let thingy = [
  {1: 'boy', 2: 'girl', 3: 'kid'},
  [1, 2, 3], 'hello', 10
];

let test = deepCopy(thingy);
console.log(test);
test[0]['1'] = 'cat';
test[3] *= 2;
console.log(thingy);
console.log(test);

// console.log(thingy);
// console.log(test);

// function findPalindromes(string) {
//   let results = [];
//   let arr = string.split('');
//   for (let i = 0; i < arr.length; i++) {
//     let entry = checkForPalindrome(arr, i);
//     if (entry.length > 0) {
//       results.push(...entry);
//     }
//   }
//   return results;
// }
// function checkForPalindrome(arr, i) {
//   let results = [];
//   for (let subIdx = (i + 1); subIdx < arr.length; subIdx += 1) {
//     let currentSubStr = arr.slice(i, subIdx).join('');
//     let reversed = arr.slice(i, subIdx).reverse().join('');
//     if (currentSubStr === reversed && currentSubStr.length > 1) {
//       results.push(currentSubStr);
//     }
//   }
//   return results;
// }

// let example = "adaswzboiobncpddplopodl";
// console.log(findPalindromes(example));