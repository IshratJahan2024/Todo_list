import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta("\n \t Welcome to Ishratjahan - Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in Todo-List successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore

}
console.log("Your  updated Todo-List:", todoList);