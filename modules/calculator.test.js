import {jest} from '@jest/globals'
import Calculator from './calculator'


// mock the Stack class
jest.mock('./stack', () => {
  return jest.fn().mockImplementation(() => {
    let items = []
    return {
      push: jest.fn(item => items.push(item)),
      pop: jest.fn(() => items.pop()),
      peek: jest.fn(() => items[items.length - 1]),
      clear: jest.fn(() => items = []),
    }
  })
})

describe('Calculator', () => {
  let calculator

  // instantiate new caclulator object for each test
  beforeEach(() => {
    calculator = new Calculator()
  })

  test('should compute simple addition', () => {
    expect(calculator.compute('3 4 +')).toBe(7)
  })

  test('should compute simple subtraction', () => {
    expect(calculator.compute('5 2 -')).toBe(3)
  })

  test('should compute simple multiplication', () => {
    expect(calculator.compute('3 4 *')).toBe(12)
  })

  test('should compute simple division', () => {
    expect(calculator.compute('10 2 /')).toBe(5)
  })

  test('should handle complex equations', () => {
    expect(calculator.compute('3 4 + 2 * 7 /')).toBe(2)
  })

  test('should handle equations with extra whitespace', () => {
    expect(calculator.compute('  3  4    +   2   *  ')).toBe(14)
  })

  test('should return error for division by zero', () => {
    expect(calculator.compute('5 0 /')).toBe('Error: Cannot divide by zero! Stack has been cleared.')
  })

  test('should return error for invalid input', () => {
    expect(calculator.compute('3 4 + &')).toBe('Error: Invalid input. Please enter a valid equation in RPN format.')
  })

  test('should return error for insufficient operands', () => {
    expect(calculator.compute('3 +')).toBe('Error: Invalid input. Please enter a valid equation in RPN format.')
  })

  test('should handle floating point numbers', () => {
    expect(calculator.compute('3.5 2.1 +')).toBeCloseTo(5.6)
  })

})