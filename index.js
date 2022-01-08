// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const liscenseList = require('./LicenseList.js')

// TODO: Create an array of questions for user input
const userQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: "Title",
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a brief description of the project. What is it used for, what kinds of problems does it solve, What did you learn from this project?'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions on how to use:'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'If you created an application or package how would like other developers to contribute it?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Test for the applications or examples on how to run it:'
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please choose the license used:',
            choices: ['MIT','Apache','GNU GPL']
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List your collaborators, any tutorials or links you followed:'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your contact email?',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub profile link?',
        }
    ])
}

// TODO: Create a function to write README file
function generateREADME({Title, Description, Installation, Usage, Contributing, Tests, License, Credits, Email, GitHub}) {
    const answers = [Title, Description, Installation, Usage, Contributing, Tests, License, Credits, Email, GitHub];



return `# ${Title}
    
## Table of Contents
1.[Description](#Description)
2.[Installation](#Installation)
3.[Usage](#Usage)
4.[Contributing](#Contributing)
5.[Tests](#Tests)
6.[License](#License)
7.[Credits](#Credits)
8.[Questions](#Contacts)

## Description
${Description}
## Licences
![License](${licenseGenerator(License)})

    `;
}


function licenseGenerator(license) {
    var licenseBadge;
    switch(license){
        case "MIT":
            licenseBadge = "https://img.shields.io/badge/license-MIT-green"
            break;
        case "Apache":
            licenseBadge = "https://img.shields.io/badge/license-Apache-blue"
            break;
        case "GNU GPL":
            licenseBadge = "https://img.shields.io/badge/license-GPL-red"
            break;
    }
    return licenseBadge;
}
// TODO: Create a function to initialize app
function init() {
    userQuestion()
        //.then((answers) => fs.writeFileSync('outputREADME.md',answers))
        .then((answers) => fs.writeFileSync('outputREADME.md',generateREADME(answers)))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
