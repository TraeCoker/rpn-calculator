/* Calculator module to export Calculator class */

// import Stack class to use as Calculator property
import Stack from "./stack.js"


export default class Calculator {
    constructor() {
        this.stack = new Stack
    }

    // compute equation using reverse polish notation
    compute(equation) {

        // split input into array and filter for extra whitespace
        let equationArr = equation.split(" ")
        equationArr = equationArr.filter((item) => item != "")
        let stack = this.stack

        // iterate. Push to stack if item is a number and Evaluate if item is an operator
        for (let item of equationArr) {
            if(!isNaN(parseFloat(item))) {
                stack.push(parseFloat(item))
            } else {
                let num1 = stack.pop()
                let num2 = stack.pop()
                // if there are not enough numbers on the stack, clear the stack and return an error
                if (num1 === null || num2 === null) {
                    stack.clear()
                    return "Error: Invalid input. Please enter a valid equation in RPN format."
                }
                // evaluate based on operator
                switch (item) {
                    case "+": // addition
                        stack.push(num2 + num1)
                        break
                    case "-": //subtraction
                        stack.push(num2 - num1)
                        break
                    case "/": // division

                        // Check for division by 0
                        if(num1 === 0){
                        stack.clear()
                        return "Error: Cannot divide by zero! Stack has been cleared."
                        }

                        stack.push(num2 / num1)
                        break
                    case "*": //multiplication
                        stack.push(num2 * num1)
                        break
                    default:
                        // if character is not valid, clear the stack and return an error
                        stack.clear()
                        return "Error: Invalid input. Please enter a valid equation in RPN format."
                }
            }
        }

        // return top of stack
        return this.stack.peek()
    }
}

