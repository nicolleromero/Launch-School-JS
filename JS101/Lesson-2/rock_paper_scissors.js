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
  let choice = promptShortChoice();
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = promptShortChoice();
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

function bestOfFive(winCount, loseCount) {
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

function promptShortChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt("Enter the first letter of your selection.");
  prompt("Enter 'sc' for 'scissors' and 'sp' for 'spock'.)");
  let choice = readline.question().toLowerCase();

  for (let option of VALID_CHOICES) {
    if (option[0] === choice && choice !== 's') { //Made this more flexible for the user
      choice = option;
    } else if (option[1] === choice[1]) {
      choice = option;
    }
  }
  return choice;
}

function playGame() {
  let winCount = 0;
  let loseCount = 0;

  while (winCount < 3 && loseCount < 3) {
    let gameCount = winCount + loseCount + 1;
    console.log(`-----------------Game ${gameCount} of the match----------------\n`);
    let choice = oneGamePlay();

    let randomIndex = Math.ceil(Math.random() * VALID_CHOICES.length) - 1;
    let computerChoice = VALID_CHOICES[randomIndex];
    let outcome = playerWinsLogic(choice, computerChoice);

    displayChoices(choice, computerChoice);
    displayWinner(outcome);

    winCount += outcome === 'win' ? 1 : 0;
    loseCount += outcome === 'lose' ? 1 : 0;
    bestOfFive(winCount, loseCount);
  }
}


let answer = 'yes';
while (answer === 'yes') {
  playGame();
  prompt('Do you want to play again (yes/no)?');
  answer = readline.question().toLowerCase();
  while (answer !== 'no' && answer !== 'yes') {
    prompt('Please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'yes') {
    console.clear();
    continue;
  } else {
    break;
  }
}