//  which takes in an array of numbers and returns the product of them all.

// 매개변수로 받는 배열의 원소들을 합한 값을 리턴해주는 함수를 작성합니다.

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));
