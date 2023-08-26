/*Exercise 4:   Write a program that checks if a given number is even or odd. */
console.log("Answer");
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { 
   name : "number",
    type: "number",
     message: "Enter the number:",
  },
]);
if  (answer.number % 2 === 0){
    console.log("The  is even number ");
}else{
    console.log("The  is odd number ");
}



export{}