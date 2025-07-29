/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// Dynamic nested condition
const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score: ", (myScoreInput) => {
    var myScore = myScoreInput;
    if (myScore >= 80 && myScore <= 100) {
        rl.question(("Ami " + myScore + " paici, tui koto paicis? "), (frndScoreInput) => {
            var frndScore = frndScoreInput;
            if(frndScore >= 80 && frndScore <= 100) {
                console.log("Chol lunch e jai!!");
            }
            else if(frndScore < 80 && frndScore >=60) {
                console.log("Bepar na next time vlo korbi.");
            }
            else if (frndScore < 60 && frndScore >= 40) {
                console.log("Tor message dekhar time nai");
            }
            else {
                console.log("Tore ami chini na");
            }
            rl.close();
        })
    }
    else {
        console.log("Koi r jabo, bari gie ghumai :(");
        rl.close();
    }
    
})