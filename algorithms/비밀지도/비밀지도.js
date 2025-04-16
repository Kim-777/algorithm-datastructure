function solution(n, arr1, arr2) {
  var answer = [];
  let arr1Board = [];
  let arr2Board = [];

  for (let i = 0; i < n; i++) {
    arr1Board.push(arr1[i].toString(2).padStart(n, "0").split(""));
    arr2Board.push(arr2[i].toString(2).padStart(n, "0").split(""));
  }

  // console.log(answer);
  // console.log(arr1Board);
  // console.log(arr2Board);

  for (let i = 0; i < n; i++) {
    let shop = "";
    for (let j = 0; j < n; j++) {
      if (Number(arr1Board[i][j]) + Number(arr2Board[i][j])) {
        shop += "#";
      } else {
        shop += " ";
      }
    }
    answer.push(shop);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
