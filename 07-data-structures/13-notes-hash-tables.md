**Hash Tables**

Also commonly known as a hash map, built in to every programming language as a default data type

What is a hash table?

-   Hash tables are used to store key-value pairs (similar to arrays, but arrays strictly use numerics for keys)
-   keys are not ordered (arrays have order)
-   hash tables are fast for all of the following operations
-   -   finding values
-   -   adding new values
-   -   removing values

Why should we care?

-   Nearly every programming language has some sort of hash table data structure
-   because of their speed, hash tables are very commonly used
-   Python used Dictionaries, Js uses objects and maps, Java & Go & Scala uses maps, Ruby uses hashes

The Hash part

-   in order to look up values by key, we need a way to convert keys into valid array indices
-   a function that performs this task is called a hash function

Hash functions

-   able to take in data of arbitrary size and output data of a fixed size
-   they are one way function, able to hash but cannot be unhashed
-   good hash functions are fast, constant time
-   doesn't cluster outputs at specific indices, but distributes uniformly
-   deterministic, same input yields same output

First hash function

```js
hash('pink');

// can try using char code for each letter

let total = 0;
total += 'hello'.charCodeAt(0) - 96; // repeat for all letters
index = total % arrayLen; // finding the index

function hash(key, arrayLen) {
    let total = 0;
    for(let char of key) {
        let value = char char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// only hashes strings
// currently this hash function does not operate in constant time
// the data can be a more random, can make more scattered
```

Improving hash function

-   prime numbers in the hash is helpful in spreading out the keys more uniformly
-   it's also helpful if the array that we're putting values into has a prime length

```js
function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * weirdPrime + value) % arrayLen;
	}
	return total;
}
hash('hello', 13);
```

Handling collisions

-   even with a large array and a great hash functions, collisions are inevitable
-   there are many strategies for dealing with collisions, but we'll focus on two
-   -   separate chaining
-   -   linear probing

Separate chaining

-   with separate chaining, at each index in our array, we store values using a more sophisticated data structure (an array or a linked list)
-   this allows us to store multiple key-value pairs at the same index
-   store all the collisions in the same index in a data collection, and search for the key
-   can store more than the array length

Linear probing

-   with linear probing, when we find a collision, we search through the array to find the next empty slot
-   unlike with separate chaining, this allows us to store a single key-value at each index
-   will check if the index is empty, if not empty will store in the next available one
-   maximum number of key value pair will be limited by the array length

Hashtable Class

```js
class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	// set(key, value) {
	// 	const hashKey = this._hash(key);
	// 	if (!this.keyMap[hashKey]) this.keyMap[hashKey] = [[key, value]];
	// 	else {
	// 		let pair = this.find(key);
	// 		if (!pair) {
	// 			this.keyMap[hashKey].push([key, value]);
	// 		} else {
	// 			pair[1] = value;
	// 		}
	// 	}
	// }
	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap(index)) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}
	// get(key) {
	// 	const hashKey = this._hash(key);
	// 	if (!this.keyMap[hashKey]) return undefined;
	// 	for (let pair of this.keyMap[hashKey]) {
	// 		if (pair[0] === key) return pair[1];
	// 	}
	// 	return undefined;
	// }
	get(key) {
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}
	// find(key) {
	// 	const hashKey = this._hash(key);
	// 	if (!this.keyMap[hashKey]) return undefined;
	// 	for (let pair of this.keyMap[hashKey]) {
	// 		if (pair[0] === key) return pair;
	// 	}
	// 	return undefined;
	// }
	// keys() {
	// 	let results = [];
	// 	const keysHelper = (index) => {
	// 		if (index < 0) return;
	// 		if (this.keyMap[index]) {
	// 			for (let pair of this.keyMap[index]) {
	// 				results.push(pair[0]);
	// 			}
	// 		}
	// 		return keysHelper(index - 1);
	// 	};
	// 	keysHelper(this.keyMap.length);
	// 	return results;
	// }
	keys() {
		let keysArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keysArr.includes(this.keyMap[i][j][0])) {
						keysArr.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}
	// values() {
	// 	let results = [];
	// 	const valuesHelper = (index) => {
	// 		if (index < 0) return;
	// 		if (this.keyMap[index]) {
	// 			for (let pair of this.keyMap[index]) {
	// 				results.push(pair[1]);
	// 			}
	// 		}
	// 		return valuesHelper(index - 1);
	// 	};
	// 	valuesHelper(this.keyMap.length);
	// 	return results;
	// }
	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!valuesArr.includes(this.keyMap[i][j][1])) {
						valuesArr.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}
}
```

-   set pseudocode

```
accepts a key and a value
hashes the key
stores the key-value pair in the hash table array via separate chaining (in a nested structure)
```

-   get pseudocode

```
accepts a key
hashes the key
retrieves the key-value pair in the hash table
if the key isn't found, return undefined
```

-   keys pseudocode

```
loops through the hash table array and returns an array of keys in the table
```

-   values pseudocode

```
loops through the hash table array and returns an array of values in the table
```

Big O of hash tables (average case)

-   insert O(1)
-   deletion O(1)
-   access O(1)
-   these all depends on how good the hash functions are, and how many collisions there are
-   searching for key can be constant time
-   searching for values is O(n)
