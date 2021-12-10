// 제로

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

let stack = [];
let sum = 0;
for (i = 1; i <= input[0]; i++) {
  if (input[i] == 0) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}
for (z of stack) {
  sum += z;
}
console.log(sum);
