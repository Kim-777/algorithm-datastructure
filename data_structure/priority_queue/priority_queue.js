class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityHeapQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);

    this.queue.push(newNode);

    if (this.queue.length === 1) return;

    this.bubbleUp();
  }

  bubbleUp() {
    let nowIndex = this.queue.length - 1;
    const element = this.queue[nowIndex];

    while (nowIndex > 0) {
      let parentIndex = Math.floor((nowIndex - 1) / 2);
      let parent = this.queue[parentIndex];
      if (element.priority >= parent.priority) break;
      this.queue[nowIndex] = parent;
      this.queue[parentIndex] = element;
      nowIndex = parentIndex;
    }
  }

  dequeue() {
    const min = this.queue[0];
    const end = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }

    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.queue.length;
    const element = this.queue[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.queue[idx] = this.queue[swap];
      this.queue[swap] = element;
      idx = swap;
    }
  }
}

const priorityQueue = new PriorityHeapQueue();
priorityQueue.enqueue(1, 3);
priorityQueue.enqueue(2, 2);
priorityQueue.enqueue(2, 5);
priorityQueue.enqueue(10, 1);

console.log("priorityQueue ::::: ", priorityQueue);

priorityQueue.dequeue();
console.log("priorityQueue ::::: ", priorityQueue);
