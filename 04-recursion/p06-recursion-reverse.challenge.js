// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// the function takes in a string and returns the reverse of the string,

function reverse(str, charAt = 1) {
	// fase case where the length of the string is 1
	// so instead the breakcase is when the charAt is the length of the string
	if (str.length === charAt) {
		return str.charAt(str.length - charAt);
	}

	return str.charAt(str.length - charAt).concat(reverse(str, charAt + 1));
	// return the last char of the string concat with the new string that has its last letter removed, forgot string immutable, so need to create new string, maybe hold a number
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
