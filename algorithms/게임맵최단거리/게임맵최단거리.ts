/**
 * 
 * ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.

최단거리1_sxuruo.png

위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.

첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.} maps 
 * 
 */

function solution2(maps) {
  let answer = -1;
  const queue = [[1, 0, 0]];
  const N = maps.length;
  const M = maps[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  maps[0][0] = 0;

  while (queue.length) {
    const [L, row, column] = queue.shift();

    if (row === N - 1 && column === M - 1) {
      answer = L;
      break;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = row + dx[i];
        const ny = column + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          queue.push([L + 1, nx, ny]);
        }
      }
    }
  }

  console.log(maps);

  return answer;
}

function solution(maps) {
  const N = maps.length - 1;
  const M = maps[0].length - 1;
  const direction = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const queue = [[0, 0, 1]];
  maps[0][0] = 0;

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    if (x == N && y == M) {
      return count;
    }

    for (d of direction) {
      const next = [x + d[0], y + d[1], count + 1];
      if (maps[next[0]] && maps[next[0]][next[1]] && maps[next[0]][next[1]] === 1) {
        maps[next[0]][next[1]] = 0;

        queue.push(next);
      }
    }
  }
  return -1;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

const maps2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

console.log(solution2(maps));
console.log(solution2(maps2));
