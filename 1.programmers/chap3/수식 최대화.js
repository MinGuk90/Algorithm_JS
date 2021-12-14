//[카카오 인턴] 수식 최대화
let expression = "100-200*300-500+20";

function solution(expression) {
  const arr = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  let num = expression.split(/[^0-9]/).map(Number);

  let sign = [];
  let maxNum = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == "+" || expression[i] == "-" || expression[i] == "*") {
      sign.push(expression[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const copyNum = num.slice();
    const copySign = sign.slice();
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < copySign.length; k++) {
        if (copySign[k] == arr[i][j]) {
          if (copySign[k] == "*") {
            copyNum[k] *= copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          } else if (copySign[k] == "+") {
            copyNum[k] += copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          } else if (copySign[k] == "-") {
            copyNum[k] -= copyNum[k + 1];
            copyNum.splice(k + 1, 1);
            copySign.splice(k, 1);
            k--;
          }
        }
      }
    }
    if (Math.abs(copyNum[0]) >= maxNum) {
      maxNum = Math.abs(copyNum[0]);
    }
  }

  return maxNum;
}
console.log(solution(expression));
