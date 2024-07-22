CLI Reverse Polish Notation (RPN) Calculator
===================

This command line calculator was created as way for users who are comfrotable with UNIX-like CLI utilities to easily execute reverse polish notation equations. [RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation), also known as postfix notation, is a method for representing expressions in which the operator symbol is placed after the numbers being operated on: `ex 5 5 +` would return 
`10`.

RPN is evaluated here using a stack structure. As the expression is read from left to right:

1. If a value appears next in the expression, push the value on to the stack
2. If an operator appears next in the expression, pop the two items from the top of the stack and push the result of the operation back on to the stack

This calculator implementation currently offers users 3 menu options (input an equation, clear the stack, or quit) and 4 arithmetic operations (addition, subtraction, division, and multiplication). It was built using node.js.

Solution Design
-----------------

Since the stack used by the calculator relies solely on `push()` and `pop()` functions, I decided to build the stack as a linked list for slight performance gains over an array. I was developing with potential scaling in mind, and although it would be rare for a single calculator to have an extremely large stack, my thought was: what if in the future this application was running several instances of the calculator on a single server? In this case the linked list stack would utilize more efficient memory allocation than an array.

The calculator class was built as a separate module to honor separation of concerns. My choice here was again informed by thinking through probable scaling scenarios: having a separate module allows for a single source where more calculator functions and notations could be added. It also allows the calculator to easily be consumed by other potential interfaces (ie a front-end GUI).

For handling the command line inputs and outputs I chose `inquirer`. This was my first time using this package but I found it provided the funcionality I needed out of the box and kept things easy to read and understand from a developers point of view. For colorizing the text I went with `chalk` and `gradient-string` for easy in-line styling.

I used `jest` to write unit tests for the stack module, calculator module, and server. Since the calculator class utilized the stack class as a dependency, I also wrote integration tests for the calculator module to test their interoperability.

Things I would improve
--------------

Given the nature of the assignment, I decided to focus on the critical functionality and then create tests after the fact. In a different context where I am developing for production systems, I would have likely implemented TDD from the start, instead of waiting.

If I were to spend more time on this project I would build out more unit tests for the server and find ways to run end to end testing. I would also build some kind of front end GUI to test the application's flexibility.

How to run
--------------------

After pulling to your local system first run:
```
npm install
```

To start the application run:
```
npm start
```

To start the test suite run:
```
npm test
```
