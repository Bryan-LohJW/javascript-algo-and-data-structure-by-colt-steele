// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// a function takes in one array that contains many array, and return an array with all the primitive values within

function flatten(value, arr = []) {
	// the break case is when the value that the function receives is not an array, then it will just return the value
	if (typeof value !== 'object') {
		arr.push(value);
		return;
	}
	// else for the rest of it, return the concat of the arrays
	for (const element of value) {
		flatten(element, arr);
	}
	return arr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
