
function wordLengths(str) {
  if (!str) return [];

  return (str.split(' ')).map((word) => {
    return `${word} ${String(word.length)}`;
  });
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

// Consider guard clause for empty array or string
// 1 - Break string up into an arr
// 2 - Itterate over the array
// 3 - Calculate the lenght of a word
// 4 - add each length after the word in the array
// 5 - join the array at the end to output a string