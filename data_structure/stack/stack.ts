class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size += 1;
  }
  pop() {
    if (this.first === null) {
      return undefined;
    }

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size -= 1;

    return temp.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack);
