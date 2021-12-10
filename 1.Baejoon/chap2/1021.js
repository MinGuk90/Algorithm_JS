//회전하는 큐

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

let queue = [];
let a = 0;
let range = input[0].toString().split(" ");

function left() {
  a = queue.shift();
  queue.push(a);
}

function right() {
  a = queue.pop();
  queue.unshift(a);
}

for (i = 1; i <= range[0]; i++) {
  queue.push(i);
}
const data = input[1].toString().split(" ").map(Number);

let count = 0;
data.forEach((data) => {
  let index = queue.indexOf(data);
  if (queue.length / 2 > index) {
    while (1) {
      if (queue[0] == data) {
        queue.shift();
        break;
      }
      left();
      count++;
    }
  } else {
    while (1) {
      if (queue[0] == data) {
        queue.shift();
        break;
      }
      right();
      count++;
    }
  }
});
console.log(count);
