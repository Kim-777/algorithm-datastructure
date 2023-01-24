function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentValue) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }

  return arr;
}

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     index = i;
//     while (arr[index - 1] > arr[index]) {
//       let temp = arr[index - 1];
//       arr[index - 1] = arr[index];
//       arr[index] = temp;
//       index--;
//     }
//   }

//   return arr;
// }

// console.log(insertionSort([1, 3, 2222, 6, 111, 4, 8, 10, 14, 11, 13]));
console.log(insertionSort([100, 3, 6, 4, 8, 10, 14, 11, 13]));

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    console.log("j : ", j);
    arr[j + 1] = currentValue;
  }

  return arr;
}

// console.log(insertionSort2([1, 3, 2222, 6, 111, 4, 8, 10, 14, 11, 13]));
console.log(insertionSort2([100, 3, 6, 4, 8, 10, 14, 11, 13]));
