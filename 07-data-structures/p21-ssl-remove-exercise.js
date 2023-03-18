class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
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
	remove(index) {
		if (index >= this.length || index < 0) return undefined;
		if (index === 0) {
			let node = this.head;
			this.head = this.head.next;
			node.next = null;
			this.length--;
			return node;
		}
		if (index === this.length - 1) {
			let prev = this.get(index - 1);
			let node = this.tail;
			prev.next = null;
			this.tail = prev;
			this.length--;
			return node;
		}
		let prev = this.get(index - 1);
		let node = prev.next;
		prev.next = node.next;
		node.next = null;
		this.length--;
		return node;
	}
	get(index) {
		let node = this.head;
		while (index > 0) {
			node = node.next;
			index--;
		}
		return node;
	}
}
