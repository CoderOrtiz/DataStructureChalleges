/// Getting Familar with Data Stuctures ///

////////////// August 13, 2022 /////////////////

//// Using a Priority Queue ////

function PriorityQueue() {
  const collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        // Checking Priorites
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    const value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// const pq = new PriorityQueue();

// pq.enqueue(["Beau Carnes", 2]);
// pq.enqueue(["Quincy Larson", 3]);
// pq.enqueue(["Ewa Mitulska-Wojcik", 1]);
// pq.enqueue(["Briana Swift", 2]);
// pq.printCollection();
// pq.dequeue();
// pq.front();
// pq.printCollection();

////////////// August 12, 2022 /////////////////

//// Practice Working with The Queue Data Structure ////
function Queue() {
  collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function (element) {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// const q = new Queue();
// q.enqueue("A");
// q.enqueue("B");
// q.enqueue("C");
// q.print();
// q.dequeue();
// q.front();
// q.print();

////////////// August 10, 2022 /////////////////

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
  this.delete = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // This Method will Return the Size of the Collection
  this.size = function () {
    return collection.length;
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
  //   For example, Both Sets have "A", as a Result, a New Set will be Created with Only the Character, "A"
  this.intersection = function (otherSet) {
    // Creating a New Set Titled, IntersectionSet
    const intersectionSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function (element) {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  };

  //   This Method will Return the Difference of Two Sets as a New Set
  //   This will Show All the Items that are in One Set but Not the Other
  this.difference = function (otherSet) {
    // Creating a New Set Titled, "differenceSet"
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(function (element) {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  };

  //   This Method will Test if the Set is a Subset of a Different Set
  //   This will Test if the First Set is Completely Contained within the Other Set. A Boolean will be Returned.
  this.subset = function (otherSet) {
    const firstSet = this.values();

    // The "every()" method tests whether all elements in the array pass the test implemented by the provided function & returns a Boolean value.
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

// const setA = new mySet();
// const setB = new mySet();

// setA.add("A");
// setB.add("B");
// setB.add("C");
// setB.add("A");
// setB.add("D");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());

//// Practice Working with Stacks ////

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
