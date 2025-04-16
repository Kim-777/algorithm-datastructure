// 넓이 우선 탐색의 개념을 공부해봅니다.
// BFS는 queue를 이용한 탐색 방법입니다.


function solution() {

    let answer ="";
    let queue = [];

    queue.push(1);
    while(queue.length) {
        let v =queue.shift();
        answer+= v + " ";
        for(let nv of [v*2, v*2+1]) {
            if(nv>7) continue;
            queue.push(nv);
        }

    }

    return answer;

}

console.log(solution());