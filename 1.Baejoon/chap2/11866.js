//요세푸스 문제 0

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let queue = [];
let result = [];
for (i = 1; i <= input[0]; i++) {
  queue.push(i);
}

function left() {
  add = queue.shift();
  queue.push(add);
}

while (queue != 0) {
  for (i = 1; i <= input[1]; i++) {
    left();
  }
  result.push(queue.pop());
}
console.log("<" + result.join(", ") + ">");
