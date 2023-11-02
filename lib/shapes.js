class Shape{
    constructor(shapeColor, textColor, nameSVG){
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.nameSVG = nameSVG
    }
}

class Circle extends Shape {
    create(){
        return `<circle fill="${this.shapeColor}"><text fill="${this.textColor}">${this.nameSVG}</text> </circle>`
    }
}

class Polygon extends Shape {
    create(){
        return `<polygon fill="${this.shapeColor}"> <text fill="${this.textColor}">${this.nameSVG}</text></polygon>`
    }
}

class Rect extends Shape {
    create(){
        return `<rect fill="${this.shapeColor}"> <text fill="${this.textColor}">${this.nameSVG}</text> </rect>`
    }
}

module.exports = {Circle, Polygon, Rect};