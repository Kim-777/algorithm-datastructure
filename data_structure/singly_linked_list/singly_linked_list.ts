class Node {
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: string) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tempTail = this.tail;
      tempTail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;

    // if (this.length === 1) {
    //   const tempNode = this.head;
    //   this.head = null;
    //   this.tail = null;
    //   this.length--;
    //   return tempNode;
    // }

    // let nowLength = 1;
    // let nowNode = this.head;
    // while (nowLength < this.length - 1) {
    //   nowLength++;
    //   nowNode = nowNode.next;
    // }

    // this.length--;
    // const tempNode = nowNode.next;
    // nowNode.next = null;
    // this.tail = nowNode;

    // return tempNode;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.length--;
    this.head = currentHead.next;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      // console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;

    // const foundNode = this.get(index - 1);
    // if (foundNode) {
    //   const newNode = new Node(value);
    //   this.length++;
    //   if (foundNode.next) {
    //     newNode.next = foundNode.next;
    //     foundNode.next = newNode;
    //     return true;
    //   }

    //   foundNode.next = newNode;
    //   this.tail = newNode;
    //   return true;
    // }

    // return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;

    previousNode.next = removed.next;

    this.length--;

    return removed;
  }

  reverse() {
    if (!this.length) return undefined;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// list.shift();
// list.shift();
// list.shift();
// list.unshift("new hi");

// list.set(2, "new 2");
// list.insert(3, "new new");
// list.insert(4, "happy");
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.remove(0));

// console.log(list.set(5, "new"));
// console.log(list.get(2));
// console.log(list);

// list.reverse();
list.print();

list.reverse();
list.print();

console.log(list);
