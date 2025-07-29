/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// fixed value program
var weight, height, bmi;
weight = 80;
height = 1.7;
bmi = ((weight / height**2).toFixed(1));

if (bmi < 18.5) {
    console.log("You are underweight.")
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal")
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight");
}
else {
    console.log("You are obese");
}

// Dynamic value program
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your weight(kg): ", (weightInput) => {
    rl.question("Enter your height(m): ", (heightInput) => {
        weight = weightInput;
        height = heightInput;
        bmi = ((weight / height**2).toFixed(1));
        if (bmi < 18.5) {
            console.log("You are underweight.")
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log("You are normal")
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            console.log("You are overweight");
        }
        else {
            console.log("You are obese");
        }
        rl.close();
    })
})