//엄청난 부자2

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);
const [a, b] = input;

let answer = a / b + "\n";

answer += a % b;

console.log(answer);
