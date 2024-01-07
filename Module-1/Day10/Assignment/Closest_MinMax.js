/*
Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array.
*/

function solve(A) {
  let mx = Math.max(...A);
  let mn = Math.min(...A);
  let ans = A.length;

  let max_index = -1e9;
  let min_index = -1e9 / 2;

  for (let i = 0; i < A.length; i++) {
    if (A[i] == mx) max_index = i;

    if (A[i] == mn) min_index = i;

    ans = Math.min(ans, Math.abs(min_index - max_index) + 1);
  }
  return ans;
}

solve("ABCGAG");
