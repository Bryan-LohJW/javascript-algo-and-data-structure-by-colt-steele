**Data Structures**

What do they do?

- Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

Why so many?

- Different data structures excel at different things. Some are highly specialized, while others are more generally used

Why care?

- The more time we spend as a developer, the more likely we'll need to use one of these data structures
- We've already worked with many of them unknowingly

There is no one best data structure, they all excel in different situations

**ES2015 Class Syntax**

A review of the class syntax as it will be used often in the course

What is a class?

- A blueprint for creating objects with pre-defined properties and methods

Why do we need to learn this?

- We're going to implement data structures as classes

Syntax

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student("Colt", "Stelle");
let secondStudent = new Student("Blue", "Stelle");
```

- The method to create new objects must be called constructor
- The class keyword creates a constant, so we cannot redefine it. Watch our for the syntax as well

Instance methods

- provides functionality that pertains to a single instance of a class

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

let firstStudent = new Student("Colt", "Stelle");
firstStudent.fullName(); // 'Colt Stelle'
```

Class methods

- define methods or functionality that is pertinent to classes, not necessarily individual instances, eg Math.pow()
- cannot be called by instances, and they are usually used to provide utility for application

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static enrollStudents(...students) {
    // do the enrollment process
  }
}

let firstStudent = new Student("Colt", "Stelle");
let secondStudent = new Student("Blue", "Stelle");

Student.enrollStudents(firstStudent, secondStudent);
```
