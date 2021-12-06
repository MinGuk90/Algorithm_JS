//팀이름 정하기

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let L = 0;
let O = 0;
let V = 0;
let E = 0;

let per = 0;

for (i of input[0]) {
  i == "L" ? L++ : i == "O" ? O++ : i == "V" ? V++ : i == "E" ? E++ : 0;
}

for (let j = 1; j <= input[1]; j++) {
  let lc = L,
    oc = O,
    vc = V,
    ec = E;

  for (i of input[1 + j]) {
    i == "L" ? lc++ : i == "O" ? oc++ : i == "V" ? vc++ : i == "E" ? ec++ : 0;
  }
  result =
    ((lc + oc) * (lc + vc) * (lc + ec) * (oc + vc) * (oc + ec) * (vc + ec)) %
    100;
  if (result > per) {
    per = result;
    input[2] = input[1 + j];
  } else if (result === per) {
    if (input[2] > input[1 + j]) {
      input[2] = input[1 + j];
    }
  }
}
console.log(input[2]);
