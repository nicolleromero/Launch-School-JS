const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayResults (arr, lastNumber) {
  if (arr.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in ${arr}.`);
  } else {
    console.log(`The number ${lastNumber} does not appear in ${arr}.`);
  }
}

let arr = [];
let sequence = ['1st', '2nd', '3rd', '4th', '5th'];
for (let element of sequence) {
  prompt(`Enter the ${element} number: `);
  let input = Number(readline.question());
  arr.push(input);
}
prompt(`Enter the last number: `);
let lastNumber = Number(readline.question());

displayResults(arr, lastNumber);
