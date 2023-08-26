import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "volume",
        type: "number",
        message: "Enter the volume of a cube:",
    },
]);
console.log("The volume of the cube is:", answers.volume ** 3);
