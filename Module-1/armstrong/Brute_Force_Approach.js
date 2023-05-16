function isArmstrongNumber(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i <= numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigits);
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



