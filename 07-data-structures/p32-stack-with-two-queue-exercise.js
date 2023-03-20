class Stack {
	constructor() {
		this.queue = new Queue();
	}
	push(val) {
		this.queue.enqueue(val);
		return this;
	}

	pop() {
		let helperQ = new Queue();
		for (let i = 0; i < this.queue.size - 1; i++) {
			helperQ.enqueue(this.queue.dequeue());
			this.queue.enqueue(helperQ.dequeue());
		}
		return this.queue.dequeue();
	}
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(data) {
		var node = new Node(data);

		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;

		var temp = this.first;
		if (this.first == this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
