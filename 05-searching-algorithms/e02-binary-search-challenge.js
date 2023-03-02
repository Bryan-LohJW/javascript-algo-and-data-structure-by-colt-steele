function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer) / 2);
    console.log(leftPointer + " " + rightPointer + " " + middle);
    if (arr[middle] === val) {
      return middle;
    }
    if (arr[middle] < val) {
      if (rightPointer - leftPointer === 1) {
        if (arr[rightPointer] === val) return rightPointer;
        middle += 1;
      }
      leftPointer = middle;
    } else {
      rightPointer = middle;
    }
  }
  return -1;
}

console.log(
  binarySearch(
    [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    17
  )
);

function binarySearchExample(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
