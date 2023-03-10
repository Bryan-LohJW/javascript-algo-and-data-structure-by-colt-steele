**Binary Search Trees (BST)**

- performs searching really quickly
- just have to make comparisons with the target value and current node
- keep traversing until reach a leaf or find the value

```js
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
  //   insert(value) { // my implementation of recursive insert
  //     let newNode = new Node(value);
  //     if (!this.root) {
  //       this.root = newNode;
  //     }
  //     const insertHelper = (newNode, currentNode) => {
  //       if (value === current.value) return undefined;
  //       if (newNode.value < currentNode.value) {
  //         if (!currentNode.left) {
  //           currentNode.left = newNode;
  //           return this;
  //         }
  //         return insertHelper(newNode, currentNode.left);
  //       }
  //       if (newNode.value > currentNode.value) {
  //         if (!currentNode.right) {
  //           currentNode.right = newNode;
  //           return this;
  //         }
  //         return insertHelper(newNode, currentNode.right);
  //       }
  //     };
  //     return insertHelper(newNode, this.root);
  //   }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else current = current.left;
      }
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else current = current.right;
      }
    }
  }
  //   find(value) { // my implementation of recursive insert
  //     if (!this.root) return false;
  //     let findHelper = (value, node) => {
  //       if (value === node.value) return true;
  //       if (value < node.value) {
  //         if (!node.left) return false;
  //         return findHelper(value, node.left);
  //       }
  //       if (value > node.value) {
  //         if (!node.right) return false;
  //         return findHelper(value, node.right);
  //       }
  //     };
  //     return findHelper(value, this.root);
  //   }
  find(value) {
    if (!this.root) return null;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
    // return current; // depends on implementation
  }
}
```

Inserting

- inserting values into the right place in the tree

- pseudocode, can be done iteratively or recursively

```
    create a new node
    starting at the root
    - check if there is a root, if not the root now becomes that new node
    - if there is a root, check if the value of the new node is greater than or less than the value of the root
    - if it is greater
    - - check to see if there is a node to the right
    - - - if there is, move to that node and repeat these steps
    - - - if there is not, add that node as the right property
    - if it is less
    - - check to see if there is a node to the left
    - - - if there is, move to that node and repeat these steps
    - - - if there is not, add that node as the left property
```

Finding

- finding whether a value is within the tree

- pseudocode

```
    starting at the root
    check if there is a root, if not we are done
    if there is a root, check if the value of the new node is the value we are looking for. if it is, we are done
    if not check to see if the value is greater than or less than the value of the root
    if it is greater
    - check to see if there is a node to the right
    - - if there is, move to that node and repeat these steps
    - - if there is not, we are done searching
    if it is less
    - check to see if there is a node to the left
    - - it there is, move to that node and repeat these steps
    - - if there is not, we are done searching
```

Big O of BST

- Insertion O(log n)
- Searching O(log n)

- but these are not guaranteed.
- the worst case is if the values are inserted in a sorted fashion, will form a structure similar to a singly linked list, thereby searching and insertion will be O(n)
- try to have the root be the median of the dataset if possible
