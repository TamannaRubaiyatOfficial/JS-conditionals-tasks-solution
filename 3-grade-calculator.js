/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout 
});

rl.question("Enter your score: ", (scoreInput) => {
    var score = scoreInput;
    if (score >= 90 && score <= 100) {
        console.log("Your grade is A");
    }
    else if (score >= 80 && score < 90) {
        console.log("Your grade is B");
    }
    else if (score >= 70 && score < 80) {
        console.log("Your grade is C");
    }
    else if (score >= 60 && score < 70) {
        console.log("Your grade is D");
    }
    else {
        console.log("Your grade is F")
    }
    rl.close();
});