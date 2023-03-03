// the function takes in two strings, and check whether the first string is within the second string by order, return true if is else false
// edge cases where the first string is shorter than the other, will be false,

function isSubsequence(firstStr, secondStr) {
	if (firstStr.length > secondStr.length) return false;
	let firstStrPointer = 0;
	let secondStrPointer = 0;
	while (
		secondStrPointer <= secondStr.length &&
		firstStrPointer < firstStr.length
	) {
		firstStr[firstStrPointer] === secondStr[secondStrPointer]
			? firstStrPointer++
			: '';
		secondStrPointer++;
	}
	console.log(firstStrPointer + ' ' + firstStr.length);
	return firstStrPointer === firstStr.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
