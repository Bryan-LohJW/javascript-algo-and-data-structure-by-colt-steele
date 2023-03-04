// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// the function will take in an object, and recurse through it to find any strings. if find any string, will add it into an array and return the array after it is done

function collectStrings(obj) {
	// base case is when receive a datatype that is not object
	// if it is a string, then add it into the array else return false
	if (typeof obj !== 'object') {
		return typeof obj === 'string' ? [obj] : false;
	}

	// else for each key within the object, need to collectStrings from each of it and add into the array
	// create an array of the strings collected, adding if it is not falsy
	let arr = [];
	for (const key in obj) {
		const result = collectStrings(obj[key]);
		if (result) {
			arr = [...arr, ...result];
		}
	}
	return arr;
}

const objt = {
	stuff: 'foo',
	data: {
		val: {
			thing: {
				info: 'bar',
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: 'baz',
					},
				},
			},
		},
	},
};

console.log(collectStrings(objt)); // ["foo", "bar", "baz"])
