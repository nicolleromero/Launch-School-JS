const chalk = require('chalk');
const readline = require('readline-sync');

// Heart = u2661, Diamond = u2662, Spade = u2664, Club = u2667
const SUITS = [chalk.red('\u2661'), chalk.red('\u2662'), '\u2664', '\u2667'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suit of SUITS) {
    for (let value of VALUES) {
      deck.push({
        suit,
        value,
        toString: () => value + suit,
      });
    }
  }

  return shuffle(deck);
}

function total(cards) {
  // cards = [{suit: 'H', value: '3', toString: ()}, {suit: 'S', value: 'Q', toString(): ()}, ... ]
  let values = cards.map((card) => card.value);

  let sum = 0;
  for (let value of values) {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  }

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  return sum;
}

function busted(total) { //true
  return total > 21;
}

function detectResult(playerTotal, dealerTotal) {
  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(playerTotal, dealerTotal) {
  let result = detectResult(playerTotal, dealerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log('-------------');
  let answer = null;
  while (answer === null) {
    prompt('Do you want to play again? (y or n)');
    answer = readline.question().toLowerCase();
    if (!['y', 'n'].includes(answer)) {
      prompt("Sorry, must enter 'y' or 'n'.");
      answer = readline.question().toLowerCase();
    }
  }
  return answer;

}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.join(' ');
}

function dealCards(deck, playerCards, dealerCards) {
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));
}

function playerHitOrStay() {
  let playerChoice = null;
  while (playerChoice === null) {
    prompt('Would you like to (h)it or (s)tay?');
    playerChoice = readline.question().toLowerCase();
    if (!['h', 's'].includes(playerChoice)) {
      prompt("Sorry, must enter 'h' or 's'.");
      playerChoice = readline.question().toLowerCase();
    }
  }
  return playerChoice;
}


function playerTurn(playerCards, playerTotal, dealerTotal, deck) {
  while (true) {
    if (playerTotal === 21) {
      prompt('Blackjack!\n');
      break;
    }
    if (busted(playerTotal)) {
      displayResults(playerTotal, dealerTotal);
      if (!playAgain()) break;
    }
    let playerChoice = playerHitOrStay();
    if (playerChoice === 'h') {
      playerTotal = playerHits(playerCards, deck);
    }
    if (playerChoice === 's' || busted(playerTotal)) {
      break;
    }
  }
  return playerTotal;
}

function playerHits(playerCards, deck) {
  playerCards.push(deck.pop());
  let playerTotal = total(playerCards);
  prompt('You chose to hit!');
  prompt(`Your cards are now: ${hand(playerCards)}`);
  prompt(`Your total is now: ${playerTotal}`);

  return playerTotal;
}

function dealerTurn(dealerTotal, dealerCards, deck) {
  prompt('Dealer turn...');

  while (dealerTotal < 17) {
    prompt(`Dealer hits!`);
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
    dealerTotal = total(dealerCards);
  }

  return dealerTotal;
}

function displayOutcome(dealerCards, dealerTotal, playerCards, playerTotal) {
  console.log('==============');
  prompt(`Dealer has ${dealerCards[0]} and ${dealerCards[1]}, for a total of ${dealerTotal}.`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);
  console.log('==============');

  displayResults(playerTotal, dealerTotal);
}

// main game sequence
console.clear();
prompt('Welcome to Twenty-One!');

while (true) {
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  dealCards(deck, playerCards, dealerCards);

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);

  let matchScore = [0, 0];

  // player turn
  playerTotal = playerTurn(playerCards, playerTotal, dealerTotal, deck);

  if (busted(playerTotal)) {
    displayResults(playerTotal, dealerTotal);
  } else {
    dealerTotal = dealerTurn(dealerTotal, dealerCards, deck);

    if (busted(dealerTotal)) {
      prompt(`Dealer total is now: ${dealerTotal}`);
      displayResults(playerTotal, dealerTotal);
    } else {
      displayOutcome(dealerCards, dealerTotal, playerCards, playerTotal);
    }

  }
  // updateMatchScore (matchScore);
  // if (matchScore[0] === 5 || matchScore[1] === 5) {
  //   displayMatchWinner (matchScore);
  // }

  if (playAgain() === 'n') {
    console.clear();
    prompt(`Thanks for playing! Goodbye!`);
    break;
  } else {
    console.clear();
    continue;
  }
}