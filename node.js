////////////// August 10, 2022 /////////////////

/// Getting Familar with Data Stuctures ///

// Practice Working with Sets //

function mySet() {
  // Collection will Hold the Set
  const collection = [];

  // This Method will Check for the Presence of an Element and Return a Boolean
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // This Method will Return all the Values in the Set
  this.values = function () {
    return collection;
  };

  // this Method will Add an Element to the Set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // This Method will Remove an Element from a Set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // This Method will Return the Size of the Collection
  this.size = function () {
    return colection.length;
  };

  // This Method will Return the Union of the Two Sets
  this.union = function (otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //   This Method will Return the Intersection of Two Sets as a New Set
  this.intersection = function (otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //   This Method will Return the Difference of Two Sets as a New Set
  this.difference = function (otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  //   This Method will Test if the Set is a Subset of a Different Set
  this.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

const setA = new mySet();
const setB = new mySet();

setA.add("A");
setB.add("B");
setB.add("C");
setB.add("A");
setB.add("D");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// Practice Working with Stacks //

// Creating a Stack

// "Stack" is Capitalized because this is a Constructor Function
const Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a Value onto the End of the Stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and Returns the Value at the end of the Stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // Returns the value at the End of the Stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

// Making a Constructor Function
// "new" Makes a New Object
// const myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("HelloWorld");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

// Palindrome Challenge

const letters = [];
let wordReversed = "";

function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    wordReversed += letters.pop();
  }

  if (wordReversed === word) {
    console.log(`${word} is a palindrone.`);
  } else {
    console.log(`${word} is NOT a palindrone`);
  }
}
// palindrome("racecar");
