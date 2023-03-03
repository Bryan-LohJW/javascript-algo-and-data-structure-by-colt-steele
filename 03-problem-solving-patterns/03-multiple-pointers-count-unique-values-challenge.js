// will always be a sorted array, can include negative numbers, just have to return the number of unique numbers
// function([1, 1, 1, 2, 2, 2, 3, 4, 5]) // 5
// function ([1 ,1]) // 1
// function ([]) // 0

// feels like can solve using two methods, the first method is quite specific
// have a holder and counter variable
// loop through the array once, adding the first element inside the variable and adding the count by one and every time the current number is different from the holder, change the holder to the current variable and increment counter by one
// after the loop, return the counter which will be the number of unique numbers

// for the pointers method, i think need to start the two of them at the same index, for each number, the forward pointer will compare to the backward counter, similar concept to the previous solution, i will try to implement this
// feels like in this case, two pointers are redundant, will use a for loop and use variable i as a counter instead
function countUniqueValues(arr) {
	let pointer;
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[pointer] !== arr[i]) {
			pointer = i;
			counter++;
		}
	}
	return counter;
}

console.log(countUniqueValues([0, 1, 1, 2, 3, 4, 5]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-4, -2, 0, 1, 2, 2, 3, 4, 5]));
console.log(countUniqueValues([1]));

// this is after a hint of how to complete using two pointers, without using any other variables, and able to alter the array
function countUniqueValues2(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let i = 0;
	for (let j = 1; j < arr.length - 1; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues2([0, 1, 1, 2, 3, 4, 5]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-4, -2, 0, 1, 2, 2, 3, 4, 5]));
console.log(countUniqueValues2([1]));
