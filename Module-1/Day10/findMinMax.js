let arr = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4];

let min = Math.min(...arr);
let max = Math.max(...arr);
let ansMin = Infinity; // Initialize ansMin with Infinity to find minimum
let ansMax = 0; // Initialize ansMax with 0 to find maximum

function findMinMax(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === min) {
      for (let j = i + 1; j < n; j++) {
        if (arr[j] === max) {
          ansMin = Math.min(ansMin, j - i + 1); // Use Math.min to find minimum
          break;
        }
      }
    }
    if (arr[i] === max) {
      for (let j = i + 1; j < n; j++) {
        if (arr[j] === min) {
          ansMax = Math.max(ansMax, j - i + 1); // Use Math.max to find maximum
          break;
        }
      }
    }
  }

  return [ansMin === Infinity ? 0 : ansMin, ansMax];
}

console.log(findMinMax(arr));
