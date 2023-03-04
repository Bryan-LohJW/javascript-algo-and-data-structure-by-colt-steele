// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// this funcction takes in an array of strings and capitalize each string in the array, must know that strings are immutable so need to return a new string
// assume that the first characters are letters that can be capitalized
//
function capitalizeFirst(arr) {
	// this reversal is to help the recursive function perform more optimally by only popping and pushing elements
	// base case when left with the last string, return that string in an array
	if (arr.length <= 1)
		return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
	// while still recursing, return the callback and push the current element into it
	const element = arr.pop();
	const capsStr = element.charAt(0).toUpperCase() + element.slice(1);
	return [...capitalizeFirst(arr), capsStr];
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));
