class Shape{
    constructor(backgroundColor, textColor, text){
        this.backgroundColor = backgroundColor
        this.textColor = textColor
        this.text = text
    }
}

class Circle extends Shape {
    create(){
        return `<circle fill="${this.backgroundColor}"><text fill="${this.textColor}">${text}</text> </circle>`
    }
}

class Polygon extends Shape {
    create(){
        return `<polygon fill="${this.backgroundColor}"> <text fill="${this.textColor}">${text}</text></polygon>`
    }
}

class Rect extends Shape {
    create(){
        return `<rect fill="${this.backgroundColor}"> <text fill="${this.textColor}">${text}</text> </rect>`
    }
}

module.exports = {Circle, Polygon, Rect}