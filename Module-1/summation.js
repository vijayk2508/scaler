// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', function (inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function () {
    input = input.split('\n');

    const n = parseInt(input[0]);

    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }

    console.log(sum)
});