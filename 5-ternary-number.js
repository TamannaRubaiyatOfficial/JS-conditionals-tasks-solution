/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1 (num1*num2). if not, then the value of the variable result will be the sum of num1 and num2 (num1+num2).

write a simple if-else. 

also, write it using ternary operator.

 */
var num1, num2, result1, result2;
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

// simple if-else
rl.question("Enter first number: ", (firstNum) => {
    rl.question("Enter second number: ", (secondNum) => {
        num1 = Number(firstNum);
        num2 = Number(secondNum);
        if (num1 > num2) {
            result1 = num1*num2;
        }
        else {
            result1 = num1 + num2;
        }

        console.log("Result (if-else): ", result1);

        // ternary operator 
        rl.question("Enter first number: ", (firstNum) => {
            rl.question("Enter second number: ", (secondNum) => {
                num1 = Number(firstNum);
                num2 = Number(secondNum);
                num1>num2 ? result2=num1*num2 : result2=num1+num2;
                console.log("Result (ternary): ", result2);
                rl.close();
            });
        });
    });
});