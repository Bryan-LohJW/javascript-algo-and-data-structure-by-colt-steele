**Recursion**

What is recursion?

- A process (function) that calls itself.

Why do we need to know this?

- Recursive function are everywhere
  - - JSON.parse, JSON.stringify
  - - document.getElementById
  - - object traversal
  - - sometimes be cleaner than iteration

Call Stack

- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
- It is a stack data structure
- Any time a function is invoked it is placed (push) on the top of the call stack
- When JS sees the return keyword or when the function ends, the compiler will remove (pop)
- When we write recursive functions, we keep pushing new functions onto the call stack.

How recursive functions work?

- Invoke the same function with a different input until we reach our base case!
- Base case, is the condition when recursion ends.
- - **This is the most important concept to understand**
- Two essential parts of a recursive function
- - base case
- - different input

Example - Countdown

```js
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```

- the flow is something like this
  > countdown(3)
  > print 3
  > countdown(2)
  > print 2
  > countdown(1)
  > print 1
  > countdown(0)
  > print all done. (This is the base case where recursion stops)

Example - Sum Range

```js
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

```js
sumRange(3) => returns 3 + sumRange(2)
                            returns 2 + sumRange(1)
                                        returns 1
```

Example - Factorial

- iteratively

```js
function factorial(num) {
  let total = 1;
  for (const i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
```

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num);
}
```

Common pitfalls in recursion

- the base case is missing or wrong
- forgetting to return or returning the wrong thing
- stack overflow

Helper method recursion

- where we use recursion to help us compute something, instead of the recursion getting the result to us directly

- have an outer function that is not recursive that calls an inner or helper function that is recursive

- template:

```js
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

- Example - collectOddValues:

```js
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
    // can consider using the last value so that can pop it off and then save some computing time, depending on condition of problem
  }

  helper(arr);

  return result;
}
```

Pure recursion

- just a recursive function by itself that returns the result that we are looking for

```js
function collectOddValues(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr[0] % 2 !== 0) {
    return collectOddValues(arr.splice(1)).concat([arr[0]]);
  }
  return collectOddValues(arr.splice(1));
}

function collectOddValuesExample(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

- pure recursive tips
- - for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so we do not mutate them
- - remember that strings are immutable so we will need to use methods like slice, substr, or substring to make copies of strings
- - to make copies of objects use `Object.assign` or the spread operator
