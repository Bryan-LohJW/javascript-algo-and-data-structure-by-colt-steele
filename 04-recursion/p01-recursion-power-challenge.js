// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// function that accepts two inputs, the first will be a base and the second will be the exponent (or power)
// supposed to recursively calculate the value out, much like using the power function on Math
// there is no negative inputs
//
// thinking about power 0, should return 1

function power(base, exponent) {
	// first create the base case
	// in this case, will keep multiplying till reach 0, it will return 1, helps to resolve the base case elegantly
	if (exponent <= 0) {
		return 1;
	}
	return base * power(base, exponent - 1);
	// create the other case that calls itself
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
