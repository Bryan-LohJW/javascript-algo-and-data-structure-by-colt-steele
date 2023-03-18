function selectionSort(
	arr,
	comparator = (a, b) => {
		return a - b;
	}
) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i; j < arr.length; j++) {
			if (comparator(arr[j], arr[min]) < 0) min = j;
		}
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	console.log(arr);
	return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);
