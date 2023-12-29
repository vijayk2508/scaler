/*
Q4. Range Sum Query

Problem Description
You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



Problem Constraints
1 <= N, M <= 105
1 <= A[i] <= 109
0 <= L <= R < N


Input Format
The first argument is the integer array A.
The second argument is the 2D integer array B.


Output Format
Return an integer array of length M where ith element is the answer for ith query in B.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
Input 2:

A = [2, 2, 2]
B = [[0, 0], [1, 2]]


Example Output
Output 1:
[10, 5]
Output 2:

[2, 4]


Example Explanation
Explanation 1:
The sum of all elements of A[0 ... 3] = 1 + 2 + 3 + 4 = 10.
The sum of all elements of A[1 ... 2] = 2 + 3 = 5.
Explanation 2:

The sum of all elements of A[0 ... 0] = 2 = 2.
The sum of all elements of A[1 ... 2] = 2 + 2 = 4.

*/

/*
Each query is represented as a pair of numbers [L, R], which are the starting and ending indices 
for the range of elements in the array you should consider for that query.

For each query, 
you need to calculate the sum of all the elements in the array from index L to index R, inclusive.

Finally, you should return an array containing the results of all these queries, 
in the same order as the queries were given.

For example, if your array is [1, 2, 3, 4, 5] and 
the queries are [[0, 3], [1, 2]], 
the sum for the first query (0 to 3) would be 1 + 2 + 3 + 4 = 10, and 
the sum for the second query (1 to 2) would be 2 + 3 = 5. So you would return [10, 5].
*/

function rangeSum(A, B) {
  for (let i = 1; i < A.length; i++) {
    A[i] += A[i - 1];
  }

  let ans = [];
  for (let i = 0; i < B.length; i++) {
    ans.push(B[i][0] > 0 ? A[B[i][1]] - A[B[i][0] - 1] : A[B[i][1]]);
  }

  return ans;
}
