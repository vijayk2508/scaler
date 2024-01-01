function solve(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) sum += A[i];

  let left_sum = 0; // sum of elements at lower indexes
  for (let i = 0; i < A.length; i++) {
    sum -= A[i]; // sum of elements at higher indexes
    if (sum == left_sum) return i;
    left_sum += A[i];
  }
  // If no equilibrium index found, then return -1
  return -1;
}


solve([-7, 1, 5, 2, -4, 3, 0])