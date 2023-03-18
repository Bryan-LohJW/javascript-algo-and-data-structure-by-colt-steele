// this function accepts a rotated array of sorted numbers, and a number to look for
// the function should return the index of the number within the array
// if the number is not found, return -1
// assume have only one instance of the number

// the function should complete this is O(log n) time and O(1) space

// to complete this is O(log n) time, still will have to use binary search
// because this is still a sorted array, just have to figure if the target number is within the range of numbers.
// basically each check will see if it is possible that the number is within the left or the right side and narrow down to that side, considering the possibility that the subarray is rotated (which means that the left > right of the subarray)

function findRotatedIndex(arr, num) {
	let idx = -1;
	let left = 0;
	let right = arr.length - 1;
	while (idx === -1 || left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (arr[middle] === num) {
			idx = middle;
			break;
		} else if (
			arr[left] <= num &&
			(arr[middle - 1] >= num || arr[middle - 1] < arr[left])
		) {
			right = middle - 1;
		} else if (
			arr[middle + 1] <= num &&
			(arr[right] >= num || arr[right] < arr[middle + 1])
		) {
			left = middle + 1;
		} else {
			break;
		}
	}
	return idx;
}

findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5
