process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', function (inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function () {
    input = input.split('\n');
    const A = parseInt(input[0]);
    return findSquareRoot(A)
})


function findSquareRoot(A) {
    if (A < 0) return NaN;


    let l = 0;
    let r = A;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (m * m === A) {
            return m;
        } else if (m * m < A) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}
