**Sorting**

What is sorting?

-   sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
-   can be used for: sorting numbers from smallest to largest, sorting names alpahbetically, sorting movies based on revenue...
-   there are many different sorting algorithms, and they can have some specific use cases

Why do we need to learn this?

-   sorting is an incredibly common task, so it's good to know how it works
-   there are many ways to sort things, and different techniques have their own advantages and disadvantages

Javascript sort method

-   does not always work the way we expect, it compares the unicode of the strings inside each element
-   however it accepts an optional comparator function to tell it how to sort, if return negative will be before, positive is after
-   this helps to make it customizable and helps to make it work the way we want

```js
// example
function numberCompare(num1, num2) {
	return num1 - num2;
}
[6, 4, 15, 10].sort(numberCompare);

function compareByLen(str1, str2) {
	return str1.length - str2.length;
}
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen);
```
