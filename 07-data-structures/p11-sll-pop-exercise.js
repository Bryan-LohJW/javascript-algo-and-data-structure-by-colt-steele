class Node {
	constructor(val) {
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
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;

		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let node = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let newTail = this.head;
			// need to be two less than the length because don't want to reach the last one
			for (let i = 0; i < this.length - 2; i++) {
				newTail = newTail.next;
			}
			newTail.next = null;
			this.tail = newTail;
		}
		this.length--;
		return node;
	}
}
