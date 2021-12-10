//핸드폰 요금

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let call = input[1].split(" ");
let YC = 0;
let MC = 0;
for (i of call) {
  YC += parseInt(i / 30) * 10 + 10;
  MC += parseInt(i / 60) * 15 + 15;
}
YC < MC
  ? console.log("Y", YC)
  : YC > MC
  ? console.log("M", MC)
  : (YC = MC ? console.log("Y", "M", YC) : 0);
