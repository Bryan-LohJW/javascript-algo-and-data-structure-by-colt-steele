function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i]) return i;
	}
	return -1;
}

function linearSearchExample(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
}

console.log(linearSearchExample([34, 56, 1, 2], 1));
