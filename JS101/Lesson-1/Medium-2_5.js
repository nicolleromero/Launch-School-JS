const MAX_NUM = 9876543201;

function featured(num) {
  let closestNum = Math.ceil(num / 7) * 7;
  if (closestNum === num) {
    closestNum += 7;
  }
  if (closestNum % 2 === 0) {
    closestNum += 7;
  }

  for (let i = closestNum; i <= MAX_NUM; i += 14) {
    if (checkUnique(String(i))) {
      return i;
    }
  }

  return "There is no possible number that fulfills those requirements.";
}


function checkUnique(str) {
  for (let j = 0; j < str.length; j++) {
    let digit = str[j];
    if (str.includes(digit, j + 1)) {
      return false;
    }
  }
  return true;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
an odd number that is a multiple of 7, with all of its digits occuring exactly once each
*/