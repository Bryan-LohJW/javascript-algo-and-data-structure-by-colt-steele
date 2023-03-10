**Binary Heaps**

-   very similar to a binary search tree, but with some different rules
-   in a max binary heap, parent nodes are always larger than child nodes
-   in a min binary heap, parent nodes are always smaller than child nodes

-   each parent has at most two child nodes
-   the value of each parent node is always greater than its child nodes
-   in a max binary heap the parent is grater than the children, but there are no guarantees between sibling nodes
-   a binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

What are binary heaps used for?

-   binary heaps are used to implment priority queues, which are very commonly used data structures

-   also used with graph traversal algorithms

Can use arrays to represent binary heaps

-   each element's left child is 2n+1, the right child is 2n+2
-   the child node works in the same way as well, the parent will be math.floor((n-1)/2)

```js
class MaxBinaryHeap {
	constructor() {
		this.value = [];
	}
	// insert(val) {
	// 	this.value.push(val);
	// 	let index = this.value.length - 1;
	// 	let parentIndex = Math.floor((index - 1) / 2);
	// 	while (this.value[parentIndex] < this.value[index]) {
	// 		[this.value[parentIndex], this.value[index]] = [
	// 			this.value[index],
	// 			this.value[parentIndex],
	// 		];
	// 		index = parentIndex;
	// 		parentIndex = Math.floor((index - 1) / 2);
	// 		if (parentIndex < 0) break;
	// 	}
	// }
	insert(element) {
		this.value.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.value.length - 1;
		const element = this.value[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.value[parentIdx];
			if (element <= parent) break;
			this.value[parentIdx] = element;
			this.value[idx] = parent;
			idx = parentIdx;
		}
	}
	// extractMax() {
	// 	if (this.value.length === 0) return undefined;
	// 	[this.value[0], this.value[this.value.length - 1]] = [
	// 		this.value[this.value.length - 1],
	// 		this.value[0],
	// 	];
	// 	const max = this.value.pop();
	// 	const bubbleDown = (idx) => {
	// 		const leftIdx = idx * 2 + 1;
	// 		const rightIdx = leftIdx + 1;
	// 		if (
	// 			leftIdx > this.value.length - 1 &&
	// 			rightIdx > this.value.length - 1
	// 		)
	// 			return;
	// 		let parent = this.value[idx];
	// 		let left = this.value[leftIdx];
	// 		let right = this.value[rightIdx];
	// 		if (right === undefined) right = -Infinity;
	// 		if (left > parent || right > parent) {
	// 			if (left < right) {
	// 				this.value[idx] = right;
	// 				this.value[rightIdx] = parent;
	// 				bubbleDown(rightIdx);
	// 			} else {
	// 				this.value[idx] = left;
	// 				this.value[leftIdx] = parent;
	// 				bubbleDown(leftIdx);
	// 			}
	// 		}
	// 	};
	// 	bubbleDown(0);
	// 	return max;
	// }
	extractMax() {
		const max = this.value[0];
		const end = this.value.pop();
		if (this.value.length > 0) {
			this.value[0] = end;
			this.sinkDown();
		}
		return max;
	}
	sinkDown() {
		let idx = 0;
		const length = this.value.length;
		const element = this.value[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIdx < length) {
				leftChild = this.value[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.value[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.value[idx] = this.value[swap];
			this.value[swap] = element;
			idx = swap;
		}
	}
}
```

Insert

-   add the new value into the array, and then bubble up to the correct spot
-   bubbling up is swapping the child and parent
-   pseudocode

```
   push the value into the values property on the heap
   bubble-up
    - create a variable called index which is the length of the values property -1
    - createa a variable called parentIndex which is the floor of (index-1)/2
    - keep looping as long as the values element at the parentIndex is less than the values element at the child index
     - - Swap the value of the values element at the parentIndex with the value of the element property at the child index
     - - set the index to be the parentIndex, start over
```

Removing (aka extractMax)

-   removing the root(max value) and adjusting the max binary heap
-   pseudocode

```
    swap the first value in the values property with the last one
    pop from the values property, so we can return the value at the end
    have the new root 'sink down' to the correct spot
    - our parent index starts at 0
    - find the index of the left child (make sure not out of bound)
    - find the index of the right child (make sure not out of bound)
    - if the left or right child is grater than the element, swap. If both left and right children are larger, swap with the largest child
    the child index we swapped to now becomes the new parent index
    keep looping and swapping until neither child is larger than the element
    return the old root
```

Have time complexity of O(log n) when removing and adding
