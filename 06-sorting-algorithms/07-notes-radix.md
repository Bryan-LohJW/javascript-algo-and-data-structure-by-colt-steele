**Radix Sort**

-   It is a special sorting algorithm that works on list of numbers

-   Never makes comparisons between elements

-   It exploits the fact that information about the size of a number is encoded in the number of digits

-   More digits means a bigger number

How does it work?

-   sort all the numbers based on the first digit (right most)
-   order them up from the smallest to the biggest
-   repeat the first two steps for subsequent digits until the nth digit where n is the number of digits in the largest number

Radix sort helpers

-   In order to implement radix sort, it's helpful to build a few helper functions first
-   -   getDigit(num, place) > returns the digit in num at the given place value
-   -   digitCount(num) > returns the number of digits in the number
-   -   mostDigits(nums) > given an array of numbers, returns the number of digits in the largest numbers in the list

getDigit

```js
function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
```

digitCount

```js
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```

mostDigits

```js
function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
}
```

Radix sort pseudocode

```
define a function that accepts list of numbers
figure out how many digits the largest number has
loop from k = 0 up to this largest number of digits
for each iteration of the loop
 - create buckets for each digit (0-9)
 - place each number in the corresponding bucket based on its kth digit
 - replace our existing array with values in our buckets, starting with 0 and going up to 9
return the list at the end
```

Radix sort code

```js
// me
function radixSort(arr) {
	const maxDigit = mostDigits(arr);
	for (let i = 0; i < maxDigit; i++) {
		const obj = {};
		let newArr = [];
		for (const num of arr) {
			obj[getDigit(num, i).toString()] = obj[getDigit(num, i)]
				? [...obj[getDigit(num, i).toString()], num]
				: [num];
		}
		for (let j = 0; j <= 9; j++) {
			if (obj[j]) {
				newArr = [...newArr, ...obj[j]];
			}
		}
		arr = newArr;
	}
	return arr;
}

// example
function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			digitBuckets[getDigit(nums[i], k)].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}
```

Time complexity is always O(nk), meaning that the length of the digits is also important to take note of
Space complexity is O(n + k);
