class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): BinarySearchTree<T> | void {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let nowNode: Node<T> = this.root;

    while (true) {
      if (nowNode.value === newNode.value) {
        return;
      }
      if (nowNode.value < newNode.value) {
        if (!nowNode.right) {
          nowNode.right = newNode;
          return;
        } else {
          nowNode = nowNode.right;
        }
      } else if (nowNode.value > newNode.value) {
        if (!nowNode.left) {
          nowNode.left = newNode;
          return;
        } else {
          nowNode = nowNode.left;
        }
      }
    }
  }

  find(value: T): Node<T> | null {
    if (this.root === null) return null;
    let current: Node<T> | null = this.root;
    let found: boolean = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }

  contains(value: T): boolean {
    if (!this.root) return false;

    let current: Node<T> = this.root;

    while (true) {
      if (current.value === value) return true;
      if (current.value > value) {
        if (!current.left) return false;
        current = current.left;
      } else if (current.value < value) {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }

  BFS(): T[] {
    const queue: Node<T>[] = [];
    const data: T[] = [];

    if (this.root === null) return [];

    let node: Node<T> = this.root;
    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift()!;
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      data.push(node.value);
    }

    return data;
  }

  DFSPreOrder(): T[] {
    const data: T[] = [];
    if (this.root === null) return data;

    function traverse(node: Node<T>): void {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSPostOrder(): T[] {
    const data: T[] = [];
    if (this.root === null) return data;

    function traverse(node: Node<T>): void {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder(): T[] {
    const data: T[] = [];
    if (this.root === null) return data;

    function traverse(node: Node<T>): void {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

const tree = new BinarySearchTree<number>();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);
tree.insert(11);
tree.insert(15);
tree.insert(17);
// console.log(tree.find(16));
// console.log(tree.contains(15));

console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

//          10
//      7         15
//        9    11    17
//
//
