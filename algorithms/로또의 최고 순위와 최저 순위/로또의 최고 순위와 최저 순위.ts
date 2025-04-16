// 프로그래머스 lv.1

function solution(lottos, win_nums) {
  let answer = [];
  const check = [6, 6, 5, 4, 3, 2, 1];
  const notZeroLottos = lottos.filter((lottos) => lottos !== 0);
  const zeroNums = lottos.length - notZeroLottos.length;
  const winnerNumsObj = {};
  let sum = 0;
  win_nums.forEach((num) => {
    winnerNumsObj[num] = true;
  });

  notZeroLottos.forEach((num) => {
    if (winnerNumsObj[num]) {
      sum++;
    }
  });

  answer = [check[sum + zeroNums], check[sum]];
  return answer;
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));

lottos = [0, 0, 0, 0, 0, 0];
win_nums = [38, 19, 20, 40, 15, 25];
console.log(solution(lottos, win_nums));
