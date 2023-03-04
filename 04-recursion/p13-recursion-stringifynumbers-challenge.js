// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// this function is supposed to stringify all the numbers and then return the object with the stringified numbers
// probably will require to use a recursive helper
//
function stringifyNumbers(object) {
	const stringifiedObject = JSON.parse(JSON.stringify(object));
	function helper(data) {
		if (typeof data !== 'object') {
			if (typeof data === 'number') {
				return '' + data;
			}
			return data;
		}

		for (const key in data) {
			data[key] = helper(data[key]);
		}
		return data;
	}
	return helper(stringifiedObject);
}
