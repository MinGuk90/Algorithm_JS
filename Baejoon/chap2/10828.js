// 스택

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let result = [];
let stack = [];
for (let i = 1; i <= input[0]; i++) {
  if (input[i] == "top") {
    if (stack.length == 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
  } else if (input[i] == "size") {
    result.push(stack.length);
  } else if (input[i] == "pop") {
    if (stack.length == 0) {
      result.push(-1);
    } else {
      result.push(stack.pop());
    }
  } else if (input[i] == "empty") {
    if (stack.length == 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else {
    stack.push(input[i].split(" ")[1]);
  }
}
console.log(result.join("\n"));
