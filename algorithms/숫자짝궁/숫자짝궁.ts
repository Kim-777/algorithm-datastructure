function solution(X, Y) {
  let answer = '';
  let lp = 0;
  let rp = 0;
  const nums = [];
  const leftNumbers = X.split('').sort((a, b) => a - b);
  const rightNumber = Y.split('').sort((a, b) => a - b);
  // console.log(leftNumbers);
  // console.log(rightNumber);
  while (lp < leftNumbers.length && rp < rightNumber.length) {
    if (leftNumbers[lp] === rightNumber[rp]) {
      nums.push(leftNumbers[lp]);
      lp++;
      rp++;
    }
    if (leftNumbers[lp] > rightNumber[rp]) rp++;
    if (leftNumbers[lp] < rightNumber[rp]) lp++;
  }

  answer = nums.sort((a, b) => b - a).join('');

  if (Number(answer) === 0) answer = '0';

  return answer;
}

// let X = "100";
// let Y = "2345";

// solution(X, Y);

X = '100';
Y = '203045';

console.log(solution(X, Y));
