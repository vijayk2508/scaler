/*
Q3. Pick from both sides!
Problem Description
You are given an integer array A of size N.

You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.

Find and return the maximum possible sum of the B elements that were removed after the B operations.

NOTE: Suppose B = 3, and array A contains 10 elements, then you can:

Remove 3 elements from front and 0 elements from the back, OR
Remove 2 elements from front and 1 element from the back, OR
Remove 1 element from front and 2 elements from the back, OR
Remove 0 elements from front and 3 elements from the back.


Problem Constraints
1 <= N <= 105

1 <= B <= N

-103 <= A[i] <= 103



Input Format
First argument is an integer array A.

Second argument is an integer B.



Output Format
Return an integer denoting the maximum possible sum of elements you removed.



Example Input
Input 1:

 A = [5, -2, 3 , 1, 2]
 B = 3
Input 2:

 A = [ 2, 3, -1, 4, 2, 1 ]
 B = 4


Example Output
Output 1:

 8
Output 2:

 9


Example Explanation
Explanation 1:

 Remove element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
Explanation 2:

 Remove the first element and the last 3 elements. So we get 2 + 4 + 2 + 1 = 9
*/

/*
Absolutely, I'd be happy to help you understand this problem!

The problem gives you an array of integers and a number B. Your task is to remove exactly B elements from either the beginning or the end of the array (or a combination of both), in a way that the sum of these removed elements is as large as possible.

Let's illustrate this with an example. Suppose we have an array [5, -2, 3, 1, 2] and B = 3. We need to remove 3 elements from the array. We can:

Remove 3 elements from the beginning: [5, -2, 3] - sum is 5-2+3 = 6
Remove 2 from the beginning and 1 from the end: [5, -2] and [2] - sum is 5-2+2 = 5
Remove 1 from the beginning and 2 from the end: [5] and [1, 2] - sum is 5+1+2 = 8
Remove 3 from the end: [3, 1, 2] - sum is 3+1+2 = 6
Out of these options, the third one gives the maximum sum. So, the solution for this case is 8.

So, your task is to find a strategy to decide which elements to remove in order to get the maximum sum.
*/

function solve(A, B) {
  let sum = 0,
    ans = 0;
  for (let i = 0; i < B; i++) sum += A[i];
  ans = sum;
  let ri = A.length - 1,
    le = B - 1;
  while (le >= 0) {
    sum -= A[le];
    sum += A[ri];
    ans = Math.max(ans, sum);
    le--;
    ri--;
  }
  return ans;
}


const A = [5, -2, 3 , 1, 2]
const B = 3

solve(A, B)