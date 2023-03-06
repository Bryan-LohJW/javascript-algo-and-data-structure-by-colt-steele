**Bubble Sort**

A sorting algorithm where the largest values bubble up to the top, one at a time

Works by running through the array and comparing the pairs of data, and swapping them if the n+1 data is larger than the n, then compare the following pairs until the end.
This will bring the largest value to the end hence the name bubble sort.
Repeat the steps excluding the last value (which is sorted) until the whole array is sorted

But how do we swap?

-   replace the values inside both indexes

```js
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idr1] = arr[idx2];
    arr[idx2] = temp;
}

const swap = (arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

Bubble sorting pseudocode

```
start looping from the end of the array towards the beginning with a variable called i
start an inner loop with a variabled called j from the beginning until i-1
if arr[j] is greater than arr[j+1], swap those two values
return the sorted array
```

Bubble sorting implementation

```js
// me, can see that theres an error in the length
function bubbleSort(arr) {
    for (let i = arr.length-1, i > 0, i--){
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

// example
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i, j++){
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j=1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
```

Bubble sort optimisation

-   when an array or data set is almost sorted, it will keep trying to sort altho the data set is already sorted
-   to resolve this, can short circuit the code by checking if there was any swaps in the last pass, and if there isn't can end the function

```js
function bubbleSort(arr) {
    var noSwaps;
    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i, j++){
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j=1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
```

Generally the time complexity of bubble sort is n^2, but if the data is nearly sorted, with the short circuit it will be n
