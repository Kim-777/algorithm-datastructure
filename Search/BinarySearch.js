// array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, target) {
  let firstPoint = 0;
  let lastPoint = arr.length - 1;

  while (lastPoint > firstPoint) {
    let distance = Math.ceil((lastPoint - firstPoint) / 2);

    // console.log("lastPoint ,", lastPoint);
    // console.log("firstPoint ,", firstPoint);
    // console.log("distance ,", distance);

    if (arr[distance + firstPoint] === target) {
      return distance + firstPoint;
    } else if (arr[distance + firstPoint] > target) {
      // console.log("큼");
      lastPoint = distance + firstPoint;
    } else {
      // console.log("작음");
      firstPoint = distance + firstPoint;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 28));
