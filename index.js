// 백준 제출시 "/dev/stdin"
// VS code    "example.txt"

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (i = 1; i <= input[0]; i++) {}
