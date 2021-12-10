//잃어버린 괄호

const input = require("fs").readFileSync("dev/stdin").toString().trim();

let temp = "";
let temps = [];
let calc = [];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == "-" || input[i] == "+") {
    temps.push(+temp);
    temps.push(input[i]);
    temp = "";
  } else {
    temp += input[i];
  }
  if (input.length == i + 1) {
    temps.push(+temp);
  }
}
for (let j = temps.length - 1; j >= 0; j--) {
  if (temps[j] == "-") {
    calc.push(sum);
    sum = 0;
  } else if (temps[j] == "+") {
  } else {
    sum += temps[j];
  }
}
for (z of calc) {
  sum -= z;
}
console.log(sum);
