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

class Triangle extends Shape {
    create(){
        return `<triangle fill="${this.backgroundColor}"> <text fill="${this.textColor}">${text}</text></triangle>`
    }
}

class Rectangle extends Shape {
    create(){
        return `<rectangle fill="${this.backgroundColor}"> <text fill="${this.textColor}">${text} </text> </rectangle>`
    }
}


module.exports = {Circle, Rectangle, Triangle}