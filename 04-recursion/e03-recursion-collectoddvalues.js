function collectOddValues(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr[0] % 2 !== 0) {
    return collectOddValues(arr.splice(1)).concat([arr[0]]);
  }
  return collectOddValues(arr.splice(1));
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function collectOddValuesExample(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesExample([1, 2, 3, 4, 5, 6, 7, 8, 9]));
