const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const employees = [];

function promptUser() {
    inquirer
        .prompt([
            {
                name: "role",
                type: "list",
                choices: ["Manager", "Engineer", "Intern"],
                message: "What Job Role Would You Like To Select?",
            },
            {
                name: "name",
                type: "input",
                message: "Enter Employee Name",
            },
            {
                name: "id",
                type: "input",
                message: "EnterEmployee ID?",
            },
            {
                name: "email",
                type: "input",
                message: "Enter Employee's Email Address?",
            },
            {
                name: "office",
                type: "input",
                message: "Enter Office Number",
            },
            {
                name: "github",
                type: "input",
                message: "Enter The GitHub Username",
            },
            {
                name: "school",
                type: "input",
                message: "Enter Employee's School",
            },
            {
                name: "continue",
                type: "list",
                choices: ["yes", "no"],
                message: "Would you like to add another employee?",
            },
        ])
        .then((answers) => {
            switch (answers.role) {
                case "Intern":
                    const newIntern = new Intern("a", "a", "a", "a");
                    // console.log(newIntern);
                    employees.push(newIntern);
                    break;
                case "Engineer":
                    const newEngineer = new Engineer("a", "a", "a", "a");
                    // console.log(newIntern);
                    employees.push(newEngineer);
                    break;
                case "Manager":
                    const newManager = new Manager("a", "a", "a", "a");
                    // console.log(newIntern);
                    employees.push(newManager);
                    break;
            }

            // console.log(employees);
            // if role is 'manager' create new manager object and push into employee array
            // if role is 'engineer' create new manager object and push into employee array
            // if role is 'intern' create new manager object and push into employee array
            // if user wants to create another employee call this function again
            // note everything is wrapped in a function
            // IN NEW FUNCTION else create string literal. note if user doesn't continue, generate html function
            // inside of html loop through employees array to generate divs for cards
            // write employees to html file

            writeToFile("index.html", htmlTemplate(employees));
        });

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Finished")));
        // fs.writeFile( file, data, options, callback )

        // TODO: check answers.role
    }
}

function htmlTemplate(data) {
    let tempData = "";

    for (let i = 0; i < data.length; i++) {
        let specialField = "";

        if (data[i].role === "Intern") {
        }
        let cardTemplate = `
        <div>
        <h1>Name: ${data[i].name}</h1>
        <p>Id: ${data[i].name} </p>
        <p>${specialField} </p>
        </div>
    `;

        tempData = tempData + cardTemplate;
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    ${tempData}

    </body>
    </html>`;
}

// TODO: Generate HTML
