class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		const node = new Node(val, priority);
		this.values.push(node);
		const bubbleUp = (idx) => {
			const parentIdx = Math.floor((idx - 1) / 2);
			if (parentIdx < 0) return;
			const childPriority = this.values[idx].priority;
			const parentPriority = this.values[parentIdx].priority;
			if (childPriority < parentPriority) {
				[this.values[idx], this.values[parentIdx]] = [
					this.values[parentIdx],
					this.values[idx],
				];
				bubbleUp(parentIdx);
			}
		};
		bubbleUp(this.values.length - 1);
	}
	dequeue() {
		if (this.values.length <= 1) {
			return this.values.pop();
		}
		let maxIndex = this.values.length - 1;
		[this.values[0], this.values[maxIndex]] = [
			this.values[maxIndex],
			this.values[0],
		];
		let popped = this.values.pop();
		const bubbleDown = (idx) => {
			let leftIdx = idx * 2 + 1;
			let rightIdx = leftIdx + 1;
			if (
				leftIdx > this.values.length - 1 &&
				rightIdx > this.values.length - 1
			)
				return;
			let current = this.values[idx];
			let left = this.values[leftIdx];
			let right = this.values[rightIdx]
				? this.values[rightIdx]
				: new Node('', Infinity);
			if (
				left.priority < current.priority ||
				right.priority < current.priority
			) {
				if (left.priority <= right.priority) {
					this.values[leftIdx] = current;
					this.values[idx] = left;
					bubbleDown(leftIdx);
				} else {
					this.values[rightIdx] = current;
					this.values[idx] = right;
					bubbleDown(rightIdx);
				}
			}
		};
		bubbleDown(0);
		return popped;
	}
}

const q = new PriorityQueue();
[
	['x1', 1],
	['x1', 4],
	['x1', 5],
	['x2', 4],
	['x2', 1],
	['x3', 1],
	['x1', 3],
	['x1', 2],
	['x3', 4],
	['x2', 2],
	['x4', 1],
	['x2', 5],
	['x3', 2],
	['x4', 4],
].map((element) => {
	q.enqueue(element[0], element[1]);
});

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
