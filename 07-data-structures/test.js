class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  breathFirstSearch() {
    let q = [this.root];
    let store = [];
    const bfsHelper = (q, store, dQNode) => {
      console.log(q);
      if (!dQNode) return;
      store.push(dQNode);
      if (dQNode.left) q.push(dQNode.left);
      if (dQNode.right) q.push(dQNode.right);
      return bfsHelper(q, store, q.shift());
    };
    bfsHelper(q, store, q.shift());
    return store;
  }
}

let tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log(tree);
console.log(tree.breathFirstSearch());
