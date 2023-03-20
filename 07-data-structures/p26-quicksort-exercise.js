function pivot(
	arr,
	comparator = (a, b) => a - b,
	start = 0,
	end = arr.length - 1
) {
	let pivot = arr[start];
	let pivotIdx = start;
	for (let i = pivotIdx; i <= end; i++) {
		if (comparator(pivot, arr[i]) > 0) {
			pivotIdx++;
			[arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
		}
	}
	[arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
	return pivotIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
	if (left < right) {
		let mid = pivot(arr, comparator, left, right);
		quickSort(arr, comparator, left, mid - 1);
		quickSort(arr, comparator, mid + 1, right);
	}
	return arr;
}

console.log(quickSort([5, 4, 9, 10, 2, 20, 8, 7, 3]));
