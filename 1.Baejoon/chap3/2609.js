//최대공약수와 최소공배수

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

let max = 0;
let min = 0;

if (input[0] > input[1]) {
  max = input[0];
  min = input[1];
} else {
  max = input[1];
  min = input[0];
}

function divide(max, min) {
  let a = max % min;
  if (a == 0) {
    return min;
  }
  return divide(min, a);
}
let i = divide(max, min);
let j = (max / i) * (min / i) * i;
console.log(i);
console.log(j);
