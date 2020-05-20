
function palindromes (string) {
  let result = [];
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let word = arr[i].slice(0, j);
      let reverseWord = word.reverse();
      console.log(word);
      console.log(reverseWord);
      if (word === reverseWord) {
        result.push(word);
      }
    }
  }
  return result;
}

console.log(palindromes('hello-madam-did-madam-goodbye'));
