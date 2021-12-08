// 괄호

const input = require("fs").readFileSync("example.txt").toString().split("\n");

for (i = 1; i <= input[0]; i++) {
  let a = [];
  for (z of input[i]) {
    if (z == ")") {
      if (a.pop() !== "(") {
        a.push(z);
        break;
      }
    }
    if (z == "(") {
      a.push(z);
    }
  }
  if (a.length == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
