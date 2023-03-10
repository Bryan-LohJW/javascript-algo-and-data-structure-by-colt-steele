class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(val) {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val) {
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let currentNode;
		if (index < this.length / 2) {
			currentNode = this.head;
			for (let i = 0; i < index; i++) {
				currentNode = currentNode.next;
			}
		} else {
			currentNode = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				currentNode = currentNode.prev;
			}
		}
		return currentNode;
	}
	set(index, value) {
		let node = this.get(index);
		if (node === undefined) return false;
		node.val = value;
		return true;
	}
}
