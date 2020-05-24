
function palindromes (string) {
  let result = [];
  let arr = string.split("");
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        let word = arr.slice(i, j + 1);
        let reverseWord = word.slice().reverse(); // Check to see if you need to call slice first!
        // console.log(word);
        // console.log(reverseWord);
        if (word.join("") === reverseWord.join("")) {
          result.push(word);
        }
      }
    }
  }
  return result;
}

console.log(palindromes('hello-madam-did-madam-goodbye'));


// DON'T FORGET THAT REVERSE MUTATES THE ARRAY! CHAIN SLICE BEFORE REVERSE!