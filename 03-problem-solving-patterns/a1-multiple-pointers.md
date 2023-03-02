**Multiple Pointers**

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on certain condition.
- Very efficient for solving problems with minimal space complexity as well.

- Have two pointers that start at different places
- Should be a linear data set, such as an array or string

Example:

- Write a function called **sumZero** which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```js
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefines
sumZero([1, 2, 3]); // undefined
```

- the naive solution is to loop through the array, for each number, look through the rest of the numbers see whether their sum equals to zero, if not keep repeating

- multiple pointers uses two pointers, one at each end and see what is the sum of the two numbers. If the sum is positive, move the pointer at the end towards the middle, if the sum is negative, move the pointer at the start towards the middle, if it is zero, return the two numbers in a array.

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right -= 1;
    } else {
      left++;
    }
  }
}
```

Example:

- Implement a function called **countUniqueValues**, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```js
countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([-4, -2, 0, 1, 2, 2, 3, 4, 5]); // 8
countUniqueValues([]); // 0
```

- Answer:

```js
function countUniqueValues(arr) {
    if(arr.length) {
        return 0;
    }
    var i=0;
    for(var j=1; j<arr.length; j++) {
        (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
```
