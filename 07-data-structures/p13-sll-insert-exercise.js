class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(val) {
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
	unshift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	insert(idx, val) {
		if (idx > this.length || idx < 0) return false;
		if (idx === 0) this.unshift(val);
		else if (idx === this.length) this.push(val);
		else {
			const newNode = new Node(val);
			const nodeBefore = this.get(idx - 1);
			newNode.next = nodeBefore.next;
			nodeBefore.next = newNode;
			this.length++;
		}
		return true;
	}
}
