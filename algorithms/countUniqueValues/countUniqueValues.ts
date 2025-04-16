function countUniqueValues(arr) {
  const arrayLength = arr.length;

  if (arrayLength === 0) return 0;

  let firstPoint = 0;
  let secondPoint = 1;

  while (secondPoint !== arrayLength) {
    if (arr[firstPoint] === arr[secondPoint]) {
      secondPoint++;
    } else {
      arr[++firstPoint] = arr[secondPoint++];
    }
  }

  return firstPoint + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
