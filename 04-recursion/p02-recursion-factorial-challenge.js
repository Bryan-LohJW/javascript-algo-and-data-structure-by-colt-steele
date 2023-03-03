// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// this function takes in a number (positive) and returns the factorial of that number
// need to ensure that account for case 0!

function factorial(num) {
	// set the base case, in this case will be when num is 0, at which return 1
	if (num === 0) return 1;

	// while have not reach the base case, return the current number multiplies by the factorial of the next smaller number
	return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
