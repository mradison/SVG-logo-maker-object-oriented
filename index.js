const inquirer = require('inquirer');
const fs = require('fs');

function startPrompts() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'What shape do you want your SVG to be?',
                choices: ['Circle', 'Square', 'Triangle'],
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
                name: 'backgroundColor',
                message: 'What color do you want the background to be?',
                validate: (value) => {
                    if (value) return true
                    else return 'Please input a value to continue'
                },
            },
            {
                type: 'input',
                name: 'text',
                message: 'What do you want the text to be for the SVG? (cannot be more than 3 characters)',
                validate: (value) => {
                    if (value.length > 3) return 'Please make sure the text is less than 3 characters'
                    else return true
                },
            }
        ])
        .then((data) => {
            const fileName = `${data.name.toLowerCase().split(' ').join('')}.svg`;

            fs.writeFile(fileName, generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        })
}

function init() {
    startPrompts();
}

init();