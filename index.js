// 백준 제출시 "/dev/stdin"
// VS code    "example.txt"

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const ts = +input.shift();
let result = "";

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

const lcm = (a, b) => (a * b) / gcd(a, b);

for (let i = 0; i < ts; i++) {
  let num = input[i].split(" ").map((a) => +a);

  let a = num[0];
  let b = num[1];
  result = +lcm(a, b);
  console.log(result);
}
