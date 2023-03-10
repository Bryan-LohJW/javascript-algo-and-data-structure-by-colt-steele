**Depth First Search**

```js
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	// depthFirstPreOrder() {
	// 	let data = [];
	// 	const traverse = (node, store) => {
	// 		store.push(node);
	// 		if (node.left) traverse(node.left, store);
	// 		if (node.right) traverse(node.right, store);
	// 	};
	// 	traverse(this.root, data);
	// 	return data;
	// }
	DFSPreOrder() {
		var data = [];
		function traverse(node) {
			data.push(node);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	DFSPostOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node);
		}
		traverse(this.root);
		return data;
	}
	DFSInOrder() {
		var data = [];
		function traverse(node) {
			node.left && traverse(node.left);
			data.push(node);
			node.right && traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}
```

Pre order

-   pseudocode recursive

```
   create a variable to store the values of nodes visited
   store the root of the bst in a variable called current
   write a helper function which accepts a node
    - push the value of the node to the variable that stores the values
    - if the node has a left property, call the helper function with the left property on the node
    - if the node has a right property, call the helper function with the right property on the node
    invoke the helper function with the current variable
    return the array of values
```

Post Order

-   the node will be added into the storage variable only after checking its left and right property;

In order

-   the helper function will traverse the right side before adding the current node's value in, and then traversing the right side

BFS

-   the space complexity of using BFS on a wide tree is much bigger as will have to hold all the nodes in the level beneath

DFS

-   Depth first search will take more space when it is used on a deep tree
-   In order will get the nodes in a sorted manner when used on a BST
-   Pre order will be good to reconstruct the tree, using the root onwards

Time complexity of both BFS and DFS is the same
