//두 수 비교하기

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map((val) => +val);
const [a, b] = input;

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
