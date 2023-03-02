**Sliding Window**
This pattern involves creating a window which can either be an array or number from one position to another.

Depending on certain condition, the window can either increase or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.

- Example:

- Write a function called **maxSubarraySum** which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```js
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
```

- The naive approach is to create an array of size n, and keep looping through the array to find the largest subarray by comparison, O(n^2)

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

- Sliding window approach O(n)

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr(i);
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum = arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

- Instead of constantly creating arrays and comparing, create the array a single time, and 'slide' it by adding the next value and subtracting the first value, saves computing time by a lot.
- Not sure whether this will be efficient for strings because having to remove the first item in an array will cause a lot of inefficiency
