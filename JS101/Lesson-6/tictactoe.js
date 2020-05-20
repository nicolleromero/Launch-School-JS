const chalk = require('chalk');
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';


const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function AskWhoGoesFirst() {
  prompt('Who should go first?');
  prompt('Enter "p" for player (you) or "c" for the computer.');
  let answer = readline.question().toLowerCase();
  answer = validateFirstPlayerInput(answer);
  return answer;
}

function validateFirstPlayerInput(answer) {
  let result;
  while (answer !== 'p' && answer !== 'c') {
    prompt('Please enter "p" or "c".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'p') {
    result = 'player';
  } else {
    result = 'computer';
  }
  return result;
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function playerChoosesSquare(board) {
  let square;
  displayBoard(board);

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
  return board;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function findStrongestNextMove(line, board, COMPUTER_MARKER, HUMAN_MARKER) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === COMPUTER_MARKER ||
    val === HUMAN_MARKER).length !== 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerOffense(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  return square;
}

function nextbestOffense(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findStrongestNextMove(line, board, COMPUTER_MARKER, HUMAN_MARKER);
    if (square) break;
  }
  return square;
}

function computerDefense(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  return square;
}

function computerRandomPick(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function computerChoosesSquare(board) {
  let square = null;
  if (!square) {
    square = computerDefense(board);
  } else if (!square) {
    square = computerOffense(board);
  } else {
    square = nextbestOffense(board);
  }

  if (!square) {
    if (emptySquares(board).includes('5')) {
      square = 5;
    } else {
      square = computerRandomPick(board);
    }
  }
  board[square] = COMPUTER_MARKER;
  return board;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  if (detectWinner(board) !== null) {
    return true;
  } else {
    return false;
  }
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function displayWinner(outcome) {
  if (outcome === 'Player') {
    prompt(chalk.green('You win!'));
  } else if (outcome === 'Computer') {
    prompt(chalk.red('Computer wins!'));
  } else {
    prompt(chalk.yellow("It's a tie!"));
  }
}

function oneGamePlay(firstPlayer) {
  let board = initializeBoard();

  if (!firstPlayer) {
    firstPlayer = AskWhoGoesFirst();
  }

  if (firstPlayer === 'player') {
    board = playerChoosesSquare(board);
  }

  while (true) {
    board = computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    board = playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  let outcome = detectWinner(board);
  displayBoard(board);
  displayWinner(outcome);
  return outcome;
}

// eslint-disable-next-line no-inner-declarations
function displayMatchWinner(winCount, loseCount) {
  if (winCount === 5 || loseCount === 5) {
    if (winCount > loseCount) {
      console.log('--------------------------------------------------------');
      console.log(chalk.green('\nYou won best of five!'));
    } else if (winCount < loseCount) {
      console.log(chalk.red('The computer won best of five!'));
    }
  }
}

function playGame() {
  let winCount = 0;
  let loseCount = 0;
  let outcome;
  let gameCount = 1;
  while (winCount < 5 && loseCount < 5) {
    outcome = matchNotWon(gameCount);
    gameCount += 1;
    winCount += outcome === 'Player' ? 1 : 0;
    loseCount += outcome === 'Computer' ? 1 : 0;
    console.log(`\n\nYour best of five score is: ${winCount} to ${loseCount}`);
  }
  displayMatchWinner(winCount, loseCount);
}

function matchNotWon(gameCount) {
  console.log(`\n\n---------------Game ${gameCount} of the match----------------\n`);

  let outcome = oneGamePlay();
  return outcome;
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
  if (willPlayAgain() === 'no') {
    prompt('Thanks for playing Tic Tac Toe!');
    break;
  }
}