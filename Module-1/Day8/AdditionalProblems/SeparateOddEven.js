/*
Q4. Separate Odd Even

Problem Description
You are given an integer T denoting the number of test cases. For each test case, you are given an integer array A.

You have to print the odd and even elements of array A in 2 separate lines.

NOTE: Array elements should have the same relative order as in A.



Problem Constraints
1 <= T <= 10

1 <= |A| <= 10^5

1 <= A[i] <= 10^9



Input Format
First line of the input contains a single integer T.

For each test case:

First line consists of a single integer |A| denoting the length of array.
Second line consists of |A| space separated integers denoting the elements of array A.


Output Format
For each test case:

First line should contain an array of space separated integers containing all the odd elements of array A
Second line should contain an array of space separated integers containing all the even elements of array A


Example Input
Input 1:

 2 
 5
 1 2 3 4 5
 3
 4 3 2
Input 2:

 2 
 3
 2 2 2
 2
 1 1


Example Output
Output 1:

 1 3 5
 2 4
 3
 4 2
Output 2:

 2 2 2
 1 1


Example Explanation
Explanation 1:

 Test Case 1: 
 Odd elements in the array(in the order they occur) are: 1, 3, 5.
 Even elements in the array(in the order they occur) are: 2, 4.

 Test Case 2 
 Odd elements in the array(in the order they occur) are: 3.
 Even elements in the array(in the order they occur) are: 4, 2.
Explanation 2:

 Test Case 1: 
 There are no odd elements in the array.
 Even elements in the array(in the order they occur) are: 2, 2, 2.

 Test Case 2 
 Odd elements in the array(in the order they occur) are: 1, 1.
 There are no even elements in the array.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processInput() {
  rl.question("", (tInput) => {
    let t = parseInt(tInput);

    function processTestCase() {
      rl.question("", (nInput) => {
        let n = parseInt(nInput);
        let a = [];

        rl.question("", (input) => {
          a = input.split(" ").map(Number);

          let odd = [];
          let even = [];
          let szo = 0;
          let sze = 0;

          for (let i = 0; i < n; i++) {
            if (a[i] % 2 !== 0) {
              odd[szo] = a[i];
              szo++;
            } else {
              even[sze] = a[i];
              sze++;
            }
          }

          for (let i = 0; i < szo; i++) {
            process.stdout.write(odd[i] + " ");
          }
          process.stdout.write("\n");

          for (let i = 0; i < sze; i++) {
            process.stdout.write(even[i] + " ");
          }
          process.stdout.write("\n");

          t--;
          if (t > 0) {
            processTestCase();
          } else {
            rl.close();
          }
        });
      });
    }

    processTestCase();
  });
}

processInput();
