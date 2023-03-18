// given a sorted array and a number, the function should return the number of times that number appears in the array
// the array may not contain the target, need to account for that
// the method that I'm implementing will take care of any edge cases such as empty array or no target value or full target value

function sortedFrequency(arr, num) {
	function leftmostNumIdx(arr, num) {
		let idx = -1;
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			let middle = Math.floor((left + right) / 2);
			if (arr[middle] === num) {
				idx = middle;
				right = middle - 1;
			} else if (arr[middle] < num) {
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}
		return idx;
	}
	function rightmostNumIdx(arr, num) {
		let idx = -1;
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			let middle = Math.floor((left + right) / 2);
			if (arr[middle] === num) {
				idx = middle;
				left = middle + 1;
			} else if (arr[middle] < num) {
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}
		return idx;
	}
	let leftResult = leftmostNumIdx(arr, num);
	let rightResult = rightmostNumIdx(arr, num);
	if (leftResult === -1) return -1;
	else return rightResult - leftResult + 1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4);
