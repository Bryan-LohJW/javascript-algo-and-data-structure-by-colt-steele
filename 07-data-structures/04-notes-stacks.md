**Stacks**

What is a stack?

- A collection of data that follows the LIFO data structure
- The last element added to the stack will be the first element removed from the stack

How is it used?

- Think about a pile of something, such as a stack of plates. The first thing we add in is the last to be removed, and the last thing we add in is the first to be removed

Where stacks are used

- managing function invocations
- undo / redo
- routing (the history object) is treated like a stack

Array Implementation

```js
let stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop(); // google
stack.pop(); // instagram
stack.push("amazon");
stack.pop(); // amazon
```

- As long as always use push and pop OR shift and unshift to add and remove data, it will behave like a stack

Linked List Implementation

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
```

Push pseudocode

```
    the function should accept a value
    create a new node with that value
    if there are no nodes in the stack, set the first and last property to be the newly created node
    If there is at least one node, create a variable that stores the current first property on the stack
    reset the first property to be the newly created nide
    set the next property on the node to be the previously created variable
    increment the size of the stack by 1
```

Pop pseudocode

```
    if there are no nodes in the stack, return null
    create a temporary variable to store the first property on the stack
    if there is only 1 node, set the first and last property to be null
    if there is more than one node, set the first property to be the next property on the current first
    decrement the size by 1
    return the value of the removed node;
```

The big o of stacks

- insertion O(1)
- removal O(1)
- searching O(n)
- access O(n)
