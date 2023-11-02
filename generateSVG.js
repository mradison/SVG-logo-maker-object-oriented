// let data = require('./index');

// function writeToFile (fileName, data) {
//     let logo = '<svg width="300" height="300"'

//     logo += `${data.shape}`

//     let Choice;
//     if(data.shape === "Circle"){
//         Choice = new Circle();
//         logo += `<circle cx=150 cy=150 r="75" fill="${data.shapeColor}"/>`
//     } else if (data.shape === "Triangle") {
//         Choice = new Triangle();
//         logo += `<polygon points="140,15 225,170 66,170" fill="${data.shapeColor}"/>`;
//     } else {
//         Choice = new Square();
//         logo += `<rect x="60" y="30" width="175" height="175" fill="${data.shapeColor}"/>`;
//     }
    
//     logo += `<text fill=${data.textColor} x="120" y="50">${data.nameSVG}</text>`;

//     logo += `</svg>`; 

//     fs.writeFile(fileName, logo, (err) =>
//         err ? console.log(err) : console.log('SVG created!')
//      );
//      return 
// }


// writeToFile();


// // const {Circle, Polygon, Rect} = require('./lib/shapes');

// // function generateSVG(data) {
// //     `<svg width="300" height="300">
// //     <${data.shape} x="50" y="20" width="150 height="150" fill="${data.shapeColor}"/>
// //         <text fill=${data.textColor} x="120" y="50">${data.nameSVG}</text>
// //     </svg>`

// //     return 
// // }

// // module.exports = generateSVG; 