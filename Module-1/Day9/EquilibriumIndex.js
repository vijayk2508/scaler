function solve(arr) {
    let count = 0;

    const prefixSum = [];
    let sum = 0;
    for (const element of arr) {
        sum += element;
        prefixSum.push(sum);
    }

    for (let i = 0; i < arr.length; i++) {
        const leftSum = (i > 0) ? prefixSum[i - 1] : 0;
        const rightSum = prefixSum[arr.length - 1] - prefixSum[i];

        if (leftSum === rightSum) {
            count++;
        }
    }

    return count;
}

const arr = [-3, 2, 4, -1];
const equilibriumCount = solve(arr);
console.log("Count of equilibrium indices:", equilibriumCount);
