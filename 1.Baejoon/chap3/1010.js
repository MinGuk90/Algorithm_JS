// 다리 놓기

const input = require("fs").readFileSync("dev/stdin").toString().split("\r\n");

let casenum = input.shift();

const f = num => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};

for (let i = 0; i < casenum; i++) {
  let [a, b] = input[i].split(" ");
  let bridge = parseInt(f(b) / (f(a) * f(b - a)) + 0.5);
  console.log(bridge);
}

//Math 함수 사용
const input = require("fs").readFileSync("dev/stdin").toString().split("\r\n");

let casenum = input.shift();

const f = num => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};

for (let i = 0; i < casenum; i++) {
  let [a, b] = input[i].split(" ");
  let bridge = Math.round(f(b) / (f(a) * f(b - a)));
  console.log(bridge);
}
