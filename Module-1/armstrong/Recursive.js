function isArmstrongNumber(num) {
    const sum = recursiveSum(num);
    return sum === num;
  }
  
  function recursiveSum(num, sum = 0) {
    if (num === 0) {
      return sum;
    }
  
    const digit = num % 10;
    sum += digit ** 3;
    return recursiveSum(Math.floor(num / 10), sum);
  }
  
  
  function printArmstrongNumbers(N) {
    for (let i = 1; i <= N; i++) {
      if (isArmstrongNumber(i)) {
        console.log(i);
      }
    }
  }
  
  // Reading input from stdin
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question("", (N) => {
    printArmstrongNumbers(Number(N));
    rl.close();
  });
  