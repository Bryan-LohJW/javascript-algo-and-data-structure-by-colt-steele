// given a sorted array and a number, the function should return the number of times that number appears in the array
// the array may not contain the target, need to account for that
// the method that I'm implementing will take care of any edge cases such as empty array or no target value or full target value

function sortedFrequency(arr, num) {
	function leftmostNumIdx(arr, num) {
		let left = 0;
		let right = arr.length;
		let middle = 0;
		while (left < right) {
			middle = Math.floor((left + right) / 2);
			if (arr[middle] === num) {
				right = middle - 1;
			} else if (arr[middle] > num) {
				right = middle - 1;
			} else if (arr[middle] < num) {
				left = middle;
			}
		}
		return middle;
	}
	function rightmostNumIdx(arr, num) {
		let left = 0;
		let right = arr.length;
		let middle = 0;
		while (left < right) {
			middle = Math.floor((left + right) / 2);
			if (arr[middle] === num) {
				left = middle;
			} else if (arr[middle] > num) {
				right = middle - 1;
			} else if (arr[middle] < num) {
				left = middle + 1;
			}
		}
		return middle;
	}
	console.log(leftmostNumIdx(arr, num));
	console.log(rightmostNumIdx(arr, num));
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4);
