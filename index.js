// Import necessary modules
const inquirer = require("inquirer"); // For user prompts
const fs = require("fs"); // For file operations
const { Circle, Square, Triangle } = require("./lib/shapes"); // Import shape classes from shapes.js

// Create a class for generating SVG images
class Svg {
    constructor() {
        this.textElement = ''; // Initialize an empty text element
        this.shapeElement = ''; // Initialize an empty shape element
    }

    render() {
        // Generate the SVG image with shape and text elements
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color, shapeType) {
        if (shapeType.toLowerCase() === "triangle") {
            // Adjust font size and position for the triangle
            this.textElement = `<text x="150" y="140" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`;
        } else {
            // Use the default font size and position for other shapes
            this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
        }
    }
    
    setShapeElement(shape) {
        // Set the shape element by calling the render method of the selected shape
        this.shapeElement = shape.render();
    }
}
