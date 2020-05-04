/* eslint-disable max-lines-per-function */
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const LANGUAGE = 'en';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(description) {
  prompt(MESSAGES['get_num'].replace('DESCRIPTION', description));
  let number = readline.question();

  while (invalidNumber(number)) {
    prompt(MESSAGES['not_right']);
    number = readline.question();
  }
  return Number(number);
}

function getOperation() {
  prompt(MESSAGES['get_op']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['must_choose']);
    operation = readline.question();
  }
  return operation;
}

function askAgain() {
  prompt(MESSAGES['another_op']);
  let answer = readline.question();
  return answer[0].toLowerCase() === 'y';
}

function calculate(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }
  prompt(`${MESSAGES['result']} ${output}`);
}

function calculator() {
  prompt(MESSAGES['es']['welcome']);
  let name = readline.question();
  let number1 = getNumber('first');
  let number2 = getNumber('second');

  do {
    let operation = getOperation();
    calculate(number1, number2, operation);
  } while (askAgain());
}

calculator();
