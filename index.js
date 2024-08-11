// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'what is title of your application?',
    name: 'title',
},
{

    type: 'input',
    message: 'Describe your application?',
    name: 'description',
},
{
    type: 'list',
    message: 'what kind of License your application needs?',
    name: 'license',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
},
{
    type: 'input',
    message: 'what needs to installed for the dependencies ?',
    name: 'dependency',

},
{
    type: 'input',
    message: 'what are the usage instructions of your applications ?',
    name: 'usage',

},
{
    type: 'input',
    message: 'what are the contribution guidelines for your application ?',
    name: 'contribution',

},
{
    type: 'input',
    message: 'what command needs to run to execute the tests ?',
    name: 'tests',

},
{
    type: 'input',
    message: 'what is your github username ?',
    name: 'github',

},
{
    type: 'input',
    message: 'what is your email id ?',
    name: 'email',

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log("Error writing to the file ", fileName);
        }
        else {
            console.log("Successfully wrote to ", fileName);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile(`./README.md`, readmeContent);
            console.log("README.MD generated successfully")

        }).catch((error) => {
            console.error("Error generating README.MD :", error)
        })
}

// Function call to initialize app
init();
