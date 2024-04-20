// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");

const questions = [{
    type: "list",
    message: "What shape would you like to choose?",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
},
{
    type: "input",
    message: "What color do you want your shape to be? Use a keyword or hexadecimal number.",
    name: "shapeColor",
},
{
    type: "input",
    message: "What would you like text to say?",
    name: "text",
},
{
    type: "input",
    message: "What color do you want your text to be? Use a keyword or hexadecimal number.",
    name: "textColor",
},]

function createSVG(answers) {
    const SVG = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;

    // Create the SVG file
    fs.writeFile('./examples/logo.svg', SVG, (err) => {
        if (err) {
            console.error('Error generating SVG file', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            createSVG(answers);
        })
}

// Function call to initialize app
init();