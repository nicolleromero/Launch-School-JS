
function doubleConsonants(string) {
  let arr = [];
  string.split();

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (/[a-zA-Z]/.test(letter)) {
      arr.push(letter, letter);
    } else {
      arr.push(letter);
    }
  }
  return arr.join('');
}

// function doubleConsonants(string) {
//   let arr = [];
//   string.split();

//   for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     if (letter.match(/[a-zA-Z]/)) {
//       arr.push(letter, letter);
//     } else {
//       arr.push(letter);
//     }
//   }
//   return arr.join('');
// }



console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


/*
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Split the string into an array
Use regex = [a-zA-Z] to exclude any non-consenants
Add two copies of each consenant to the array
Join the array and return it



*/