/*
Q1. Amazing Subarrays
Solved
feature icon
Get your doubts resolved blazing fast with Chat GPT Help
Check Chat GPT
feature icon
Using hints is now penalty free
Use Hint
You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input

Only argument given is string S.
Output

Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 1e6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.
*/

function solve(A) {
  let ans = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  let mp = new Map();
  vowels.forEach((vowel) => {
    mp.set(vowel.toLowerCase(), 1);
    mp.set(vowel.toUpperCase(), 1);
  });

  const n = A.length;

  for (let i = 0; i < n; i++) {
    if (mp.has(A[i])) {
      ans = (ans + n - i) % 1003;
    }
  }

  return ans;
}

solve("ABEC");
