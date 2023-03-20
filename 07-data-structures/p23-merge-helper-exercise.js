function merge(arr1, arr2, comparator = (a, b) => a - b) {
	// ideally use queue since the shifting occurs in O(n)
	// but will use arrays since the problem statement gives arrays
	let sortedArr = [];
	let idx1 = 0;
	let idx2 = 0;
	while (idx1 <= arr1.length - 1 && idx2 <= arr2.length - 1) {
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
	console.log(sortedArr);
	return sortedArr;
}

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
merge(arr1, arr2); // [1,2,3,4,4,5,6,8]
