class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let nowNode = this.root;

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

  contains(value) {
    if (this.root === null) return null;
    let current = this.root;
    let found = false;

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

  find(value) {
    if (!this.root) return false;

    let current = this.root;

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
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);
tree.insert(11);
tree.insert(15);
tree.insert(17);
// console.log("tree ::: ", tree);
// console.log(tree.find(16));
console.log(tree.contains(15));
