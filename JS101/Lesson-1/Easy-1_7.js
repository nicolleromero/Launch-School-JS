
const shortLongShort = (str1, str2) => {
  let longString = "";
  let shortString = "";
  if (str1.length >= str2.length) {
    longString = str1;
    shortString = str2;
  } else {
    longString = str2;
    shortString = str1;
  }
  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"