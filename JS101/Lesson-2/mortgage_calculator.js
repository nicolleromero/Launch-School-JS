const MESSAGES = require('./mortgage_calculator_messages.json');
const readline = require('readline-sync');

/* Mortgage Calculator */

function calculateMortgage() {
  prompt(MESSAGES['welcome']);
  while (true) {
    monthlyPayment(getAmount(), getApr(), getDuration());

    prompt(MESSAGES['another_calculation']);
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt(MESSAGES['must_be_y_or_n']);
      answer = readline.question().toLowerCase();
    }
    if (answer[0] === 'n') break;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getValidLoanAmount(number) {
  let match = number.match(/^\$?([\d,]+(\.\d\d)?)$/);
  if (match === null) {
    return null;
  } else {
    return Number(match[1].replace(/,/g, ''));
  }
}

function getAmount() {
  prompt(MESSAGES['loan_amount']);
  let amountInput = readline.question();
  let amount = getValidLoanAmount(amountInput);

  while (amount === null) {
    prompt(MESSAGES['must_be_positive']);
    amountInput = readline.question();
    amount = getValidLoanAmount(amountInput);
  }

  return amount;
}

function getValidApr(aprInput) {
  let match = aprInput.match(/^(\d+(\.\d+)?)%?$/);
  if (match === null) {
    return null;
  } else {
    return Number(match[1]) / 100;
  }
}

function getApr() {
  prompt(MESSAGES['apr']);
  prompt(MESSAGES['example_apr']);
  let aprInput = readline.question();
  let apr = getValidApr(aprInput);

  while (apr === null) {
    prompt(MESSAGES['must_be_positive']);
    aprInput = readline.question();
    apr = getValidApr(aprInput);
  }

  return apr;
}

function getDuration() {
  prompt(MESSAGES['duration']);
  let years = readline.question();
  let months;
  if (years === '0') {
    months = 0;
  } else {
    while (years < 0 || years === null || Number.isNaN(Number(years))) {
      prompt(MESSAGES['must_be_positive']);
      years = readline.question();
    }
    months = Number(years * 12);
  }
  return months;
}

function monthlyPayment(amount, apr, months) {
  if (months === 0) {
    prompt(MESSAGES['all_due'].replace('AMOUNT', amount));
  } else if (apr === 0) {
    let monthlyPaymentZero = (amount / months).toFixed(2);
    prompt(MESSAGES['monthly_payment'].replace('PAYMENT', monthlyPaymentZero));
  } else {
    let monthlyIntRate = apr / 12;
    let monthlyAmount = amount * monthlyIntRate;
    let monthlyPayment =
      monthlyAmount / (1 - Math.pow(1 + monthlyIntRate, -months));
    let finalMonthlyPayment = monthlyPayment.toFixed(2);
    prompt(MESSAGES['monthly_payment'].replace('PAYMENT', finalMonthlyPayment));
  }
}

calculateMortgage();
