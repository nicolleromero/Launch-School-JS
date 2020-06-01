
// Problem: input --> positive integer, output --> integer (sum of digits)

function sum(num) {
  let strNum = String(num).split("");
  return strNum.reduce((sum, val) => sum + Number(val), 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45