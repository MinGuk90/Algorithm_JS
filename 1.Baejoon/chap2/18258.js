// 큐 2

// 시간 초과
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

let queue = [];
let result = [];
let a = 0;

for (i = 1; i <= input[0]; i++) {
  if (input[i] == "size") {
    result.push(queue.length);
  } else if (input[i] == "empty") {
    if (queue.length == 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (input[i] == "front") {
    if (queue.length == 0) {
      result.push(-1);
    } else {
      result.push(queue[0]);
    }
  } else if (input[i] == "pop") {
    if (queue.length == 0) {
      result.push(-1);
    } else {
      a = queue.splice(0, 1);
      result.push(a);
    }
  } else if (input[i] == "back") {
    if (queue.length == 0) {
      result.push(-1);
    } else {
      result.push(queue[queue.length - 1]);
    }
  } else {
    queue.push(input[i].split(" ")[1]);
  }
}
console.log(result.join("\n"));

// pointer 개념을 index로 담아 품

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");

let queue = [];
let result = [];
let index = 0;
let a = 0;

for (i = 1; i <= input[0]; i++) {
  if (input[i] == "size") {
    result.push(queue.length - index);
  } else if (input[i] == "empty") {
    if (queue.length == index) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else if (input[i] == "front") {
    if (queue.length == index) {
      result.push(-1);
    } else {
      result.push(queue[index]);
    }
  } else if (input[i] == "pop") {
    if (queue.length == index) {
      result.push(-1);
    } else {
      a = queue[index];
      index++;
      result.push(a);
    }
  } else if (input[i] == "back") {
    if (queue.length == index) {
      result.push(-1);
    } else {
      result.push(queue[queue.length - 1]);
    }
  } else {
    queue.push(input[i].split(" ")[1]);
  }
}
console.log(result.join("\n"));
