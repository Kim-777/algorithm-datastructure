/*
조합의 경우수(메모이제이션)

▣ 입력예제 1 
5 3
▣ 출력예제 1
10
▣ 입력예제 2 
33 19
▣ 출력예제 2
818809200
*/

//조합수를 프로그래밍하는 법을 연습합니다.

/* 깊이 탐색으로 구하는 방법(메모이제이션 사용 x) ==> 오래걸림
function solution(n, r) {
    let answer;

    function DFS(n, r) {
        if(n===r || r===0) return 1;
        else return DFS(n-1, r-1) + DFS(n-1, r);
    }

    answer=DFS(n, r);
    return answer;
}
*/

// 메모이제이션을 사용하는 방법
function solution(n, r) {
  let answer;
  const dy = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  console.log(dy);
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
