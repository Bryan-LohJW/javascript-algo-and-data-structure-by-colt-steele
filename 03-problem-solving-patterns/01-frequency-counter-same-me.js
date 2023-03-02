function same(array1, array2) {
  // have to return true or false given some inputs, the first array, each number must have its corresponding value
  // concrete examples was done
  //
  // the most straight forward way to do is to do a nested loop
  // for each element in the first array, check whether its squared value is within the second array, and if so delete both
  // if the end results are empty, return true, else return false
  // would probably give O(n^2) which is not ideal
  //
  // another method is to add up all the squared values of both arrays
  // first array add up all squared values
  // second array add up all values
  // check whether the two arrays calculated has the same value
  // probably give O(n)
}

function same1(array1, array2) {
  let array1Sum = 0;
  let array2Sum = 0;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let number of array1) {
    array1Sum += Math.pow(number, 2);
  }
  for (let number of array2) {
    array2Sum += number;
  }
  return array1Sum === array2Sum;
}

console.log(same1([1, 2, 3], [1, 4, 9]));
console.log(same1([1, 4, 3], [1, 4, 3]));
console.log(same1([1, 6, 9], [1, 36, 81]));

function sameAnswer(array1, array2) {
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

console.log(sameAnswer([1, 2, 3], [1, 4, 9]));
console.log(sameAnswer([1, 4, 3], [1, 4, 3]));
console.log(sameAnswer([1, 6, 9], [1, 36, 81]));
