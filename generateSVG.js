const {Circle, Polygon, Rect} = require('./lib/shapes');

function generateSVG(data) {
    let svg;
    switch (data.shape) {
        case 'Circle':
        svg= `<svg height="100" width="100">
        <${data.shape} cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${data.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" stroke=${data.textColor} stroke-width="2px" dy=".3em">${data.nameSVG}</text>
      </svg>`
            
            break;
        case 'Polygon':
            svg=`<svg height="210" width="500">
            <polygon points="200,10 250,190 160,210" style="fill: ${data.shapeColor}; stroke:purple; stroke-width:1"/><text x="203" y="135" text-anchor="middle" fill=${data.textColor} font-size="30">${data.nameSVG}</text>
          </svg>`


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