/* Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15. */



const readlineSync = require('readline-sync');

const calculate = () => {
  let num = 0;
  while (num <= 0 || isNaN(num) || num !== Math.floor(num)) {
    num = Number(readlineSync.question('Please enter an integer greater than 0: '));
  }

  while (true) {
    let choice = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

    if (choice === 's') {
      console.log(`The sum of the integers between 1 and ${num} is ${calculateSum(num)}.`);
      break;
    } else if (choice === 'p') {
      console.log(`The product of the integers between 1 and ${num} is ${calculateProduct(num)}.`);
      break;
    } else {
      console.log('Oops. You need to type "s" or "p".');
    }
  }
}

const calculateSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const calculateProduct = (num) => {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

calculate();



