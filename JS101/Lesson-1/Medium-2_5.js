/* eslint-disable max-statements */
/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */

function featured(num) {
  const MAX_NUM = 9876543201;
  if (num >= MAX_NUM) {
    return "There is no possible number that fulfills those requirements.";
  }
  let closestNum = Math.ceil(num / 7);
  if (closestNum * 7 === num) {
    closestNum += 1;
  }

  while (true) {
    for (let i = closestNum; i < MAX_NUM; i++) {
      if ((i * 7) % 2 !== 0) {
        let str = (i * 7).toString();
        if (checkUnique(str)) {
          return Number(str);
        }
      }
    }
  }
}

function checkUnique(str) {
  for (let j = 0; j < str.length; j++) {
    let digit = str[j];
    let check = str.slice(j + 1);
    if (check.includes(digit)) {
      return null;
    }
  }
  return str;
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