// expnd number range

function numRange(str) {
  let rawRanges = str.split(",");
  let range = [];
  console.log(rawRanges);
  let i = 0;
  while (i < rawRanges.length - 1) {
    let num1 = rawRanges[i];
    let num2 = rawRanges [i + 1];
    if (num2 > num1) {
      range.push(num1);
      i++;
    } else {
      range.push(num1);
      break;
    }
  }
  console.log(range);
}

// function expandRange ()


console.log(numRange("1,3,7,2,4,1")); // [1, 3, 7, 12, 14, 21]
// console.log(numRange("1-3,1-2")); // [1, 2, 3, 11, 12]
// console.log(numRange("1..3,1-2")); //  [1, 2, 3, 11, 12]
// console.log(numRange("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(numRange("1")); // [1]