function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** 3;
      temp = Math.floor(temp / 10);
    }
  
    return sum === num;
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
  