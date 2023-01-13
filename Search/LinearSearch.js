// which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// Don't use indexOf to implement this function!

// 매개변수로 받은 array에서 target과 일치하는 요소의 인덱스를 반환하는 함수 입니다.
function linearSearch(arr, target) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return index;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
