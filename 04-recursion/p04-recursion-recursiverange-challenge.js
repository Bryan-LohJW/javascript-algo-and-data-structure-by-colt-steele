// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// it accepts a number and adds up everything from 0 to the number
//
// will assume that negative numbers are also considered so will add code for that

function recursiveRange(num) {
	// create base case, where num is 0
	if (num === 0) return num;
	// if number is more than zero, return the number and the function with number - 1
	return num > 0
		? num + recursiveRange(num - 1)
		: num + recursiveRange(num + 1);
	// else return the current number and the function with number + 1 (for the negative cases)
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
