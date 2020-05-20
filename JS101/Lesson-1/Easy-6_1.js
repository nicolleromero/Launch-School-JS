
function repeater(string) {
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    newString.push(letter, letter);
  }

  return newString.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

/*Pass in a string as the arguement
Declare a new variable and assign it to an empty array
Iterate over each character in the string with a for loop
Push two copies of each letter to the array
Join the array into a string and return it.*/

//USE MAP NEXT TIME!
