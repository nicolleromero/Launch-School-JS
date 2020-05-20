
function centerOf(str) {
  if (str.length % 2 === 1) {
    return str[(str.length - 1) / 2];
  } else {
    let half = str.length / 2;
    return str.slice((half - 1), (half + 1));
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
