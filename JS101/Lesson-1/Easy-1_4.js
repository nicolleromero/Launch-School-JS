
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// Note: 1 square meter == 10.7639 square feet


const FACTOR = 10.7639;
let readlineSync = require('readline-sync');
let length = readlineSync.question('Enter the length of the room in meters: ');
length = parseInt(length, 10);
let width = readlineSync.question('Enter the width of the room in meters: ');
width = parseInt(width, 10);
console.log(`The area of the room is ${(length * width).toFixed(2)} square meters (${(length * width * FACTOR).toFixed(2)} square feet).`);


// The area of the room is 70.00 square meters (753.47 square feet).