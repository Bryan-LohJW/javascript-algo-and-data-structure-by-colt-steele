// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// first takes in a string, and then return true or false, means do not have to finish everything

// must ensure to account for odd number of letters and even number of letters
// remember that strings are immutable data types

function isPalindrome(str, charAt = 0) {
	// break case
	// so similar to the prev problem, will use the default charAt to keep track of where in the string the function is
	// will compare the first and last letter, second and second last, third and third last, etc until the comparisons are of the same letter or past each other, this is the break case
	//
	if (charAt > str.length / 2) return true;
	if (str.charAt(charAt) === str.charAt(str.length - charAt - 1))
		return isPalindrome(str, charAt + 1);
	return false;
	// if any of the comparisons fail, will return false and break the recursion
	// if not continue to the next cycle
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
