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
		let newNode = new Node(val);
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
	rotate(rotate) {
		let shift;
		if (rotate < 0) {
			const helper = Math.abs(rotate) % this.length;
			shift = this.length - helper;
		} else {
			shift = rotate % this.length;
		}
		if (shift === 0) return;
		this.tail.next = this.head;
		this.tail = this.get(shift - 1);
		this.head = this.tail.next;
		this.tail.next = null;
	}
}
