//스택 수열

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let stack = [];
let result = [];
let count = 1;
let is = false;
for (let i = 1; i <= input[0]; i++) {
  while (count <= input[i]) {
    stack.push(count);
    result.push("+");
    count++;
  }

  if (input[i] == stack[stack.length - 1]) {
    stack.pop();
    result.push("-");
  } else {
    is = true;
    break;
  }
}
if (is) {
  console.log("NO");
} else {
  console.log(result.join("\n"));
}
