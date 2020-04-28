// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00
const readlineSync = require('readline-sync');

const calculateTip = () => {
  let bill = parseFloat(readlineSync.question('What is the bill? '));
  let tipPercent = parseFloat(readlineSync.question('What is the tip percentage? '));
  console.log(`The tip is $${((tipPercent / 100) * bill).toFixed(2)}. \nThe total is $${(bill + ((tipPercent / 100) * bill)).toFixed(2)}`);
}

calculateTip();