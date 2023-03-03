// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// function takes in an array of numbers, and return the product of all the numbers

// assume that any number is allowable, such as floating value, negatives, zeros
// how should the function deal with empty arrays? i guess to deal with it, when the arr is empty, then return 1 because it will be the same, but the error is that when the array is empty, will receive 1 which is wrong
// i guess can implement a check for empty array, but the check will be performed for every time the recursive function is called, which is not ideal

function productOfArray(arr) {
	// create base case
	// when the array is empty, return 1
	if (arr.length === 1) return arr.pop();

	// while have not reach base case, pop out the last number and multiply it with the function
	return arr.pop() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
