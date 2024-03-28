// Below 70, you're okay
// Case 1 you are going st 75
// 75-70 = 5
// 5/5 = 1

// Case 2 you are going 80
// 80-70 = 10
// 10/5 = 2
const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);


function checkSpeed(speed){
    if (speed < 70) {
        return"OK";
    }

    let diff = speed - 70;
    let point = Math.ceil(diff / 5);

    if(point > 12) {
        return "License suspended!";
    }

    return "Points deducted " + point;
}

// Prompt the user for input and process the speed check
function main() {
    rl.question("Enter your Speed\n", (speed) => {
        let s = parseInt(speed);
        if (isNaN(s)) {
            console.log("Please enter a number \n");
            main();
            return;
        }
        console.log(checkSpeed(s));
        rl.close();
    });
}

main();