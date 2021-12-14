//분해 합

const input = require("fs").readFileSync("dev/stdin").toString();

let answer = 0;
let sum = 0;
let nn = +input;
for (let i = 1; i <= nn; i++) {
  let check = i.toString();

  for (let j = 0; j < check.length; j++) {
    sum += +check[j];
  }
  sum += i;
  if (sum == nn) {
    answer = i;
    break;
  }
  sum = 0;
}
console.log(answer);

//도도 (재귀함수 사용)
const input = require("fs").readFileSync("dev/stdin").toString();

let an = 0;
let sum = 0;
function t1(num) {
  if (num == 0) {
    return sum;
  } else {
    let a = num % 10;
    if (a == 0) {
      return sum;
    } else {
      sum += +a;
      return t1(parseInt(num / 10));
    }
  }
}

for (let i = 1; i < +input; i++) {
  let ss = t1(i, 10);
  ss += i;
  if (ss == +input) {
    an = i;
    break;
  } else {
    sum = 0;
  }
}
console.log(an);
