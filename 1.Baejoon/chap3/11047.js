//동전 0

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

let a = input[0].split(" ");
let coin = 0;
let count = 0;

for (i = a[0]; i >= 1; i--) {
  if (input[i] <= +a[1]) {
    coin = parseInt(a[1] / input[i]);
    a[1] = a[1] % input[i];
    count += coin;
  }
  if (a[1] == 0) {
    break;
  }
}
console.log(count);
