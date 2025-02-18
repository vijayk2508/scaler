/*
Q2. Even Subarrays

Problem Description
You are given an integer array A. Decide whether it is possible to divide the array into one or more subarrays of even length 
such that the first and last element of all subarrays will be even.

Return "YES" if it is possible; otherwise, return "NO" (without quotes).

Problem Constraints
1 <= |A|, A[i] <= 106

Input Format
The first and the only input argument is an integer array, A.

Output Format
Return a string "YES" or "NO" denoting the answer.

Example Input

Input                Output    Explanation 

A = [2, 4, 8, 6]     "YES"     We can divide A into [2, 4] and [8, 6].

A = [2, 4, 8, 7, 6]  "NO"      There is no way to divide the array into even length subarrays.

*/

function solve(A) {
  let n = A.length;
  if (A[0] % 2 == 0 && A[n - 1] % 2 == 0 && n % 2 == 0) return "YES";
  else return "NO";
}

solve([2, 4, 1, 3, 2]);
