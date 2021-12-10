// 최대 힙

// 용량 초과 값은 잘나옴
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let heap = [];

for (i = 1; i <= input[0]; i++) {
  if (input[i] != 0) {
    heap.push(input[i]);
  } else {
    if (heap.length == 0) {
      console.log("0");
    } else if (heap.length != 0) {
      let a = Math.max(...heap);
      heap.splice(heap.indexOf(a), 1);
      console.log(a);
    }
  }
}
