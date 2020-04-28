
const multisum = (num) => {
  let sum = 0;
  for (let i = 1; i < num + 1; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  }
  return sum;
}



// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168