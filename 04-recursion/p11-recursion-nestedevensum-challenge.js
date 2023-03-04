// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// the function will take in an object, this object can contain data which can be more objects
// if there is an even number for the value, add it to the total
// need to ensure type strictness when adding the value to the sum, else add string then wont be good

function nestedEvenSum(data) {
	// create the base case, which is when the data is not object type.
	// will then check if the data type is number
	// and if it is then check if even then return that else return 0
	if (typeof data !== 'object') {
		return typeof data === 'number' && data % 2 === 0 ? data : 0;
	}
	// if not base case, meaning that it is an object, for each of the key use nested even sum to get the value to sum up and afterwhich return that
	let sum = 0;
	for (const key in data) {
		sum += nestedEvenSum(data[key]);
	}
	return sum;
}

var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

var obj2 = {
	a: 2,
	b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d: 1,
	e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
