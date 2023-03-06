function getDigit(num, place) {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

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
		console.log(arr);
	}
	return arr;
}

console.log(radixSort([325, 12, 41245, 195, 31]));
