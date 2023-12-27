// Base Shape class
class Shape {
    constructor() {
         // Initialize the color property as an empty string
        this.color = "";
    }

    // Method to set the color property of the shape
    setColor(color) {
        this.color = color;
    }
}

// Circle class extends Shape
class Circle extends Shape {
    // Method to render a circle SVG element with the specified color
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Square class extends Shape
class Square extends Shape {
    // Method to render a square SVG element with the specified color
    render() {
        return `<rect x="55" y="20" width="190" height="190" fill="${this.color}" />`;
    }
}

// Triangle class extends Shape
class Triangle extends Shape {
    // Method to render a triangle SVG element with the specified color
    render() {
        return `<polygon points="150,10 250,190 50,190" fill="${this.color}" />`;
    }
}

// Exporting the classes
module.exports = { Circle, Square, Triangle };
