class MaxTreeHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    if (this.values.length === 1) return this.values;
    const helper = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] > this.values[parentIndex]) {
        const temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;

        helper(parentIndex);
      }
    };

    helper(this.values.length - 1);

    return this.values;
  }
}

const treeHeap = new MaxTreeHeap();

treeHeap.insert(1);
treeHeap.insert(2);
treeHeap.insert(3);

console.log(treeHeap);
