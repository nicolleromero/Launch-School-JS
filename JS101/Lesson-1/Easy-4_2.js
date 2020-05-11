// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

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

function searching101 () {
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
}

searching101();