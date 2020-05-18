
//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

//maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//-- should be 6: [4, -1, 2, 1]
//Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

//Empty array is considered to have zero greatest sum. Note that the empty array is also a valid subarray.

function maxSequence (arr) {
  let finalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let candidate = arr.slice(i, j + 1);
      let sum = candidate.reduce((a, b) => a + b, 0);
      if (sum > finalSum) {
        finalSum = sum;
        console.log(finalSum);
      }
    }
  }
  return finalSum;
}

console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true