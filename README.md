# Data Structure & Algorithm Challenges

In this Repository I will be Solving Data Structure and Algorithm Challenges and Posting My Solutions

🚧 More Challenges Coming Soon! 🚧

# Types of Data Structures:

## Binary Search Trees

Binary Search Tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

### Some Quick Notes for Binary Search Trees:

- All data points in the tree are called, “Nodes”

- The top of the tree is called the “Root Node” and from here it branches out into additional nodes. Each of which. May have more Child Nodes and so on.

- Nodes with branches leading to other Nodes are referred to as the Parent of the Node. The parents branch leads to its Child.

- Leaf Nodes are Nodes at the end of the Tree that have no Children.

- Any Children of a Node are Parents of their own Sub Tree.

- A Tree Data Structure can have any number of Branches at a single Node, a Binary Search Tree can only have two Branches for every Node

- Binary Search Trees are ordered, each Subtree is less than or Equal to the Parent Node and each right Subtree is greater than or equal to the Parent Node

![example snapshot](/images/binary-search-tree.png)
![example snapshot](/images/binary-search-tree-titles.png)

## Queues

### First In First Out (FIFO)

A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.

![example snapshot](/images/queue-example.png)

For more information on Queues, click [here](https://www.geeksforgeeks.org/queue-data-structure/).

## Priority Queues

Priority Queue is an abstract data type that is similar to a queue, and every element has some priority value associated with it. The priority of the elements in a priority queue determines the order in which elements are served (i.e., the order in which they are removed). If in any case the elements have same priority, they are served as per their ordering in the queue.

For more information on Priority Queues, click [here](https://www.geeksforgeeks.org/priority-queue-set-1-introduction/).

## Stacks

### First in, Last out (FILO)

A stack is similar to an array with one significant difference: elements are only accessible from one end, the top. This means we can’t randomly access elements. We can add elements to the stack and we can remove elements from the stack. But if we want to access an element mid-way in the stack, you guessed it, we need to pop the elements above it off the stack.

The classic analogies for the stack data structure are plates or cafeteria trays. In a cafeteria, when you line up to be served, you take a tray off the top of a stack of trays. You take one tray and only one tray. When dirty trays are washed they are put on top of the stack.

![example snapshot](/images/stack-example.png)

For more information on Stacks, click [here](https://jarednielsen.com/data-structure-stack-javascript/).

## Sets

### The "Set" object lets you store unique values of any type, whether primitive values or object references. A value in the Set may only occur once; it is unique in the Set's collection.

Set objects are collections of values. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

![example snapshot](/images/set-example.png)

For more information on Sets, click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

## 10 Common Data Structures Explained by Free Code Camp

👉🏽 [Link Here](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b)
