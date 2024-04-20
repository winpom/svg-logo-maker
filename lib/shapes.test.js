const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    test('should create a red circle', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe('Square', () => {
    test('should create a green square', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="40" y="40" width="175" height="175" fill="green" />');
    });
});

describe('Triangle', () => {
    test('should create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});