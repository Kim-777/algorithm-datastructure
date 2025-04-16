// 최대 매출 알고리즘

function solution(sales, day) {
  let lt = 0;
  let max = 0;
  let now = 0;

  for (let i = 0; i < day; i++) {
    max += sales[i];
    now += sales[i];
  }

  for (let rt = day; rt < sales.length; rt++) {
    now = now + sales[rt] - sales[lt++];
    max = Math.max(max, now);
    console.log('max', max);
  }

  return max;
}

const sales = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const day = 3;

solution(sales, day);
// console.log(solution(sales, day));
