

const asciiValue = (string) => {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    sum += code;
  }
  return sum;
}




console.log(asciiValue('Four score'));         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
console.log(asciiValue(''));                   // 0