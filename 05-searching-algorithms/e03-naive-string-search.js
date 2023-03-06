function naiveStringSearch(string, search) {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < search.length; j++) {
			if (string.charAt(i + j) !== search.charAt(j)) {
				break;
			}
			if (j === search.length - 1) {
				counter++;
			}
		}
	}
	return counter;
}

naiveStringSearch('hihihihh', 'hi');
