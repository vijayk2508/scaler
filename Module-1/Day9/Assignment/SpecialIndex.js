/*
Q2. Special Index
Solved
feature icon
Get your doubts resolved blazing fast with Chat GPT Help
Check Chat GPT
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105
Sum of all elements of A <= 109


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A = [2, 1, 6, 4]
Input 2:

A = [1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.
*/

function solve(A) {
  const n = A.length;
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 0;
  }

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      sumEven += A[i];
    } else {
      sumOdd += A[i];
    }
  }

  let currOdd = 0;
  let currEven = A[0];
  let res = 0;
  let newEvenSum = 0;
  let newOddSum = 0;

  for (let i = 1; i < n - 1; i++) {
    console.log(`i=${i},  A[${i}] = ${A[i]}`);
    if (i % 2 === 0) {
      console.log(
        `currEven = currEven(${currEven}) + A[${i}](${A[i]}) = ${
          currEven + A[i]
        }`
      );

      currEven += A[i];

      newOddSum = currOdd + sumEven - currEven;
      newEvenSum = currEven + sumOdd - currOdd - A[i];

      console.log(
        `newOddSum = currOdd(${currOdd}) + sumEven(${sumEven}) - currEven(${currEven}) = ${newOddSum}`
      );
      console.log(
        `newEvenSum = currEven(${currEven}) + sumOdd(${sumOdd}) - currOdd(${currOdd}) - A[${i}](${A[i]}) = ${newEvenSum}`
      );
    } else {
      console.log(
        `currOdd = currOdd(${currOdd}) + A[${i}](${A[i]}) = ${currOdd + A[i]}`
      );

      currOdd += A[i];

      newEvenSum = currEven + sumOdd - currOdd;

      newOddSum = currOdd + sumEven - currEven - A[i];

      console.log(
        `newEvenSum = currEven(${currEven}) + sumOdd(${sumOdd}) - currOdd(${currOdd}) = ${newEvenSum}`
      );
      console.log(
        `newOddSum = currOdd(${currOdd}) + sumEven(${sumEven}) - currEven(${currEven}) - A[${i}](${A[i]}) = ${newOddSum}`
      );
    }
    if (newEvenSum === newOddSum) {
      res++;
    }
  }

  console.log(sumOdd, sumEven, A[0], A[n - 1], res);
  if (sumOdd === sumEven - A[0]) {
    res++;
    console.log(res);
  }

  if (n % 2 === 1) {
    if (sumOdd === sumEven - A[n - 1]) {
      res++;
      console.log(res);
    }
  } else {
    if (sumEven === sumOdd - A[n - 1]) {
      res++;
      console.log(res);
    }
  }

  console.log(res);

  return res;
}

solve([4, 3, 2, 7, 6, -2]);
