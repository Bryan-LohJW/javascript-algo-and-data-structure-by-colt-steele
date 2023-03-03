// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
//
// the function accepts two parameters, an array of positive integers (no 0 or negative numbers) and a positive integer that represents the value that the subarray should be greater than or equals to
// the function then returns the min length required
//

function minSubArrayLen(arr, val) {
	// check for edge cases such as empty array
	if (arr.length === 0) return null;
	// initialize variables such as window, min length, starting index, ending index
	let window = arr[0];
	let minLength = Infinity;
	let start = 0;
	let end = 1;
	// while ending index is not bigger than array size
	while (end <= arr.length) {
		// check that starting and ending index is equal, which means the answer is one
		if (start === end) return 1;

		// if the window is bigger or equal than val, log down length, remove the starting index and index ++
		if (window >= val) {
			if (end - start < minLength) minLength = end - start;
			window -= arr[start];
			start++;
		} else {
			// if the window is smaller, add ending index and index ++
			window += arr[end];
			end++;
		}
	}

	// return length
	return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
