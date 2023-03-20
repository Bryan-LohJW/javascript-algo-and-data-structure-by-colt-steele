function merge(arr1, arr2, comparator = (a, b) => a - b) {
	let idx1 = 0;
	let idx2 = 0;
	const sortedArr = [];
	while (idx1 < arr1.length && idx2 < arr2.length) {
		if (comparator(arr1[idx1], arr2[idx2]) < 0) {
			sortedArr.push(arr1[idx1]);
			idx1++;
		} else {
			sortedArr.push(arr2[idx2]);
			idx2++;
		}
	}
	while (idx1 < arr1.length) {
		sortedArr.push(arr1[idx1]);
		idx1++;
	}
	while (idx2 < arr2.length) {
		sortedArr.push(arr2[idx2]);
		idx2++;
	}
	return sortedArr;
}

function mergeSort(arr, comparator = null) {
	if (arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	if (comparator !== null)
		return merge(
			mergeSort(arr.slice(0, mid), comparator),
			mergeSort(arr.slice(mid), comparator),
			comparator
		);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(mergeSort([4, 20, 12, 10, 7, 9, 15, 2])); // [4, 7, 9, 10, 12, 20]
