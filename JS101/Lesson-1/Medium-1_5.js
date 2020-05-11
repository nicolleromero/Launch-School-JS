

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

function fibonacciNumber(nth) {
  if (nth <= 1) {
    return nth;
  } else {
    return fibonacciNumber(nth - 1) + fibonacciNumber(nth - 2);
  }
}

console.log(fibonacciNumber(process.argv[2]));
