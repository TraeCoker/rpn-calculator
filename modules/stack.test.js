import Stack from './stack.js'

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('should initialize empty', () => {
    expect(stack.size).toBe(0)
    expect(stack.top).toBeNull()
  })

  describe('push', () => {
    test('should add an item to the top of the stack', () => {
      stack.push(1)
      expect(stack.size).toBe(1)
      expect(stack.top.data).toBe(1)
    })

    test('should increase size when pushing multiple items', () => {
      stack.push(1)
      stack.push(2)
      stack.push(3)
      expect(stack.size).toBe(3)
      expect(stack.top.data).toBe(3)
    })
  })

  describe('pop', () => {
    test('should return null when popping from an empty stack', () => {
      expect(stack.pop()).toBeNull()
    })

    test('should remove and return the top item', () => {
      stack.push(1)
      stack.push(2)
      expect(stack.pop()).toBe(2)
      expect(stack.size).toBe(1)
    })

    test('should update top when popping', () => {
      stack.push(1)
      stack.push(2)
      stack.pop()
      expect(stack.top.data).toBe(1)
    })
  })

  describe('clear', () => {
    test('should remove all items from the stack', () => {
      stack.push(1)
      stack.push(2)
      stack.clear()
      expect(stack.size).toBe(0)
      expect(stack.top).toBeNull()
    })

    test('should return null', () => {
      stack.push(1)
      expect(stack.clear()).toBeNull()
    })
  })

  describe('peek', () => {
    test('should return null for an empty stack', () => {
      expect(stack.peek()).toBeNull()
    })

    test('should return the top item without removing it', () => {
      stack.push(1)
      stack.push(2)
      expect(stack.peek()).toBe(2)
      expect(stack.size).toBe(2)
    })
  })

  test('should maintain LIFO order', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBeNull()
  })
  
})