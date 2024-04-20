// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require('./lib/shapes');

const validateText = (input) => {
    if (input.length > 3) {
        return "Text must be no more than 3 characters.";
    }
    return true;
};

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
    message: "What would you like text to say? (Up to 3 characters)",
    name: "text",
    validate: validateText, 
},
{
    type: "input",
    message: "What color do you want your text to be? Use a keyword or hexadecimal number.",
    name: "textColor",
},]

function createSVG(answers) {
    const shapeClasses = {
        'Circle': Circle,
        'Square': Square,
        'Triangle': Triangle
    };

    const ShapeClass = shapeClasses[answers.shape];
    const shape = new ShapeClass();
    shape.setColor(answers.shapeColor);

    const SVG = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="150" y="125" font-size="55" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
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
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();