// accepts varying number of arguments, have to check whether there are any duplicates
// arguments will be either numbers or strings or a mix of both
// arguments does not seem to be sorted
//
// seem to be able to use two methods to solve this, first is using frequency counter to get all the frequency of all the variables, then if any of the value is above one, it would indicate an duplicate. time and space complexity of O(n)
// the other method is to sort the variables using mergesort. and then use multiple pointers to run through the array with the start pointer at 0 and end pointer at 1, running through the array with both values incrementing and checking for equality. time and space complexity of nlogn and 1 respectively

function areThereDuplicates(...variables) {
	const frequencyCounter = {};
	for (const variable of variables) {
		if (frequencyCounter[variable]) return true;
		frequencyCounter[variable] = 1;
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

function areThereDuplicatesSort(...variables) {
	variables.sort();
	let startPointer = 0;

	for (let endPointer = 1; endPointer < variables.length; endPointer++) {
		if (variables[startPointer] === variables[endPointer]) return true;
		startPointer++;
	}

	return false;
}

console.log(areThereDuplicatesSort(1, 2, 3)); // false
console.log(areThereDuplicatesSort(1, 2, 2)); // true
console.log(areThereDuplicatesSort('a', 'b', 'c', 'a')); // true

// the actual solution for time complexity nlogn and space complexity 1 is `return new Set(arguements).size !== arguments.length;
