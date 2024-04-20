const Shape = require('../shape.js');
const Circle = require('../shape.js');
const Square = require('../shape.js');
const Triangle = require('../shape.js');

describe('Triangle', () => {
    test('should create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});