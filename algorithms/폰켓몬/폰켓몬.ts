function solution(nums) {
  const answer = Math.min(new Set(nums).size, Math.floor(nums.length / 2));

  console.log(answer);

  return answer;
}

console.log(solution([3, 1, 2, 3]));

console.log((10).toString(2));
