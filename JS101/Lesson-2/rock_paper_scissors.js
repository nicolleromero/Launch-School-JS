const chalk = require('chalk');
const readline = require('readline-sync');


const VALID_CHOICES = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};


function prompt(message) {
  console.log(`=> ${message}`);
}

function oneGamePlay() {
  displayPrompt();
  let choice = readline.question().toLowerCase();
  choice = setInputVariable(choice);
  validateInput(choice);
  return choice;
}

function displayPrompt() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt("Enter the first letter of your selection.");
  prompt("Enter 'sc' for 'scissors' and 'sp' for 'spock'.)");
}

function setInputVariable (choice) {
  for (let option of VALID_CHOICES) {
    if (option[0] === choice && choice !== 's') { //Made this more flexible for the user
      choice = option;
    } else if (option[1] === choice[1]) {
      choice = option;
    }
  }
  return choice;
}

function validateInput(choice) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = setInputVariable(choice);
  }
  return choice;
}

function displayChoices(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
}

function playerWinsLogic(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    return 'win';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'lose';
  }
}

function displayWinner(outcome) {
  if (outcome === 'win') {
    prompt(chalk.green('You win!'));
  } else if (outcome === 'lose') {
    prompt(chalk.red('Computer wins!'));
  } else if (outcome === 'tie') {
    prompt(chalk.yellow("It's a tie!"));
  }
}

function displayMatchWinner(winCount, loseCount) {
  if (winCount === 3 || loseCount === 3) {
    if (winCount > loseCount) {
      console.log('--------------------------------------------------------');
      console.log(chalk.green('\nYou won best of five!'));
    } else if (winCount < loseCount) {
      console.log(chalk.red('The computer won best of five!'));
    }
  }
  console.log(`Your best of five score is: ${winCount} to ${loseCount}`);
}

function playGame() {
  let winCount = 0;
  let loseCount = 0;
  console.clear();
  while (winCount < 3 && loseCount < 3) {
    let gameCount = winCount + loseCount + 1;
    console.log(`\n\n---------------Game ${gameCount} of the match----------------\n`);

    let choice = oneGamePlay();
    let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
    let computerChoice = VALID_CHOICES[randomIndex];
    let outcome = playerWinsLogic(choice, computerChoice);

    displayChoices(choice, computerChoice);
    displayWinner(outcome);

    winCount += outcome === 'win' ? 1 : 0;
    loseCount += outcome === 'lose' ? 1 : 0;
    displayMatchWinner(winCount, loseCount);
  }
}

function willPlayAgain() {
  let playAgain = readline.question().toLowerCase();
  while (playAgain !== 'no' && playAgain !== 'yes') {
    prompt('Please enter "yes" or "no".');
    playAgain = readline.question().toLowerCase();
  }
  if (playAgain === 'yes') {
    console.clear();
    return 'yes';
  } else {
    return 'no';
  }
}

while (true) {
  playGame();
  prompt('Do you want to play again (yes/no)?');
  if (willPlayAgain() === 'no') break;
}