

function rotateRightmostDigits(number, count) {
  let stringNum = String(number);
  let startIndex = stringNum.length - count;
  let numToMove = stringNum.slice(startIndex);
  let substring = stringNum.substring(0, startIndex);

  return substring + rotateString(numToMove);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateRightmostDigits(735291, 6));

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917