function insertionSort(arr, comparator = (a, b) => a - b) {
	let current = 1;
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (comparator(arr[j], arr[j - 1]) < 0) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			} else break;
		}
	}
	console.log(arr);
	return arr;
}

insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);
