class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    if (this.values.length === 1) return this.values;
    this.bubbleUp();
    // const helper = (index) => {
    //   const parentIndex = Math.floor((index - 1) / 2);

    //   if (this.values[index] > this.values[parentIndex]) {
    //     const temp = this.values[index];
    //     this.values[index] = this.values[parentIndex];
    //     this.values[parentIndex] = temp;

    //     helper(parentIndex);
    //   }
    // };

    // helper(this.values.length - 1);

    return this.values;
  }

  bubbleUp() {
    let nowIndex = this.values.length - 1;
    const element = this.values[nowIndex];

    while (nowIndex > 0) {
      const parentIndex = Math.floor((nowIndex - 1) / 2);

      const parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[nowIndex] = parent;
      nowIndex = parentIndex;
    }
  }
  // 직접 만든 extractMax
  // extractMax() {
  //   if (this.values.length <= 1) return this.values.pop();

  //   let idx = 0;
  //   console.log("idx ::::: ", idx);
  //   this.values[0] = this.values.pop();
  //   console.log("this.values :::: ", this.values);
  //   console.log("this.values[0] :::: ", this.values[0]);
  //   while (true) {
  //     let selectedIdx;
  //     let leftIdx = 2 * idx + 1;
  //     let rightIdx = 2 * idx + 2;

  //     if (leftIdx >= this.values.length - 1) break;

  //     if (
  //       this.values[idx] > this.values[leftIdx] &&
  //       this.values[idx] > this.values[rightIdx]
  //     )
  //       break;

  //     if (this.values[leftIdx] > this.values[rightIdx]) {
  //       selectedIdx = leftIdx;
  //     } else {
  //       selectedIdx = rightIdx;
  //     }

  //     let temp = this.values[idx];
  //     this.values[idx] = this.values[selectedIdx];
  //     this.values[selectedIdx] = temp;
  //     idx = selectedIdx;
  //   }
  // }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(1);
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(3);
maxBinaryHeap.insert(4);
maxBinaryHeap.insert(10);
maxBinaryHeap.insert(100);
console.log(maxBinaryHeap);
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap);
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();

console.log(maxBinaryHeap);
