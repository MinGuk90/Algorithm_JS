//오각형, 오각형, 오각형...

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let color = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

let a = color.indexOf(input[0]) * 10;
let b = color.indexOf(input[1]);
let result = (a + b) * 10 ** color.indexOf(input[2]);
console.log(result);
