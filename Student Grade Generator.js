//Import the prompt module that will interact with the user
const prompt = require("prompt-sync")({ sigint: true });

//Declaring the marks variable where the it prompts the user to input marks
let marks = prompt('Please input your marks:', "0");

//Converts the input from marks to an Integer
marks = parseInt(marks);

//The loop checks the inserted marks and assigns a grade
if (marks >= 0 && marks <= 40) {
  console.log(`Grade E: ${marks}`);
} else if (marks > 40 && marks <= 49) {
   console.log(`Grade D: ${marks}`);
} else if (marks > 49 && marks <= 59) {
   console.log(`Grade C: ${marks}`);
} else if (marks > 60 && marks <= 79) {
   console.log(`Grade B: ${marks}`);
} else if (marks > 79 && marks <= 100) {
   console.log(`Grade A: ${marks}`);
} else {
//If the mark inserted is not between 0-100 return the following message to the user   
  console.log("Please enter a number that is between 0 and 100.");
}