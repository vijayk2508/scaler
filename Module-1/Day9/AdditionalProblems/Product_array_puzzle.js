/**
Q2. Product array puzzle
Solved
feature icon
Get your doubts resolved blazing fast with Chat GPT Help
Check Chat GPT
feature icon
Using hints is now penalty free
Use Hint
Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


Input Format

The only argument given is the integer array A.
Output Format

Return the product array.
Constraints

2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]
Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
*/

function solve(A) {
  const n = A.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);
  const result = new Array(n).fill(1);

  // Calculate the product of elements to the left of each element
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * A[i - 1];
  }

  // Calculate the product of elements to the right of each element
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * A[i + 1];
  }

  // Multiply the left and right products for each element to get the result
  for (let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
}
solve([1, 2, 3, 4, 5]);
