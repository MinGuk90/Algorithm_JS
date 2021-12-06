//엄청난 부자2

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
let answer = input[0] / input[1] + "\n";
answer += input[0] % input[1];
console.log(answer);
