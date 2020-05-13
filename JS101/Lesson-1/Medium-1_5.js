

// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // // "Please call me at 5 5 5 1 2 3 4. Thanks."

// let numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// let string = 'Please call me at five five five one two three four. Thanks.';

// const NUM_WORDS = {
//   zero:  0,
//   one:   1,
//   two:   2,
//   three: 3,
//   four:  4,
//   five:  5,
//   six:   6,
//   seven: 7,
//   eight: 8,
//   nine:  9,
// };

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });
//   return sentence;
// }

// console.log(wordToDigit(string));

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp(word, 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });

//   return sentence;
// }

// function wordsToDigitis(sentence) {
//   Object.keys(NUM_WORDS).forEach(key => {
//     let regex = new RegExp(key, 'g');
//     sentence = sentence.replace(regex, NUM_WORDS[key]);
//   });
// }

// function fibonacciNumber(nth) {
//   if (nth <= 1) {
//     return nth;
//   } else {
//     return fibonacciNumber(nth - 1) + fibonacciNumber(nth - 2);
//   }
// }

// console.log(fibonacciNumber(process.argv[2]));

// function fibonacciNumber2(nth) {
//   if (nth <= 1) {
//     return nth;
//   }
//   let lastOne = 0;
//   let lastTwo = 1;
//   for (let i = 2; i <= nth; i++) {
//     let sum = lastOne + lastTwo;
//     lastOne = lastTwo;
//     lastTwo = sum;
//   }
//   return lastTwo;
// }

// 0 1 2 3 5 8 13 21 _

let advice = "Few things in life are as important as house training your pet dinosaur important.";

function sample(advice) {
  while (advice.includes('important')) {
    advice = advice.replace('important', 'urgent');
  }
  return advice;
}

console.log(sample(advice));