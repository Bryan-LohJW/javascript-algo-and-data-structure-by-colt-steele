// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// the function takes in an array of values, and passes them into the callback one by one. if any of the values in the callback returns true, return true, else return false.

function someRecursive(arr, callback) {
	// breakcase is when the array is empty, which will return false,
	if (arr.length === 0) return false;
	// for each time the function is called, will return the value the callback return || the next one, thereby if have a single true will return true for all
	return callback(arr.pop()) || someRecursive(arr, callback);
}
// can also just return true, once have a true value, this will same some calculation time when there is a true value early on

function someRecursiveRevised(arr, callback) {
	if (arr.length === 0) return false;
	return callback(arr.pop()) ? true : someRecursiveRevised(arr, callback);
	// this function doesnt have to do a lot of comparisons, and will immediately return true once it finds a true value, or go to the end and return false;
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
