const MESSAGES = require('./mortgage_calculator_messages.json');
const readline = require('readline-sync');

/* Mortgage Calculator */


prompt(MESSAGES['welcome']);
while (true) {
  let amount = getInput("amount", getValidLoanAmount);
  let apr = getInput("apr", getValidApr);
  let duration = getInput("duration", getValidDuration);
  let finalMonthlyPayment = monthlyPayment(amount, apr, duration);
  if (finalMonthlyPayment !== null) {
    displayMonthlyPayment(finalMonthlyPayment);
  }
  prompt(MESSAGES['another_calculation']);
  prompt(MESSAGES['must_be_yes_or_no']);
  let answer = readline.question().toLowerCase();
  while (answer !== 'no' && answer !== 'yes') {
    prompt(MESSAGES['must_be_yes_or_no']);
    answer = readline.question().toLowerCase();
  }
  if (answer === 'no') break;
  console.clear();
}


function prompt(message) {
  console.log(`=> ${message}`);
}

function getInput(inputType, validInput) {
  prompt(MESSAGES[inputType]);
  prompt(MESSAGES[`example_${inputType}`]);
  let input = readline.question();

  while (validInput(input) === null) {
    prompt(MESSAGES['must_be_positive']);
    input = readline.question();
  }
  return validInput(input);
}

function getValidLoanAmount(number) {
  let match = number.match(/^\$?([\d,]+(\.\d\d)?)$/);
  if (match === null || number === '0') {
    return null;
  } else {
    return Number(match[1].replace(/,/g, ''));
  }
}

function getValidApr(aprInput) {
  let match = aprInput.match(/^(\d+(\.\d+)?)%?$/);
  if (match === null) {
    return null;
  } else {
    return Number(match[1]) / 100;
  }
}

function getValidDuration(duration) {
  let years = duration;
  let months;
  if (years < '0' || years === null || Number.isNaN(Number(years))) {
    return null;
  } else {
    months = Number(years * 12);
  }
  return months;
}

function monthlyPayment(amount, apr, months) {
  let finalMonthlyPayment;
  if (months === 0) {
    prompt(MESSAGES['all_due'].replace('AMOUNT', amount));
    return null;
  } else if (apr === 0) {
    let monthlyPaymentZero = (amount / months).toFixed(2);
    prompt(MESSAGES['monthly_payment'].replace('PAYMENT', monthlyPaymentZero));
    return null;
  } else {
    let monthlyIntRate = apr / 12;
    let monthlyAmount = amount * monthlyIntRate;
    let monthlyPayment =
      monthlyAmount / (1 - Math.pow(1 + monthlyIntRate, -months));
    finalMonthlyPayment = monthlyPayment.toFixed(2);
    return finalMonthlyPayment;
  }
}

function displayMonthlyPayment(finalMonthlyPayment) {
  prompt(MESSAGES['monthly_payment'].replace('PAYMENT', finalMonthlyPayment));
}
