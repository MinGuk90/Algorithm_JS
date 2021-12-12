//블랙잭

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let a = input[0].split(" ");
let cards = input[1].split(" ");
let sum = 0;

for (j = 0; j < a[0] - 2; j++) {
  for (k = j + 1; k < a[0] - 1; k++) {
    for (q = k + 1; q < a[0]; q++) {
      let check = +cards[j] + +cards[k] + +cards[q];
      if (check <= a[1] && sum < check) {
        sum = check;
      }
    }
  }
}
console.log(sum);
