let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let stack = [];
  let count = 0;
  let doll = "";

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        doll = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;
        if (stack[stack.length - 1] == doll) {
          stack.pop();
          count += 2;
          break;
        } else {
          stack.push(doll);
          break;
        }
      }
    }
  }
  return count;
}

console.log(solution(board, moves));
