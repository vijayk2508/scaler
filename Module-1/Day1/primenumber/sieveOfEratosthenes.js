const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sieveOfEratosthenes(n) {
    if (n <= 1) {
        console.log('NO');
        rl.close();
        return;
    }

    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const msg = isPrime[n] ? 'YES' : 'NO';
    console.log(msg);
}

rl.question('Enter a number: ', (n) => {
    sieveOfEratosthenes(parseInt(n))
    rl.close();
});


/*
Time Complexity: O(n*log(log(n)))
Auxiliary Space: O(n)
*/


/*
https://www.geeksforgeeks.org/how-is-the-time-complexity-of-sieve-of-eratosthenes-is-nloglogn/
*/