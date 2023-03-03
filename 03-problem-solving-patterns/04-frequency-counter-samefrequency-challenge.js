function sameFrequency(arr1, arr2) {
	const frequencyCounter = {};
	for (const number of arr1.toString()) {
		frequencyCounter[number] = (frequencyCounter[number] || 0) + 1;
	}
	for (const number of arr2.toString()) {
		if (frequencyCounter[number] === 0 || !frequencyCounter[number])
			return false;
		frequencyCounter[number]--;
	}
	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
