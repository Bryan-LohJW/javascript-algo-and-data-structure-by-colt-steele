**Insertion Sort**

Builds up the sort by gradually creating a larger left half which is always sorted

Pseudocode

```
start by picking the second element in the array
now compare the second element with the one before it and swap if necessary
continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
repeat until the array is sorted
```

```js
// me
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j - 1] <= arr[j]) break;
			[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
		}
	}
	return arr;
}

// example
function insertionSort(arr) {
    for(var=1; i < arr.length; i++) {
        var currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
```

Time complexity, is generally n^2.
But when put in a nearly sorted data, can be very fast
Works well with data that is continuously being inserted over time, can keep data sorted while dealing with incoming new data
