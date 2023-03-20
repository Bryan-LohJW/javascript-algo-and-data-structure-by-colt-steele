function getDigit(num, i) {
	return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	let count = 0;
	let number = num;
	while (number > 0) {
		number = Math.floor(number / 10);
		count++;
	}
	return count;
}

function mostDigits(nums) {
	let highestCount = 0;
	for (let num of nums) {
		highestCount = Math.max(highestCount, digitCount(num));
	}
	return highestCount;
}

function radixSort(nums) {
	const mostDigit = mostDigits(nums);
	for (let i = 0; i < mostDigit; i++) {
		const sorter = {};
		for (let num of nums) {
			let digit = getDigit(num, i);
			if (!sorter[digit]) sorter[digit] = [num];
			else sorter[digit].push(num);
		}
		let sorted = [];
		for (let j = 0; j <= 9; j++) {
			if (sorter[j]) {
				sorted = sorted.concat(sorter[j]);
			}
		}
		nums = sorted;
	}
	return nums;
}

radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
