const {Circle, Rectangle, Triangle} = require('./shapes')
// import {Circle} from './shapes'
//example test
// describe creates the entire testing suite (group of test)
describe('My Circle Suite', () => {
//inside of it is our first real test
    it('Should retrieved all backgroundColor', () => {
        const circle = new Circle('red','blue','abc')
        expect(circle.backgroundColor).toEqual('red')
    })
    it('Should retrieved all textColor', () => {
        const circle = new Circle('red','blue','abc')
        expect(circle.textColor).toEqual('blue')
    })
    
})

describe('My Triangel Suite', () => {})
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');