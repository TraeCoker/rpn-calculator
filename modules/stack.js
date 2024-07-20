// Stack module to export the linked list Stack class
//
// To build:
// -Stack class with
//   -push()
//   -pop()
//   -clear()

// single unit of data on the stack
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Stack is a linked list
export default class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
}