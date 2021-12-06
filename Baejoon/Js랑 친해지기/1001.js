//A-B

let input = require("fs").readFileSync("example.txt").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a - b);
