Frequency counters

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

- Problem: Write a function called **Same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second aray. The frequency of values must be the same. (Order does not matter)

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [2, 2, 1]); // false (must be same frequency)
```

- - The naive solution is to do a nested for loop to check whether the squared value of the first array is within the second array, and splice out the value from the second array
- - Time complexity of O(n^2)

- - Frequency counter solution uses two objects
- - Count the frequency of each number within the arrays, an array of `[ 1, 3, 6, 3, 2 ]` would be `{ 1: 1, 2: 2, 3: 2, 6: 1 }`. This has time complexity of O(n)
- - For each key in the first array, check to see if its squared value is a key within the next array, and if it is check if their value are the same. If any of the conditions fail, return false. This has a time complexity of only O(n) because checking keys of an array in JS has time complexity of O(1)
- - return true at the end of the loop
- - Ultimately reduce the time complexity to O(n)

```js
function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    // checking if the keys correspond with the logic
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // checking if their values are the same, meaning they appear the same number of times
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}
```

- Problem - Anagrams (Challenge): Given twp strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

- - The naive approach would be to do the nested loop to compare letters individually and cut the matching letters from the second array, which is similar to the naive approach in the previous problem.

- - For this problem, I will try using frequency counter.

```js
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  const freqCounter1 = {};
  const freqCounter2 = {};

  // need to check whether for of loop is valid for strings
  for (const letter of string1) {
    freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
  }
  for (const letter of string2) {
    freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
  }

  for (const key in freqCounter1) {
    if (!(key in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
}
```

- - Problem answer:

```js
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
```
