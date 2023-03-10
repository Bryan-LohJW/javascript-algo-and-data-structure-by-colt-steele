**Doubly Linked List**

- Almost identical to singly linked lists, except every node has another pointer, to the previous node

Base classes

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = get(index - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined8;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
```

Pushing

- Adding a node to the end of a doubly linked list

- pseudocode

```
  create a new node with the value passed to the function
  if the head property is null, set the head and tail to be the newly created node
  if not, set the next property on the tail to be that node
  set the previous property on the newly created node to be the tail
  set the tail to be the newly created node
  increment the length
  return the doubly linked list
```

Popping

- removing a node from the end of the doubly linked list

- pseudocode

```
   if there is no head, return undefined
   store the current tail in a variable to return later
   if the length is 1, set the head and tail to be null
   update the tail to be the previous node
   set the newTail's next to null
   set the currentTail's prev to null
   decrement the length
   return the value removed
```

Shifting

- Removing a node from the beginning of the doubly linked list

- pseudocode

```
    if length is 0, return undefined
    store the current head property in a variable
    if the length is one
    - set the head to be null
    - set the tail to be null
    update the head to be the next of the old head
    set the head's prev property to be null
    set the old head's next to null
    decrement the length
    return old head;
```

Unshifting

- Adding a node to the beginning of the doubly linked list
- pseudocode

```
    create a new node with the value passed to the function
    if the length is 0
    - set the head to be the new node
    - set the tail to be the new node
    otherwise
    - set the prev property on the head of the list to be the new node
    - set the next property of on the new node to be the head property
    - update the head to be the new node
    increment the length
    return the list
```

Get

- accessing a node in a doubly linked list by its position
- the advantage of doubly linked list over singly linked list is that we can start from the tail and work backwards using previous, if the index is closer to the tail
- pseudocode

```
    if the index is less than 0 or greater or equal to the length, return null
    if the index is less than or equal to half the length of the list
    - loop through the list starting from the head and loop towards the middle
    - return the node once it is found
    if the index is greater than half the length of the list
    - loop through the list starting from the tail and loop towards the middle
    - return the node once it is found
```

Set

- Replacing the value of a node to the input in a doubly linked list
- pseudocode

```
 create a variable which is the result of the get method at the index passed to the function
 - if the get method returns a valid node, set the value of that node to be the value passes to the function
 - return true;
 return false;
```

Insert

- adding a node in a doubly linked list by a certain position

- pseudocode

```
  if the index is less than zero or greater than the length return false
  if the index is 0, unshift
  if the index is the same as the length push
  use the get method to access the index-1
  set the next and prev properties on the correct nodes to link everything together
  increment the length
  return true
```

Remove

- removing a node in a doubly linked list by a certain position

- pseudocode

```
  if the index is less than zero or greater than or equal to the length return undefined
  if the index is 0, shift
  if the index is the same as the length-1, pop
  use the get method to retrueve the item to be removed
  update the next and prev properties to remove the found node from the list
  set next and prev to null on the found node
  decrement the length
  return the removed node
```

The big O of doubly linked list

- Insertion O(1)
- Removal O(1)
- Searching O(n)
- Access O(n), technically O(n/2) but simplifies to O(n)

Almost identical to Singly Linked List, except there is an additional pointer to previous nodes
Better than singly linked lists for finding nodes and can be done in half the time
However, they do take up more memory considering the extra pointer
