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
		let node;
		if (index < this.length / 2) {
			node = this.head;
			for (let i = 0; i < index; i++) {
				node = node.next;
			}
		} else {
			node = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				node = node.prev;
			}
		}
		return node;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		let node = this.get(index);
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			node.prev.next = node.next;
			node.next.prev = node.prev;
		}
		node.next = null;
		node.tail = null;
		this.length--;
		return node;
	}
	// not confirmed correct
	reverse() {
		if (this.length <= 1) return this;
		let count = 0;
		let current = this.head;
		let next = current.next;
		let prev = null;
		[this.head, this.tail] = [this.tail, this.head];
		while (count < this.length) {
			current.prev = next;
			current.next = prev;
			prev = current;
			current = next;
			next = next.next;
			count++;
		}
		return this;
	}
}
