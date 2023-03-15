// this function takes in an array of ones and zeros, and counts the number of zeroes there are and return that count
// the ones will come first followed by the zeros
// it is possible to have all ones and all zeroes in the array

// edge cases are when all the same number, will handle separately
// also when arr is length 0

// my idea is to first find the index of the 0 that have a one to its left
// using binary search, if find a one, means the search is to the right
// if find a zero, if the left is a zero, means to the left
// if find a zero, if the right is a one, found the index
// using the found index, able to calculate how many zeros there are

function countZeroes(arr) {
	// check for edge cases and handle them
	if (arr.length === 0) return 0;
	if (arr[0] === 0) return arr.length;
	if (arr[arr.length - 1] === 1) return 0;
	// create a helper function that implements binary search algo
	const searchFirstZero = (arr) => {
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			let middle = Math.floor((left + right) / 2);
			// check middle
			// too small index
			if (arr[middle] === 1) {
				left = middle + 1;
			} else if (arr[middle] === 0) {
				//too big index;
				if (arr[middle - 1] === 0) {
					right = middle - 1;
				} else {
					//correct case;
					return middle;
				}
			}
		}
		// should not reach this case
		return null;
	};
	const firstZeroIdx = searchFirstZero(arr);
	// using the index, calculate the number of zeros and return
	return arr.length - firstZeroIdx;
}

// ideal solution found from q&a
// very interesting that the find the leftmost '0', which returns -1 if not found
// able to account for edge case and makes the logic very simple
function countZeros(array) {
	// add whatever parameters you deem necessary - good luck!!!
	let newArray = array;
	let leftIndex = 0;
	let rightIndex = array.length;
	let middlePoint = 0;
	while (leftIndex < rightIndex) {
		middlePoint = Math.floor((leftIndex + rightIndex) / 2);

		if (newArray[middlePoint] === 1) {
			leftIndex = middlePoint + 1;
		} else {
			rightIndex = middlePoint;
		}
	}

	return array.length - leftIndex;
}
