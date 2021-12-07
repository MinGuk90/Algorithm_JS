// 더하기 사이클

const input = require("fs").readFileSync("example.txt").toString();

parseInt(input);
let a = input;
let count = 0;

while (true) {
  if (a < 10) {
    a * 10;
  }

  let ten = parseInt(a / 10);
  let one = a % 10;

  let sum = ten + one;
  let right = sum % 10;
  count++;

  a = one * 10 + right;
  if (input == a) {
    break;
  }
}
console.log(count);
