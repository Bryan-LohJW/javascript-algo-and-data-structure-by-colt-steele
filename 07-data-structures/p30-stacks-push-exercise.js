class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		const newNode = new Node(val);
		if (!this.size) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.size++;
		return this.size;
	}
}
