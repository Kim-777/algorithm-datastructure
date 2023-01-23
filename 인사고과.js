/**
 * 
문제 설명
완호네 회사는 연말마다 1년 간의 인사고과에 따라 인센티브를 지급합니다. 각 사원마다 근무 태도 점수와 동료 평가 점수가 기록되어 있는데 만약 어떤 사원이 다른 임의의 사원보다 두 점수가 모두 낮은 경우가 한 번이라도 있다면 그 사원은 인센티브를 받지 못합니다. 그렇지 않은 사원들에 대해서는 두 점수의 합이 높은 순으로 석차를 내어 석차에 따라 인센티브가 차등 지급됩니다. 이때, 두 점수의 합이 동일한 사원들은 동석차이며, 동석차의 수만큼 다음 석차는 건너 뜁니다. 예를 들어 점수의 합이 가장 큰 사원이 2명이라면 1등이 2명이고 2등 없이 다음 석차는 3등부터입니다.

각 사원의 근무 태도 점수와 동료 평가 점수 목록 scores이 주어졌을 때, 완호의 석차를 return 하도록 solution 함수를 완성해주세요.


 */

function solution(scores) {
  let answer = -1;

  const hero = scores[0];
  const heroNumber = scores[0][0] + scores[0][1];
  const scoresObj = {};
  const newScores = [];
  let maxA = 0;

  scores.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });

  scores.forEach(([a, b]) => {
    if (!scoresObj[a]) {
      scoresObj[a] = b;
    } else {
      scoresObj[a] = Math.max(scoresObj[a], b);
    }
    maxA = Math.max(maxA, a);
  });

  for (let i = 0; i < scores.length; i++) {
    const [a, b] = scores[i];
    let isHero = a === hero[0] && b === hero[1];
    let flag;
    if (a < maxA) {
      for (let i = a + 1; i <= maxA; i++) {
        if (scoresObj[i] > b) {
          if (isHero) return -1;
          flag = true;
          break;
        }
      }
      if (!flag) newScores.push(a + b);
    } else {
      newScores.push(a + b);
    }
  }

  newScores.sort((a, b) => b - a);

  for (let i = 0; i < newScores.length; i++) {
    if (newScores[i] === heroNumber) {
      return i + 1;
    }
  }

  return answer;
}

const arr = [
  [2, 2],
  [1, 4],
  [3, 2],
  [3, 2],
  [2, 1],
];

console.log(solution(arr));
