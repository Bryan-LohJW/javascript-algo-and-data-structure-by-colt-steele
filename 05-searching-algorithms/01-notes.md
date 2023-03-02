**Searching Algorithms**

Linear Search

- Check a string within an array, just loop through and for each element, check against each one for equality.
- Good for unsorted data, but for sorted data there will be better approaches
- time complexity of O(n)

- Javascript uses linear search in methods such as:
- - indexOf
- - includes
- - find
- - findIndex

- pseudocode example for linear search:
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

- binary search is a much faster form of search
- rather than eliminating one element at a time, we can eliminate half of the remaining elements at a time
- binary search only works on sorted arrays

- works by checking the halfway point of the array, and see if the value is greater or less than the reference and take the half that contains the value
- repeat the previous step for the remaining half
- ultimately will find the value or be left with an empty array which means it does not exist

- pseudocode example for binary search:

  > this function accepts a sorted array and a value
  > create a left pointer at the start of the array, and a right pointer at the end of the array
  > while the left pointer comes before the right pointer:
  >
  > > create a pointer in the middle
  > > if you find the value you want, return the index
  > > if the value is too small, move the left pointer up
  > > if the value is too large, move the right pointer down
  > > if we never find the value, return -1

- time complexity of O(log n)
