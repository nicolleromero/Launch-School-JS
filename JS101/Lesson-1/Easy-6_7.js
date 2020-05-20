
function swapName(str) {
  let arr = str.split(" ");
  let surname = arr.pop();
  let remainder = arr.join(' ');

  return `${surname}, ${remainder}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson")