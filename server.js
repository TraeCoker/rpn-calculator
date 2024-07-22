import inquirer from "inquirer"
import Calculator from "./modules/calculator.js"

// instantiate the calculator object for computation and stack management
const calculator = new Calculator()

// greets the user and begins the terminal session
export const init = () => {
    console.log("Welcome to the RPN Calculator!")
    return promptUser()
}

// gets and handles input from user
export const promptUser = async () => {
    try { 
        const input = await inquirer.prompt([
            {
             type: "input",
             name: "inputEquation",
             message: "Enter an equation, enter 'c' to clear, or enter 'q' to exit:",
            }, 
         ])
         
        const equation = input.inputEquation.trim()
            
        // exit session if 'q' is entered
        if(equation === 'q'){
            console.log('Fare thee well!')
            process.exit()
        }
    
        // clear the calculator stack if 'c' is entered
        if(equation === 'c'){
            calculator.stack.clear()
            console.log("The stack has been cleared")
            return promptUser()
        }
    
        // output the result of computation
        console.log(calculator.compute(equation))
    
        // recursively prompt user for input until session is ended
        return promptUser()
    
    } catch (error) {
        console.log(error)
    }
}