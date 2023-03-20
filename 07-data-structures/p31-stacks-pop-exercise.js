class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		var node = new Node(val);
		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first.prev = node;
			this.first = node;
		}

		return ++this.size;
	}
	pop() {
		if (!this.first) return undefined;
		let node = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = node.next;
			node.next = null;
		}
		this.size--;
		return node.val;
	}
}

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);

console.log(stack);
