**Queues**

- a data structure to add and remove data from
- FIFO data structure, First In First Out

Used in programming

- background tasks
- uploading resources
- printing / task processing

Array Implementation

```js
let q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");
q.shift(); // FIRST
q.shift(); // SECOND
```

- not ideal because either adding or removing data will have time complexity of O(n)

Linked List Implementation

- only can add to the end, and remove from the start, for performance

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
```

Big O of queues

- insertion O(1)
- removal O(1)
- searching O(n)
- access O(n)
