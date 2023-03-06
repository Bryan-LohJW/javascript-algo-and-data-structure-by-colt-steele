**Selection Sort**

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

-   look through the array and put the min value into the first position, then followed by the next smallest value into the second position and so on.

Selection sort pseudocode

```
store the first element as the smallest value we've seen so far
compare this item to the next item in the array until we find a smaller number
if a smaller number is found, designate that smaller number to be the new 'min' and continue until the end of the array
if the 'min' is not the value (index) we initially began with, swap the two values
repeat this with the next element until the array is sorted
```

```js
// my try
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let smallest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) i = j;
		}
		if (smallest === i) continue;
		[arr[i], arr[smallest]] = [arr[smallest], arr[i]];
	}
}

// example
function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var lowest = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			var temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}
```

The time complexity of selection sort is n^2

The only benefit of selection sort over bubble sort is if we want to reduce the number of swaps made during the sorting. Selection sort swaps n times, while bubble sort swaps many more times
