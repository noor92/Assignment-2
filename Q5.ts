/*Exercise 5:  Write a program that determines if a person is eligible to vote based on their 
age.*/
console.log("Answer");
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { 
   name : "age",
    type: "number",
     message: "Enter the age of Person:",
  },
]);
if (answer.age>=18){
   console.log("This person is eligible for vote");
}else {
    console.log("This person is non-eligible for vote");
}