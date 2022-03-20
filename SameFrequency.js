// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:
// fn(182, 281) true
// fn(34, 14) false
// fn(3589578, 5879385) true
// fn(22, 222) fals

// 시간 복잡도가 N이기 떄문에 매개변수 두 수 모두 루프를 도는 건 안됩니다. 하지만 하나는 루프를 돌 수 있기 떄문에 하나를 기준으로 잡고 로직을 작성하면 어떨까 생각했습니다.

// 가장 먼저 떠오른 방법은 일단 배열로 변환 후 sort 후 각 자리를 비교해주는 방법이었습니다.
function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  // 자리의 수가 같지 않다면 바로 false를 리턴해줍니다.
  if (str1.length !== str2.length) return false;

  const sortFn = (a, b) => a - b;

  const arr1 = [...str1].sort(sortFn);
  const arr2 = [...str2].sort(sortFn);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(sameFrequency(12111, 11112));
