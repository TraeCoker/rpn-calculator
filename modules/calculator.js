// Calculator module to export Calculator class
// 
// To Build:
// -compute function w/ equation as input
//    -Check if number or operator
//      -If number, push to stack
//      -If operator, pop previous two numbers and compute
//         -Push result back to stack
//    -Return result or error

import Stack from "./stack.js"


export default class Calculator {
    constructor() {
        this.stack = new Stack
    }

}
