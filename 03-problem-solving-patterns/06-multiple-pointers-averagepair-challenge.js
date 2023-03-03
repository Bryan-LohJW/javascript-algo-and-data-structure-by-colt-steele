// the function is supposed to take in a sorted array of numbers, and a target value. The array can be empty and all the numbers can be floats.
// edge cases like arrays with 0 or 1 number which cannot result in a pair
//
// using two pointers starting at each end, find the average and compare it to the target value, if equal, return true, if average is below target value, move the start pointer up one, else move down
// if the two pointers are equal, return false to end the loop, meaning there isnt a pair of values that return an avarage that is equal to the target value

function averagePair(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		const average = (arr[start] + arr[end]) / 2;
		if (average === target) return true;
		average < target ? start++ : end--;
	}
	return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
