// the bubble sort function takes in an array, and sorts it according to the comparator that is given as a second parameter
// the comparator will return a positive or negative number depending on the value
// the comparator have a default value as well

function bubbleSort(arr, comparator) {
	if (typeof comparator !== 'function') {
		comparator = (a, b) => {
			return a - b;
		};
	}
	for (let i = 0; i < arr.length - 1; i++) {
		let swap = false;
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (comparator(arr[j], arr[j + 1]) > 0) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swap = true;
			}
		}
		if (!swap) break;
	}
	return arr;
}

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
