**Quick Sort**

-   Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted

-   Works by selecting one element (called the 'pivot) abd finding the index where the pivot should end up in the sorted array

-   Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

Pivot helper (also called partition or pivot)

-   in order to implement quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
-   given an array, this helper function should designate an element as the pivot
-   it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
-   the order of elements on either side of the pivot doesn't matter
-   the helper should do this in place, that is, it should not create a new array
-   when complete, the helper should return the index of the pivot

-   Picking a pivot,
-   The runtime of quick sort depends in par on how one selects the pivot
-   ideally, the pivot should be chosen so that it's roughly the median value in the data set we're sorting
-   for simplicity, we'll akways choose the pivot to be the first element

helper function pseudocode

```
it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1 respectively)
grab the pivot from the start of the array
store the current pivot index in a variable (this will keep track of where the pivot should end up)
loop through the array from the start until the end
- if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
swap the starting element(ie the pivot) with the pivot index
return the pivot index
```

helper function

```js
// me
function pivotHelper(arr, startIdx = 0, endIdx = arr.length - 1) {
	let pivot = arr[startIdx];
	let pivotIdx = startIdx;
	for (let i = startIdx + 1; i < arr.endIdx; i++) {
		if (pivot > arr[i]) {
			pivotIdx++;
			[arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
		}
	}
	[arr[pivotIdx], arr[startIdx]] = [arr[startIdx], arr[pivotIdx]];
	return pivotIdx;
}

// example
function pivot(arr, start = 0, end = arr.length - 1) {
	var pivot = arr[start];
	var swapIdx = start;
	for (i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
		}
	}
	[arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
	return swapIdx;
}
```

Quicksort pseudocode and implementation

```js
// call the pivot helper on the array
// when the helper returns to us the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// our base case occurs when we consider a subarray with less than two elements

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}
```

The best and average time complexity is O(n logn) and the worst case is O(n^2). the space complexity is O(logn)

The worst case is when take in a sorted array, then will always decompose out only one element. This will effectively create a nested loop.

To avoid this situation, instead of taking the first element, can take the middle element, or pick a random element to start with
