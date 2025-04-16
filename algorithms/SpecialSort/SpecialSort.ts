/*
Special Sort(구글 인터뷰)
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다. 
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 
변함이 없어야 한다.

▣ 입력설명
첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진
다. 숫자 0은 입력되지 않는다.

▣ 출력설명
정렬된 결과를 출력한다.

▣ 입력예제 1 
8
1 2 3 -3 -2 5 6 -6

▣ 출력예제 1
-3 -2 -6 1 2 3 5 6
*/

// // 주석을 풀면 음의 정수는 내림차순, 양의 정수는 오름차순을 한 후, 합칩니다.
// function solution(arr) {

//     let answer = [];
//     let negative = [];

//     // 음수 정렬
//     /*for(let i=arr.length-1; i>0; i--)*/
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] < 0) {
//             negative.push(arr[i]);
//             // arr.splice(i, 1);
//             console.log(negative)
//         }
//     }

//     // negative.sort((a, b) => b - a)
//     // console.log(negative);
//     // console.log(arr);
//     answer = negative.concat(arr/*.sort((a, b) => a-b)*/);

//     return answer;
// }

// 버블 정렬로 풀수 있습니다.
function solution(arr) {
  const answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

const arr = [1, 2, 3, -3, -2, 5, -7, 8, 10, 6, -6, -111];
console.log(solution(arr));

function test(arr) {
  for (let x = 0; x < arr.length; x++) {
    console.log(x);
  }
}

function test2(arr) {
  for (let x = 0; x < arr[0]; x++) {
    console.log(x);
  }
}
