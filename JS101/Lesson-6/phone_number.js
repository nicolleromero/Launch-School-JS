// 10 digit demo

// function cleanPhone(str) {
//   let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let arr = str.split("");
//   console.log(arr);
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (digits.includes(element)) {
//       result.push(element);
//     }
//   }
//   if (result.length === 10) {
//     return result.join("");
//   } else if (result.length === 11 && result[0] === '1') {
//     return result.slice(1).join("");
//   } else {
//     return "0000000000";
//   }
// }
let DEFAULT = "0".repeat(10);

function cleanPhone(str) {
  let cleaned = str.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return cleaned;
  } else if (cleaned.length === 11 && cleaned[0] === '1') {
    return cleaned.slice(1);
  } else {
    return DEFAULT;
  }
}

console.log(cleanPhone("9999999999"));
console.log(cleanPhone("9.9999-999   99"));
console.log(cleanPhone("19999999999"));
console.log(cleanPhone(""));
console.log(cleanPhone("1"));