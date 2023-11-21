const {Circle, Polygon, Rect} = require('./lib/shapes');

function generateSVG(data) {
    let svg;
    switch (data.shape) {
        case 'Circle':
        svg= `<svg height="300" width="200">
        <${data.shape} cx="100" cy="150" r="90" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" stroke=${data.textColor} stroke-width="2px" dy=".3em">${data.nameSVG}</text>
      </svg>`
            
            break;

        case 'Polygon':
            svg=`     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,15 50,185 250,185" fill="${data.shapeColor}" />
            <text x="150" y="120" font-size="30" text-anchor="middle" fill="${data.textColor}">${data.nameSVG}</text>
          </svg>`
            break;

        case 'Rect':
                svg=`<svg width="200" height="200">
                <${data.shape} width="100" height="100" style="fill:${data.shapeColor};stroke:rgb(0,0,0)" /> <text fill=${data.textColor} x="40" y="50">${data.nameSVG}</text>
              </svg>`
        default:
            break;
    }

    return svg
}

module.exports = generateSVG; 