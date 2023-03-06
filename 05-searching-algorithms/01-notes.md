**Searching Algorithms**

Linear Search

-   Check a string within an array, just loop through and for each element, check against each one for equality.
-   Good for unsorted data, but for sorted data there will be better approaches
-   time complexity of O(n)

-   Javascript uses linear search in methods such as:
-   -   indexOf
-   -   includes
-   -   find
-   -   findIndex

-   pseudocode example for linear search:
    > this function accepts an array and a value
    > loop through the array and check if the current array element is equal to the value
    > if it is, return the index at which the element is found
    > if the value is never found, return -1

```js
function linearSearch(arr, value) {
	for (const i = 0; i < arr.length; i++) {
		if (value === arr[i]) return i;
	}
	return -1;
}
```

Binary Search

-   binary search is a much faster form of search
-   rather than eliminating one element at a time, we can eliminate half of the remaining elements at a time
-   binary search only works on sorted arrays

-   works by checking the halfway point of the array, and see if the value is greater or less than the reference and take the half that contains the value
-   repeat the previous step for the remaining half
-   ultimately will find the value or be left with an empty array which means it does not exist

-   pseudocode example for binary search:

    > this function accepts a sorted array and a value
    > create a left pointer at the start of the array, and a right pointer at the end of the array
    > while the left pointer comes before the right pointer:
    >
    > > create a pointer in the middle
    > > if you find the value you want, return the index
    > > if the value is too small, move the left pointer up
    > > if the value is too large, move the right pointer down
    > > if we never find the value, return -1

-   time complexity of O(log n)

Naive string search example

-   count the number of times a smaller string appears in a longer string
-   the straightforward approach is to check pairs of characters individually
-   walking through one character at a time, and then checking if the first characters match, and if so does the next characters match until the end of the search string

-   pseudocode

```
loop over the longer string
loop over the shorter string
if the characters don't match, break out of the inner loop
if the characters do match, keep going
if we complete the inner loop and find a match, increment the count of matches
return the count
```

```js
// my try
function naiveStringSearch(string, search) {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < search.length; j++) {
			if (string.charAt(i + j) !== search.charAt(j)) {
				break;
			}
			if (j === search.length - 1) {
				counter++;
			}
		}
	}
	return counter;
}

// example
function naiveSearch(long, short) {
    var const = 0;
    for(var i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            if(short[j] === long[i+j]) break;
            if(j === short.length) count++;
        }
    }
    return count;
}
```
