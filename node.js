/// Getting Familar with Data Stuctures ///

const res = require("express/lib/response");

////////////// August 15, 2022 /////////////////

//// Trie ////

let Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {
  this.root = new Node();

  this.add = function (input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = function () {
    let words = new Array();
    let search = function (node, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

myTrie = new Trie();

myTrie.add("Ball");
myTrie.add("Bat");
myTrie.add("Doll");
myTrie.add("Dark");
myTrie.add("Do");
myTrie.add("Dorm");
myTrie.add("Send");
myTrie.add("Sense");

console.log(myTrie.isWord("Doll"));
console.log(myTrie.isWord("Dor"));
console.log(myTrie.isWord("Dorf"));
console.log(myTrie.print());

////////////// August 14, 2022 /////////////////

//// Linked List ////

function LinkedList() {
  let length = 0;
  let head = null;

  Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return this.head;
  };

  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    let node = Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

// let conga = new LinkedList();
// conga.add("Kitten");
// conga.add("Puppy");
// conga.add("Dog");
// conga.add("Cat");
// conga.add("Fish");

// console.log(conga.size());
// console.log(conga.removeAt(3));
// console.log(conga.elementAt(3));
// console.log(conga.indexOf("Puppy"));
// console.log(conga.size());

//// Hash Tables ////

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function () {
  let storage = [];
  const storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][0] === value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === 0) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === 0) {
          return storage[index][0][1];
        }
      }
    }
  };
};

// console.log(hash("quincy", 10));

// let ht = new HashTable();
// ht.add("beau", "person");
// ht.add("fido", "dog");
// ht.add("rex", "dinosour");
// ht.add("tux", "penguin");

// console.log(ht.lookup("tux"));
// ht.print();
//// Traversal & Height of a Binary Search Tree  ////

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            // This Creates a Recersive Function
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data == node.data) {
        // Node has no Children
        if (node.left == null && node.right == null) {
          return null;
        }
        // Node has no Left Child
        if (node.left == null) {
          return node.right;
        }
        // Node has no Right Child
        if (node.right == null) {
          return node.left;
        }
        // Node has Two Children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

// const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log(`In Order: ${bst.inOrder()}`);
// console.log(`PreOrder: ${bst.preOrder()}`);
// console.log(`PostOrder: ${bst.postOrder()}`);

// console.log(`Level Order: ${bst.levelOrder()}`);

////////////// August 13, 2022 /////////////////

//// Binary Search Tree ////

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }
//   add(data) {
//     const node = this.root;
//     if (node === null) {
//       this.root = new Node(data);
//       return;
//     } else {
//       const searchTree = function (node) {
//         if (data < node.data) {
//           if (node.left === null) {
//             node.left = new Node(data);
//             return;
//           } else if (node.left !== null) {
//             // This Creates a Recersive Function
//             return searchTree(node.left);
//           }
//         } else if (data > node.data) {
//           if (node.right === null) {
//             node.right = new Node(data);
//             return;
//           } else if (node.right !== null) {
//             return searchTree(node.right);
//           }
//         } else {
//           return null;
//         }
//       };
//       return searchTree(node);
//     }
//   }
//   findMin() {
//     let current = this.root;
//     while (current.left !== null) {
//       current = current.left;
//     }
//     return current.data;
//   }
//   findMax() {
//     let current = this.root;
//     while (current.right !== null) {
//       current = current.right;
//     }
//     return current.data;
//   }
//   find(data) {
//     let current = this.root;
//     while (current.data !== data) {
//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//       if (current === null) {
//         return null;
//       }
//     }
//     return current;
//   }
//   isPresent(data) {
//     let current = this.root;
//     while (current) {
//       if (data === current.data) {
//         return true;
//       }
//       if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }
//     return false;
//   }
//   remove(data) {
//     const removeNode = function (node, data) {
//       if (node === null) {
//         return null;
//       }
//       if (data == node.data) {
//         // Node has no Children
//         if (node.left == null && node.right == null) {
//           return null;
//         }
//         // Node has no Left Child
//         if (node.left == null) {
//           return node.right;
//         }
//         // Node has no Right Child
//         if (node.right == null) {
//           return node.left;
//         }
//         // Node has Two Children
//         let tempNode = node.right;
//         while (tempNode.left !== null) {
//           tempNode = tempNode.left;
//         }
//         node.data = tempNode.data;
//         node.right = removeNode(node.right, tempNode.data);
//         return node;
//       } else if (data < node.data) {
//         node.left = removeNode(node.left, data);
//         return node;
//       } else {
//         node.right = removeNode(node.right, data);
//         return node;
//       }
//     };
//     this.root = removeNode(this.root, data);
//   }
// }

// const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);

// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7);
// console.log(bst.findMax());
// console.log(bst.isPresent(4));

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
