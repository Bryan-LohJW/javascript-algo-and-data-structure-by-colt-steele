// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// the function will receive a string and should return what the length of the longest substring of distinct characters

// 'abcdefghijklmnop'
// 'aaabbbcccdddeeefffgggg'
// 'aabbbcdefggggggg'

function findLongestSubstring(str) {
	// create a working array
	const workingArray = [];

	// for the length of the string
	for (const char of str) {
		// add the current char into array
		workingArray.push(char);
		const set = new Set(workingArray);
		// check if the array holds distinct characters
		set.size === workingArray.length
			? '' // if yes, dont do anything
			: // if no, remove first element of array
			  workingArray.splice(0, 1);
	}
	// return the length of the array
	console.log(workingArray.length);
	return workingArray.length;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
