// Easy-4_1

function age (min, max) {
  let age = min + Math.floor(Math.random() * (max - min + 1));
  console.log(`Teddy is ${age} years old!`);
}

age(20, 120);
