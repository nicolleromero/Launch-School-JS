// let numbers = [1, 2, 3];
// numbers[6] = 5;

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];  // what will this line return?

// //numbers = [1, 2, 3, empty, empty, 5]

// numbers.map(() => 10);
// numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ] called a "sparse array"
// numbers[5] = undefined;

// //for map(), empty items in an array stay empty, but undefined items will be mapped.

// //How can you determine whether a given string ends with an exclamation mark (!)?

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// let arr = string.split("");
// return (arr.contains("!"));

// //OR

// //The endsWith() method determines whether a string ends with the characters
// //of a specified string, returning true or false as appropriate.

// //Determine whether the following object of people and their age contains an entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// ages.hasOwnProperty("Spot");

//Question 4
//Using the following string, create a new string that contains all lowercase letters
//except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// function changeCap(string) {
//   let newString = string.toLowerCase();
//   newString.charAt(0).toUpperCase();
//   console.log(newString.charAt(0));
//   return newString;

// }
console.log(munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase());
