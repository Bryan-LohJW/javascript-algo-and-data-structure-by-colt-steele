class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		if (this.root === null) {
			this.root = new Node(value);
			return this;
		} else {
			var current = this.root;
			while (true) {
				if (value < current.value) {
					if (current.left === null) {
						current.left = new Node(value);
						return this;
					} else {
						current = current.left;
					}
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = new Node(value);
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	depthFirstSearchPreOrder(node = this.root, arr = []) {
		if (!node) return;
		arr.push(node.value);
		this.depthFirstSearchPreOrder(node.left, arr);
		this.depthFirstSearchPreOrder(node.right, arr);
		return arr;
	}
	depthFirstSearchInOrder(node = this.root, arr = []) {
		if (!node) return;
		this.depthFirstSearchInOrder(node.left, arr);
		arr.push(node.value);
		this.depthFirstSearchInOrder(node.right, arr);
		return arr;
	}
	depthFirstSearchPostOrder(node = this.root, arr = []) {
		if (!node) return;
		this.depthFirstSearchPostOrder(node.left, arr);
		this.depthFirstSearchPostOrder(node.right, arr);
		arr.push(node.value);
		return arr;
	}
}
