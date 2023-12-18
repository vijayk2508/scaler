/*
Q5. Search Element
Problem Description

You are given an integer T (number of test cases). You are given array A and an integer B for each test case. You have to tell whether B is present in array A or not.

Problem Constraints

1 <= T <= 10
1 <= A <= 105
1 <= A[i], B <= 109


Input Format

First line of the input contains number of test cases as single integer T .
Next, each of the test case consists of 3 lines:

First line contains a single integer A denoting the length of array
Second line contains A integers denoting the array elements
Third line contains a single integer B


Output Format

For each test case, print on a separate line 1 if the element exists, else print 0.



Example Input

Input 1:

 1 
 5 
 4 1 5 9 1
 5
Input 2:

 1
 3 
 7 7 2
 1 


Example Output

Output 1:

 1 
Output 2:

 0 


Example Explanation

Explanation 1:

  B = 5  is present at position 3 in A 
Explanation 2:

  B = 1  is not present in A. 
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
});

function readline() {
    return inputString[currentLine++];
}

function main() {
    let t = Number(readline());
    while (t--) {
        let a = new Set(readline().split(" ").map(Number));
        let b = Number(readline());
        
        // Check if element B exists in set A
        let ans = a.has(b) ? 1 : 0;
        
        console.log(ans);
    }
}

function main1() {
    let t = Number(readline());
    while (t--) {
        let n = Number(readline());
        let a = readline().split(" ");
        let b = Number(readline());
        let ans = 0;
        for (let i = 0; i < n; i++) {
            // If a[i] is equal to b, we found element
            if (a[i] == b)
                ans = 1;
        }
        console.log(ans);
    }
}