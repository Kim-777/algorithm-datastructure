function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

const a = 5;
const b = 24;

console.log(solution(a, b));
