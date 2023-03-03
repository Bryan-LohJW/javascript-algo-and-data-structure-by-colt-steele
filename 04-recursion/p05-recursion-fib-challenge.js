// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// function accepts a number and count the fibonaci sequence
// fibonaci sequence is when the number other than the first two, is the addition of the previous two numbers
// need to account for the 1st and 2nd numbers as well
// assume that will not receive the number 0 or negative numbers, else will add a check for it

function fib(num) {
	// create the base case, which is when number is 2 or less
	if (num <= 2) return 1;

	// return the function of the previous two numbers, which will add up to the number here
	return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
