/* eslint-disable max-len */

function displayPalindromes(string) {
  let results = [];
  let arr = string.split("");
  for (let starti = 0; starti < arr.length; starti++) {
    let palindrome = identifyPalindrome(arr, starti);
    if (palindrome.length > 0) {
      results.push(...palindrome);
    }
  }
  return results;
}

function identifyPalindrome(arr, starti) {
  let startLetter = arr[starti];
  let results = [];
  for (let endi = starti + 1; endi < arr.length; endi++) {
    let endLetter = arr[endi];
    if (startLetter === endLetter) {
      if (arr.slice(starti, endi + 1).join('') === arr.slice(starti, endi + 1).reverse().join('')) {
        results.push(arr.slice(starti, endi + 1).join(''));
      }
    }
  }
  return results;
}

let example = "adaswzboiobncpddplopodl";
console.log(displayPalindromes(example));