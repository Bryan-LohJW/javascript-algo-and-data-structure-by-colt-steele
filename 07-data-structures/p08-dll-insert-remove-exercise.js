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
	pop() {
		if (this.length <= 0) return undefined;
		let node = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
		node.prev = null;
		this.length--;
		return node;
	}
	shift() {
		if (!this.head) return undefined;
		let removedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
		}
		removedNode.next = null;
		this.length--;
		return removedNode;
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
	insert(index, val) {
		if (index === 0) {
			return !!this.shift(val);
		} else if (index === this.length) {
			return !!this.push(val);
		} else {
			let prevNode = get(index - 1);
			if (!prevNode) return false;
			let newNode = new Node(val);
			(newNode.next = prevNode.next), (newNode.prev = prevNode);
			(prevNode.next.prev = newNode), (prevNode.next = newNode);
			this.length++;
			return true;
		}
	}
	remove(index) {
		if (index === 0) {
			return this.unshift();
		} else if (index === this.length - 1) {
			return !!this.pop();
		} else {
			let remove = get(index);
			if (!prevNode) return false;
			(remove.next.prev = remove.prev), (remove.prev.next = remove.next);
			(remove.prev = null), (remove = null);
			this.length--;
			return remove;
		}
	}
}
