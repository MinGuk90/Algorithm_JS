//베르트랑 공준

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

for (let num of input) {
  if (num === 0) {
    break;
  }
  let n = num;
  let m = num * 2;
  let count = 0;

  let prime = [];

  for (let i = 2; i <= m; i++) {
    if (!prime[i]) {
      if (n < i) {
        count++;
      }
      for (let j = i * 2; j <= m; j += i) {
        prime[j] = true;
      }
    }
  }

  console.log(count);
}
