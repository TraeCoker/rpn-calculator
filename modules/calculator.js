// Calculator module to export Calculator class
// 
// To Build:
// -compute function w/ equation as input
//    -Return result or error

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
                switch (item) {
                    case "+": // addition
                        stack.push(num2 + num1)
                        break
                    case "-": //subtraction
                        stack.push(num2 - num1)
                        break
                    case "/": // division
                        stack.push(num2 / num1)
                        break
                    case "*": //multiplication
                        stack.push(num2 * num1)
                        break
                }
            }
        }

        // return top of stack
        return this.stack.peek()
    }
}


