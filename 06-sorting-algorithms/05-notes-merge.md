**Merge Sort**

What is merge sort?

-   It's a combination of two things - merging and sorting
-   exploits the fact that arrays of 0 or 1 elements are always sorted
-   works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

Merging Arrays - One part of the merge sort algo

-   in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
-   given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
-   this function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed into it.
-   Pseudocode:
-   -   create an empty array, take a look at the smallest values in each input array
-   -   while there are still values we haven't looked at
-   -   -   if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
-   -   -   if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
-   -   -   once we exhaust one array, push in the remaining values from the other array

merge function

```js
// me, note that doesnt account for equality which is bad
function merge(arr1, arr2) {
	const sortedArr = [];
	const arr1Pointer = 0;
	const arr2Pointer = 0;
	while (arr1Pointer < arr1.length && arr2pointer < arr2.length) {
		if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
			sortedArr.push(arr1[arr1Pointer]);
			arr1Pointer++;
		}
		if (arr2[arr2Pointer] < arr1[arr1Pointer]) {
			sortedArr.push(arr2[arr2Pointer]);
			arr2Pointer++;
		}
		if (arr1Pointer === arr1.length) {
			for (i = arr2Pointer; i < arr2.length; i++) {
				sortedArr.push(arr2[arr2Pointer]);
			}
		}
		if (arr2Pointer === arr2.length) {
			for (i = arr1Pointer; i < arr1.length; i++) {
				sortedArr.push(arr1[arr1Pointer]);
			}
		}
	}
	return sortedArr;
}

// example, much cleaner and simpler logic
function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
}
```

Mergesort pseudocode

```
break up the array into halves until we have arrays that are empty or have one element
once we have the smaller sorted arrays, merge those arrays with other sorted arrays until we are back at the full length of the array
once the array has been merged back together, return the merged array
```

Mergesort code

```js
// me
function mergeSort(arr1, arr2 = []) {
	if (arr1.length <= 1 && arr2.length <= 1) {
		return merge(arr1, arr2);
	}
	let result1 = [];
	let result2 = [];
	if (arr1.length > 1) {
		let arr1Left = arr1.slice(0, Math.ceil(arr1.length / 2));
		let arr1Right = arr1.slice(Math.ceil(arr1.length / 2));
		result1 = merge(mergeSort(arr1Left), mergeSort(arr1Right));
	}
	if (arr2.length > 1) {
		let arr2Left = arr2.slice(0, Math.ceil(arr2.length / 2));
		let arr2Right = arr2.slice(Math.ceil(arr2.length / 2));
		result2 = merge(mergeSort(arr2Left), mergeSort(arr2Right));
	}
	return merge(result1, result2);
}

// example
function mergeSort(arr) {
	if (arr.length < -1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
```

time complexity of merge sort is O(n log n) and space complexity of O(n)

the time complexity comes from two parts, the decomposition or splitting gives it log n, the comparison per decomposition is O(n) time complexity
