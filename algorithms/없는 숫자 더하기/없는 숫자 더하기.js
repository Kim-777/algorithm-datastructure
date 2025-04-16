function solution(numbers) {
  return 45 - numbers.reduce((p, c) => p + c, 0);
}
