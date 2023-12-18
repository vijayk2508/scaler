/*
Q3. Max and Min of an Array
Solved
feature icon
Get your doubts resolved blazing fast with Chat GPT Help
Check Chat GPT
feature icon
Using hints is now penalty free
Use Hint
Problem Description

Take input an array A of size N and write a program to print maximum and minimum elements of the input. The only line of the input would contain a single integer N that represents the length of the array followed by the N elements of the input array A.

Problem constraints

1 <= N <= 1000

1 <= A <= 1000


Input Format

The first line contains a single integer N representing the length of the array A followed by N elements of the array A.


Output Format

A single line output containing two space-separated integers.
The first integer is the maximum value of the array.
The second integer is the minimum value of the array.


Example Input

Input 1:
5 1 2 3 4 5
Input 2:
4 10 50 40 80

Example Output

Output 1:
5 1
Output 2:
80 10
Note: There is no space after the minimum value in the output format. There is only a single space between the maximum and minimum value.




Write a program to print maximum and minimum elements of the input
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", () => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => string.trim());
  main();
});

function readline() {
  return inputString[currentLine++];
}

// approach 1
function main() {
  const a = readline().split(" ");
  const n = Number(a[0]);
  const arr = a.slice(1).map(Number); // Convert array elements to numbers using map

  let mx = -Infinity;
  let mn = Infinity;

  // iterating over arr using for...of loop
  for (const num of arr) {
    mx = Math.max(mx, num);
    mn = Math.min(mn, num);
  }

  console.log(mx + " " + mn);
}

// approach 2
function main() {
  let a = readline().split(" ");
  let n = Number(a[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(a[i]));
  }
  let mx = 0;
  let mn = 1001;
  // iterating over arr
  for (let i in arr) {
    if (mx < arr[i]) mx = arr[i];
    if (mn > arr[i]) mn = arr[i];
  }
  console.log(mx + " " + mn);
}
