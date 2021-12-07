// 소수 구하기

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map(Number);

let n = input[0];
let m = input[1];

let prime = [];

for (let i = 2; i <= m; i++) {
  if (!prime[i]) {
    if (n <= i) {
      console.log(i);
    }
    for (let j = i * 2; j <= m; j += i) {
      prime[j] = true;
    }
  }
}
