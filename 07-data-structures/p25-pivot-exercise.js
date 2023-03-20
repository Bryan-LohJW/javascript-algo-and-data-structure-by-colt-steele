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

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strLength(a, b) {
	return a.length - b.length;
}

pivot(arr1); // 3
pivot(arr2); // 4
pivot(arr3, strLength); // 1
