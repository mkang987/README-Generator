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
            name: 'Link',
            message: 'What is the repo link?',
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
function generateREADME({Title, Link, Description, Installation, Usage, Contributing, Tests, License, Credits, Email, GitHub}) {
    const answers = [Title, Description, Installation, Usage, Contributing, Tests, License, Credits, Email, GitHub];



return `# ${Title}
    
## Table of Contents
1.[Description](#Description)   
2.[Link](#Link)     
3.[Installation](#Installation)     
4.[Usage](#Usage)   
5.[Contributing](#Contributing)     
6.[Tests](#Tests)   
7.[License](#License)   
8.[Credits](#Credits)   
9.[Questions](#Contacts)    

## Link to repo
${Link}
## Description
${Description}
## Licenses
![License](${licenseGenerator(License)})    
[License Information](./generatedLicense.md)
## Installation
${Installation}
## Usage
${Usage}
## Contribution
${Contributing}
## Credits
${Credits}
## Contacts
Contact me via Email at ${Email}
    `;
}


function licenseGenerator(license) {
    var licenseBadge;
    switch(license){
        case "MIT":
            licenseBadge = "https://img.shields.io/badge/license-MIT-green"
            fs.writeFileSync('generatedLicense.md',liscenseList.MITLicense);
            break;
        case "Apache":
            licenseBadge = "https://img.shields.io/badge/license-Apache-blue"
            fs.writeFileSync('generatedLicense.md',liscenseList.apacheLicense);
            break;
        case "GNU GPL":
            licenseBadge = "https://img.shields.io/badge/license-GPL-red"
            fs.writeFileSync('generatedLicense.md',liscenseList.gnuLicense);
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
