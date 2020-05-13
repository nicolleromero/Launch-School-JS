split("") => String to array

includes() => search for in array

toLowerCase() => change case of string
toUpperCase() => change case of string

'what string to repeat'.repeat(how many times?)
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

padStart(full length, usually '')
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

isNaN(Number(years)) => check for NaN