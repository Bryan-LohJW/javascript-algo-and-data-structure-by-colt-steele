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
	get(idx) {
		if (idx >= this.length || idx < 0) return null;
		let node = this.head;
		for (let i = 0; i < idx; i++) {
			node = node.next;
		}
		return node;
	}
	set(idx, val) {
		let node = this.get(idx);
		if (node === null) return false;
		node.val = val;
		return true;
	}
}
