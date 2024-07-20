import inquirer from "inquirer"
import Calculator from "./modules/calculator.js"

// instantiate the calculator object for computation and stack management
const calculator = new Calculator()

// greets the user and begins the terminal session
const init = () =>{
    console.log("Welcome to the RPN Calculator!")
    promptUser()
}

// gets and handles input from user
const promptUser = () => {
    inquirer.prompt([
        {
         type: "input",
         name: "inputEquation",
         message: "Enter an equation or enter 'q' to exit:",
        }, 
     ])
     .then((input) => {
        const equation = input.inputEquation.trim()
        
        // exit session if 'q' is entered
        if(equation === 'q'){
            console.log('Fare thee well!')
            process.exit(1)
        }

        // output the result of computation
        console.log(calculator.compute(equation))

        // recursively prompt user for input until session is ended
        promptUser()

     })
     .catch((error) => {
        console.log(error)
     })
}

// initializes the terminal session
init()