/*
Q1. Rotation Game

Problem Description
Given an integer array A of size N and an integer B, you have to print the same array after rotating it B times towards the right.


Problem Constraints
1 <= N <= 106
1 <= A[i] <=108
1 <= B <= 109


Input Format
There are 2 lines in the input

Line 1: The first number is the size N of the array A. Then N numbers follow which indicate the elements in the array A.

Line 2: A single integer B.


Output Format
Print array A after rotating it B times towards the right.


Example Input
Input 1 :
4 1 2 3 4
2


Example Output
Output 1 :
3 4 1 2


Example Explanation
Example 1 :

N = 4, A = [1, 2, 3, 4] and B = 2.

Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]

Final array = [3, 4, 1, 2]
*/

// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
  main();
});

function readline() {
  const cl = currentLine++;
  console.log("main", cl);
  return inputString[cl];
}

function reverse(A, start, end) {
  let i, j;
  for (i = start, j = end; i < j; i++, j--) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }
}

function main() {
  let a = readline().split(" ");
  let n = Number(a[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(a[i]));
  }
  console.log("main", readline());
  let B = Number(readline()) % n;
  reverse(arr, 0, n - 1);
  console.log("main", arr);

  reverse(arr, 0, B - 1);
  console.log("main", arr);

  reverse(arr, B, n - 1);
  console.log("main", arr);
  let str = "";
  for (let i in arr) {
    str += arr[i] + " ";
  }
  console.log(str);
}
