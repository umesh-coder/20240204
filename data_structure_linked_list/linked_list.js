/**
 * @author Umesh
 * This is Program to implement the Linked list and Perform Various 
 * Operation on the Linked list like Insert(First,Last,AtIndex), Delete(AtIndex) , Print Linked list.
 */

/**
 * @class {Node} 
 * To Create a Node
 */
 
class Node {
  // Constructor for creating a new Node object with data and next properties

  /**
   * Constructor 
   * @param {Any} data 
   * @param {any} next 
   * This Constructor Set the Property of Next Node & Reference of Next Node
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * insertFirst
   * @param {Any} data 
   * This Method Inserts a New Node at the Beginning of the List & Increment the Size by 1
   */
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  /**
   * @param {Any} data 
   * insertLast method to add a new Node to the end of the list
   */
  insertLast(data) {
    let node = new Node(data)
    let current

    if (!this.head) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }
    this.size++
  }

  /**
   * @param {any} data 
   * @param {Number} index 
   * @throws error if index is out of range & index is 0 the add new Node to the Beginning of list
   *  this function is used to Add element at particular index
   */
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      throw new console.error("index out of range")
    }

    if (index === 0) {
      this.insertFirst(data)
      throw new console.error("")
    }

    const node = new Node(data)
    let current, previous

    current = this.head
    let count = 0;

    while (count < index) {
      previous = current
      count++
      current = current.next
    }

    node.next = current
    previous.next = node

    this.size++
  }

  /**
   * @function removeAt
   * @param {Number} index 
   * @throws Error index is not found
   * this function is used to delete element at particular index
   */
  removeAt(index) {
    if (index > 0 && index > this.size) {
      throw new Error('index is not found')
    }

    let current = this.head
    let previous
    let count = 0

    if (index === 0) {
      this.head = current.next
    }
    else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this.size--
  }

  /**
   * @function printListData
   * This Method is Used to Print The Linked List and Their Size
   *  
   */
  printListData() {
    let current = this.head

    while (current) {
      console.log("->", current.data)
      current = current.next
    }

    console.log("Size of Linked List :- ", this.size)
  }
}

// Creating an instance of LinkedList
const ll = new LinkedList()

// Inserting elements into the linked list
ll.insertFirst(15)
ll.insertLast(23)
ll.insertAt(67, 1)

//Deleting an instance of LinkedList
ll.removeAt(1)

// Printing the linked list and its size
ll.printListData() 
