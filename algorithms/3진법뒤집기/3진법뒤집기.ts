/*
문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
*/

function solution(_number: number) {
  //n을 3진법으로 나타내야합니다.
  let answer = 0;
  let three = '';

  function DFS(_number) {
    if (_number === 0) return;
    else {
      DFS(parseInt(_number / 3));
      three += _number % 3;
    }
  }

  DFS(_number);

  three = three.split('').reverse().join('');

  answer = parseInt(three, 3);

  // console.log(answer);
  return answer;
}

solution(125);
