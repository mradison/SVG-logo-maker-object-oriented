const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./generateSVG');
const {Circle, Polygon, Rect} = require('./lib/shapes');

function startPrompts() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape do you want your SVG to be?',
                choices: ['Circle', 'Rect', 'Polygon'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color do you want the shape to be?',
                validate: (value) => {
                    if (value) return true
                    else return 'Please input a value to continue'
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color do you want the text to be?',
                validate: (value) => {
                    if (value) return true
                    else return 'Please input a value to continue'
                },
            },
            {
                type: 'input',
                name: 'nameSVG',
                message: 'What do you want the text to be for the SVG? (cannot be more than 3 characters)',
                validate: (value) => {
                    if (value.length > 3) return 'Please make sure the text is less than 3 characters'
                    else return true
                },
            }
        ])
        .then((data) => {
            const fileName = `${data.nameSVG.toLowerCase().split(' ').join('')}.svg`;

            console.log(data);

            fs.writeFile(fileName, generateSVG(data), (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            );
        })


}


function init() {
    startPrompts();
}

init();