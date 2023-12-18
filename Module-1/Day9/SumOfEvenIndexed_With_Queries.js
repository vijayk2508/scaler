const arr = [-2, 4, 6, 8, 1, 5];
const prefixSum = [];
prefixSum[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

const queries = [
  { start: 0, end: 4 },
  { start: 1, end: 3 },
  { start: 2, end: 5 },
];

for (const query of queries) {
  const result = sumOfEvenIndexedElements(query.start, query.end);
  console.log(
    `Sum of even-indexed elements from ${query.start} to ${query.end}: ${result}`
  );
}

function sumOfEvenIndexedElements(start, end) {
  let sum = 0;
  // Calculate the sum of even-indexed elements in the range
  for (let i = start; i < end; i += 2) {
    sum += prefixSum[i];
    if (i > 0) {
      sum -= prefixSum[i - 1];
    }
  }

  return sum;
}
