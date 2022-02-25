const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "Project Title?",
        },
        {
            name: "description",
            type: "input",
            message: "Insert description of the project you have developed",
        },
        {
            name: "tests",
            type: "input",
            message: "How do you test the app?",
        },
        {
            name: "contribution",
            type: "input",
            message: "What were your contributions to the development of this app?",
        },
        {
            name: "installation",
            type: "input",
            message: "How do you install the app?",
        },
        {
            name: "usage",
            type: "input",
            message: "What should the user do?",
        },
        {
            name: "screenshot",
            type: "input",
            message: "Link to image of completed app?",
        },
        {
            name: "questions",
            type: "input",
            message: "Any questions concerning the app or its development?",
        },
        {
            name: "pages",
            type: "input",
            message: "Enter GitHub Pages URL",
        },
        {
            name: "repo",
            type: "input",
            message: "Enter GitHub Repo URL",
        },
        {
            name: "github",
            type: "input",
            message: "Enter your GitHub Username",
        },
        {
            name: "contact",
            type: "input",
            message: "Enter preferred contact email",
        },
        {
            name: "license",
            type: "list",
            message: "Which license was used for the application?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
    ])
    .then((answers) => {
        const data = generateIndex(answers);
        console.log("data", data);
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Finished")));
            // fs.writeFile( file, data, options, callback )

            // TODO: check answers.role
            // if role is 'manager' create new manager object and push into employee array
            // if role is 'engineer' create new manager object and push into employee array
            // if role is 'intern' create new manager object and push into employee array
            // if user wants to create another employee call this function again
            // note everything is wrapped in a function
            // IN NEW FUNCTION else create string literal. note if user doesn't continue, generate html function
            // inside of html loop through employees array to generate divs for cards
            // write employees to html file
        }
        writeToFile("README.md", data);
    });
// body html
`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>` // card html
`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`;
