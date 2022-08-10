////////////// August 10, 2022 /////////////////

//// Practice Working with Stacks ////

// Creating a Stack

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

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("HelloWorld");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

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
