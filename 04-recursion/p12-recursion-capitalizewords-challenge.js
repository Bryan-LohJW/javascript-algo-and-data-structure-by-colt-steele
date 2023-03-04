// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// this function takes in an array of words, and will capitalize each word
// return an array with the words capitalized, ideally without creating a new array for space complexity

function capitalizeWords(arr, index = 0) {
	// create base case when index is equal to the length of the array, meaning that already run through the array
	if (index === arr.length) {
		return arr;
	}
	// while recursing through the array, change the item at the index
	// once done return the array
	arr[index] = arr[index].toUpperCase();
	return capitalizeWords(arr, index + 1);
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizedWords(arr) {
	if (arr.length === 1) return [arr.pop().toUpperCase()];
	const poppedStr = arr.pop().toUpperCase();
	return [...capitalizedWords(arr), poppedStr];
}
