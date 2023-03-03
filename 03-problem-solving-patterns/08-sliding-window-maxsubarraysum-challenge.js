// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
//Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//
// the function will take two inputs, the first being an array of integers and the second a number that represents how many consecutive elements of the array to consider
// the output will be the largest sum of consecutive elements
// examples
// [1,2,3,4,5], 3 => 12
// [], 4 => null
// [1,2,3,4,5] ,0 => null

function maxSubarraySum(array, size) {
	// check for edge cases to return null
	if (array.length < size || size === 0) return null;
	// form the starting window and
	// save the value into a variable
	let sum = 0;

	for (let i = 0; i < size; i++) {
		sum += array[i];
	}
	// loop
	let biggest = sum;
	for (let j = size; j < array.length; j++) {
		sum += array[j] - array[j - size]; // this is the line that slides the window
		if (sum > biggest) biggest = sum;
	}

	// for the subsequent iterations, add the next value and remove the first value to calculate sum again for comparison

	// return the sum
	console.log(array);
	console.log(size);
	console.log(biggest);
	return biggest;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5], 3));
console.log(maxSubarraySum([-1, -2, -3, -4, -5], 3));
console.log(maxSubarraySum([1, 2, 3, 4, 5], 6));
console.log(maxSubarraySum([], 3));
console.log(maxSubarraySum([3, 4, 5], 3));

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
