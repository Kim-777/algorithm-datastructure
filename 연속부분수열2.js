/*
function solution(arr, num) {
    let answer =0;
    let p1 = 0;

    for (p2 = 0; p2<arr.length; p2++) {
        let sum = arr[p2];
        p1 = p2+1;
        if(sum < num) {
            answer++;
            sum += arr[p1++];
            while(sum <= num) {
                sum +=arr[p1++];
                answer++;
            }
        }
    }

    return answer;
}
*/

function solution(arr, m) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for(let rt=0; rt<arr.length; rt++) {
        sum += arr[rt];
        while(sum > m) {
            sum -= arr[lt++];
        }
        answer += (rt - lt + 1);
    }

    return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(arr, 5));
