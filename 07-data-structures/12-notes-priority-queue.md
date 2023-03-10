**Priority Queue**

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities

Does not necessarily be a max or min binary heap, as long as it follows the rules it is ok

Interesting to note that for the same priority, may not give back based on the order that goes in, can probably add another conditional for more specific priority like time of insertion, or based on any other criteria

Big O notation

-   insertion O(log n)
-   removal O(log n)
-   search O(n);

```js
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

// below is the example

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
```
