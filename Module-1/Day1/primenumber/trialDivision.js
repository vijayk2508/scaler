const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (n) => {
  n = parseInt(n);

  if (n <= 1) {
    console.log('NO');
    rl.close();
    return;
  }

  let no_factor = 2;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      no_factor++;
    }
  }

  const msg = no_factor === 2 ? 'YES' : 'NO';
  console.log(msg);

  rl.close();
});
