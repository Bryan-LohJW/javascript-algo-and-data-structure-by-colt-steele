function digitCount(num) {
	let count = 0;
	let number = num;
	while (number > 0) {
		number = Math.floor(number / 10);
		count++;
	}
	return count;
}
