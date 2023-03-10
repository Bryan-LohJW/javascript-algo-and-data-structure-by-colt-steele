class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
			this.length++;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
			this.length++;
		}
		return this;
	}
	reverse() {
		if (this.length <= 1) return this;
		let current = this.head;
		let prev = null;
		let next = current.next;
		[this.head, this.tail] = [this.tail, this.head];
		for (let i = 0; i < this.length; i++) {
			current.next = prev;
			current.prev = next;
			prev = current;
			current = next;
			if (next.next) {
				next = next.next;
			}
		}
		return this;
	}
}
