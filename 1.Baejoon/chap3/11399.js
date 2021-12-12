// ATM

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

let people = input[1].split(" ");
let delay = 0;
let result = 0;
people.sort(function (a, b) {
  return a - b;
});

for (i = 0; i < people.length; i++) {
  delay += +people[i];
  result += delay;
}
console.log(result);
