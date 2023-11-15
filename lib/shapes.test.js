const {Circle, Polygon, Rect} = require('./shapes')
// import {Circle} from './shapes'
//example test
// describe creates the entire testing suite (group of test)
describe('My Circle Suite', () => {
//inside of it is our first real test
    it('Should retrieved all shapeColor', () => {
        const circle = new Circle('red','blue','abc')
        expect(circle.shapeColor).toEqual('red')
    })
    it('Should retrieved all textColor', () => {
        const circle = new Circle('red','blue','abc')
        expect(circle.textColor).toEqual('blue')
    })
    
})

describe('My Polygon Suite', () => {
    it('Should retrieved all shapeColor', () => {
        const polygon = new Polygon('red','blue','abc')
        expect(polygon.shapeColor).toEqual('red')
    })
    it('Should retrieved all textColor', () => {
        const polygon = new Polygon('red','blue','abc')
        expect(polygon.textColor).toEqual('blue')
    })
})

describe('My Rect Suite', () => {
    it('Should retrieved all shapeColor', () => {
        const rect = new Rect('red','blue','abc')
        expect(rect.shapeColor).toEqual('red')
    })
    it('Should retrieved all textColor', () => {
        const rect = new Rect('red','blue','abc')
        expect(rect.textColor).toEqual('blue')
    })
})

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');