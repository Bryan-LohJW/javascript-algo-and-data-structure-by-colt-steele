**Breadth-First Search**

Iterative steps

- Create a queue and a variable to store the values of nodes visited
- place the root node in the queue
- loop as long as there is anything in the queue
- - dequeue a node from the queue and push the value of the node into the variable that stores the nodes
- - if there is a left property on the node dequeued, add it to the queue
- - if there is a right property on the node dequeued, add it to the queue
- return the variable that stores the values

```js
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
```
