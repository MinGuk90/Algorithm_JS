//ACM 호텔

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let rooms = input[i].split(" ");
  let floor = rooms[2] % rooms[0] == 0 ? rooms[0] : rooms[2] % rooms[0];
  let room = rooms[2] / rooms[0];
  console.log(Math.ceil(floor * 100 + room));
}
