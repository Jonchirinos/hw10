const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const employees = [];

function promptUser() {
    // runs inquirer npm
    inquirer
        // list of questions for the user to answer
        .prompt([
            {
                name: "role",
                type: "list",
                choices: ["Manager", "Engineer", "Intern", "Done"],
                message: "What Job Role Would You Like To Select?",
            },
            {
                name: "name",
                type: "input",
                // if a role is selected, continue with the program.
                when: (answers) => answers.role !== "Done",
                message: "Enter Employee Name",
            },
            {
                name: "id",
                type: "input",
                when: (answers) => answers.role !== "Done",
                message: "Enter Employee ID?",
            },
            {
                name: "email",
                type: "input",
                when: (answers) => answers.role !== "Done",
                message: "Enter Engineer's Email Address?",
            },
            {
                name: "officeNumber",
                type: "input",
                when: (answers) => answers.role === "Manager",
                message: "Enter Office Number",
            },
            {
                name: "github",
                type: "input",
                when: (answers) => answers.role === "Engineer",
                message: "Enter The GitHub Username",
            },
            {
                name: "school",
                type: "input",
                when: (answers) => answers.role === "Intern",
                message: "Enter Employee's School",
            },
        ])
        .then((answers) => {
            switch (answers.role) {
                case "Intern":
                    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    console.log(newIntern);
                    employees.push(newIntern);
                    promptUser();
                    break;
                case "Engineer":
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    employees.push(newEngineer);
                    promptUser();
                    break;
                case "Manager":
                    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    employees.push(newManager);
                    promptUser();
                    break;
                default:
                    const data = htmlTemplate();
                    writeToFile("index.html", data);
            }
        });
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Finished")));
    // fs.writeFile( file, data, options, callback )
    // TODO: check answers.role
}
function htmlTemplate() {
    console.log(employees);
    let tempData = "";
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === "Intern") {
            tempData += `
           <div class="flex flex-col justify-center items-center border-8 p-6">
           <h1>Name: ${employees[i].name}</h1>
           <h2>${employees[i].getRole()}</h2>
           <p>Id: ${employees[i].id} </p>
           <p>Email: ${employees[i].email} </p>
           <p>University: ${employees[i].school} </p>
           </div>
           `;
        }
        if (employees[i].getRole() === "Manager") {
            tempData += `<div class="flex flex-col justify-center items-center border-8 p-6">
           <h1>Name: ${employees[i].name}</h1>
           <h2>${employees[i].getRole()}</h2>
           <p>Id: ${employees[i].id} </p>
           <p>Email: ${employees[i].email} </p>
           <p>Office Number: ${employees[i].officeNumber} </p>
           </div>
           `;
        }
        if (employees[i].getRole() === "Engineer") {
            tempData += `<div class="flex flex-col justify-center items-center border-8 p-6">
           <h1>Name: ${employees[i].name}</h1>
           <h2>${employees[i].getRole()}</h2>
           <p>Id: ${employees[i].id} </p>
           <p>Email: ${employees[i].email} </p>
           <p>GitHub: ${employees[i].github} </p>
           </div>`;
        }
    }
    console.log(tempData);
    return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <script src="https://cdn.tailwindcss.com"></script>
       <title>TeamProfilePage</title>
   </head>
   <body class="flex flex-col justify-center items-center bg-red-400 p-6 text-lg">
   <h1 class="flex justify-center gap-10">Team Profile Page</h1>
   <div class="flex flex-col border"></div>
   <br>
   <div class="flex justify-center gap-10">
   ${tempData}
   </div>
   </body>
   </html>`;
}
promptUser();
