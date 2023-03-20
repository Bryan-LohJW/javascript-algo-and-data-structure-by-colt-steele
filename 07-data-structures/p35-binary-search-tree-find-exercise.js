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
	find(value) {
		const findHelper = (value, node) => {
			if (value === node.value) return node;
			if (value < node.value) {
				if (!node.left) return undefined;
				return findHelper(value, node.left);
			} else {
				if (!node.right) return undefined;
				return findHelper(value, node.right);
			}
		};
		return findHelper(value, this.root);
	}
}
