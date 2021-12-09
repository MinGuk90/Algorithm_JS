//달팽이는 올라가고 싶다.

const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

console.log(Math.ceil((input[2] - input[0]) / (input[0] - input[1])) + 1);
