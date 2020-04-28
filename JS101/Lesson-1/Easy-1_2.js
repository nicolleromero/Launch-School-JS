const oddNumbers = () => {
  for (let num = 1; num < 100; num++) {
    if (num % 2 === 1) {
      console.log(num);
    }
  }
}

oddNumbers();