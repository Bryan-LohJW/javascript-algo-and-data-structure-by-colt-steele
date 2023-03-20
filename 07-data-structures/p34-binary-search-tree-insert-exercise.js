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
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		const insertHelper = (node, root) => {
			if (node.value < root.value) {
				if (root.left === null) {
					root.left = node;
					return;
				} else {
					return insertHelper(node, root.left);
				}
			} else {
				if (root.right === null) {
					root.right = node;
					return;
				} else {
					return insertHelper(node, root.right);
				}
			}
		};
		insertHelper(newNode, this.root);
		return this;
	}
}
