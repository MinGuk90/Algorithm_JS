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
