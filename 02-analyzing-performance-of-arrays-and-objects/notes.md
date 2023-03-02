Will see how working with Arrays, Objects, and built-in methods perform using Big O

- Objects
- - They are unordered, key-value pairs
- - No order within the object
- - insertion, removal, access is O(1)
- - searching is O(n), does not mean searching for key-value pair, it means searching for a value within the different keys
- - Object methods such as Object.keys, Object.values, Object.entries is O(n)
- - hasOwnProperty is O(1)

- Arrays
- - Searching O(n)
- - Access O(1)
- - Insertion and removal depends..
- - - Depending on where on the array we are inserting and removing from. The more index we need to change the longer it takes. Inserting and removal is always longer when doing at the beginning of an array.
- - Methods
- - - push and pop is O(1)
- - - shift, unshift, concat, slice, splice is O(n)
- - - sort is O(n \* log n)
- - - forEach/map/filter/reduce/etc. is O(n)
