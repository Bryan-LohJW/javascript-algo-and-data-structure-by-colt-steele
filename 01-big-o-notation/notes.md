Introduction to Big O Notation

- Example of a function

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6));

function addUpToUpdated(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpToUpdated(6));
```

- Two different functions that does the same function, but which is better?

- What is better?
- - Faster?
- - Less memory-intensive?
- - Readability?

- Evaluating speed using time (fastness)
- - Able to use time difference between before execution of code, and after execution of code to compare the speed, but not efficient way of determining speed.
- - - Different machines will record different times, hard to have a set baseline.
- - - Same machine will record different times as well.
- - - For fast algorithms, speed measurements may not be precise enough.

- Evaluating speed using number of operations
  `n * (n + 1) / 2`
- - This snippet of code has 3 operations, a multiplication, addition and division, the value of n will not change that.
    ```js
    let total = 0; // one assignment
    for (let i = 1; i <= n; i++) {
      // one assignment, one comparison per n, one addition and one assignment per n
      total += i; // one addition and one assignment per n
    }
    ```
- - This snippet of code has many operations, and the number of operations will vary with different values of n.
- - But it is hard to count the total number of operations

- Evaluating speed using Big O
- - Big O Notation is a way to formalize fuzzy counting
- - It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
- - Care mostly about trend in time vs input
- - > We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
- - - Linear: f(n) = n
- - - Quadratic: f(n) = n^2
- - - Constant: f(n) = 1
- - - Anything else
- - Big O is always about the worst case scenario, or the upper bound of the function
- - Rules of thumb for simplifying big O
- - - Constants don't matter
- - - - O(2n) => O(n)
- - - Smaller terms don't matter
- - - - O(n^2 + 3n) => O(n^2)
- - Big O Shorthands
- - - Arithmetic operations are constant
- - - Variable assignment is constant
- - - Accessing elements in an array (by index) or object (by key) is constant
- - - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

- - Big O Space Complexity
- - - How much additional memory do we need to allocate in order to run the code in our algorithm
- - - Usually don't include the space required to hold the inputs
- - - Rules of thumb
- - - - Most primitives are constant space
- - - - String require O(n) space where n is the string length
- - - - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

- - Logarithms
- - - It is the inverse of exponentiation
- - - log2(8) = 3 // 2^3 = 8
- - - usually the default is log where it is log10, but it does not matter.
- - - the binary logarithm of a number is roughly the number of times we can divide it by 2 before we get a value that is equals one or less
- - - Log time complexity is sometimes found in searching algos, sorting algos, and in recursion
