// 터렛

const input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let circle = input[i].split(" ").map(Number);
  let target = 0;
  let plus = circle[2] + circle[5];
  let minus = Math.abs(circle[2] - circle[5]);
  let distance = Math.sqrt(
    (circle[0] - circle[3]) ** 2 + (circle[1] - circle[4]) ** 2,
  );

  if (distance === 0 && distance === minus) {
    target = -1;
  } else if (distance === plus || distance === minus) {
    target = 1;
  } else if (minus < distance && distance < plus) {
    target = 2;
  } else if (distance > plus || distance < minus) {
    target = 0;
  }
  console.log(target);
}
