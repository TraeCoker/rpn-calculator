/* Stack module to export the linked list Stack class */

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

    // add node to top of stack
    push(data) {
        const newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
        this.size ++
    }

    // remove node from top of stack
    pop() {
        if (!this.top) return null
        const popped = this.top
        this.top = this.top.next
        this.size --
        return popped.data
    }

    // remove all nodes from stack
    clear() {
        this.top = null
        this.size = 0
        return this.top
    }

    // if top node exists, return it's data
    peek() {
        return this.top? this.top.data : null
    }
}




