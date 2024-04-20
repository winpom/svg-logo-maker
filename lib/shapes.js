class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error('Method render() must be implemented');
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<rect x="62.5" y="12.5" width="175" height="175" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`
    }
}

module.exports = {Shape, Circle, Square, Triangle};
