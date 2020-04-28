JS 101 Exercise 1

let number = 5;

function test() {
  number = 3;
}

test();
console.log(number);
// => 3

let number = 5;

function test(number) { /* This is an example of shadowing */
  number = 3;
}

test(number);
console.log(number);
// => 5

/* the reason that the second code snippet doesn't change the value of number 
defined on line 1 is that the number parameter on line 3 shadows the number variable 
by creating a separate and independent variable with the same name, but with the scope 
limited to the function. 
*/