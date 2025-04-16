function solution(sizes) {
  let answer = 0;
  let n = 0;
  let m = 0;
  for (const [w, h] of sizes) {
    const min = Math.min(w, h);
    const max = Math.max(w, h);

    n = Math.max(min, n);
    m = Math.max(max, m);
  }

  answer = n * m;

  return answer;
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));

sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

console.log(solution(sizes));
