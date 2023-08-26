/*Exercise 3:  Write a program that checks if a given number is positive, negative, or zero*/
console.log("Answer");
import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { 
   name : "number",
    type: "number",
     message: "Enter the number:",
  },
]);
if (answer.number > 0){
    console.log(`The number  is positive`);
}else if (answer.number < 0){
    console.log(`The number  is negative`);

}else{
    console.log("The number is zero");
}
export{}
