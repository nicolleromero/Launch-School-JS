

function maxRotation(number) {
  let stringNum = String(number);

  for (let i = 0; i < stringNum.length - 1; i++) {
    stringNum = rotateRightmostDigits(stringNum, i);
  }
  return Number(stringNum);
}

function rotateRightmostDigits(stringNum, startIndex) {
  let numToMove = stringNum.slice(startIndex);
  let substring = stringNum.substring(0, startIndex);
  console.log(substring + rotateString(numToMove));
  return substring + rotateString(numToMove);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(maxRotation(7352915));

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845