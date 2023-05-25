process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', function(inputStdin) {
  input += inputStdin;
});

process.stdin.on('end', function() {
  input = input.split('\n');
  const t = parseInt(input[0]);
  for (let i = 1; i <= t; i++) {
    const n = parseInt(input[i]);
    const result = isPerfectNumber(n) ? 'YES' : 'NO';
    console.log(result);
  }
});

function isPerfectNumber(num) {
  if (num < 2) {
    return false;
  }

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  return sum === num;
}
