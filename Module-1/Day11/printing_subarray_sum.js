function printSubarraySums(arr) {
    let n = arr.length;

    // Compute prefix sum
    let prefixSum = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + arr[i];
    }

    // Print subarray sums
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let subarraySum = prefixSum[j] - prefixSum[i];
            console.log(`Sum of subarray [${i}, ${j - 1}] is ${subarraySum}`);
        }
    }
}

// Example usage:
let arr = [1, 2, 3, 4];
printSubarraySums(arr);
