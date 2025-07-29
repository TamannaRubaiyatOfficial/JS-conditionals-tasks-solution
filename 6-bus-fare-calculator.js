/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age, studentInput;
var fare = 800;
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (ageInput) => {
    age = Number(ageInput);
    if(age < 10) {
        console.log("Free Bus Fare!!!");
        rl.close();
    } 
    else if(age >= 60) {
        fare = Number(fare - (fare*(15/100)));
        console.log("Your bus fare is: " + fare + "TK");
        rl.close();
    } 
    else {
        rl.question("Are you a student? ", (studentInput) => {
            if(studentInput == "yes") {
                fare = Number(fare - (fare*(50/100)));
                console.log("Your bus fare is: " + fare + "TK");
                rl.close();
            }
            else {
                fare = 800;
                console.log("Your bus fare is: " + fare + "TK");
                rl.close();
            }
        })
    }
});