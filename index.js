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

// Function to prompt the user for input
async function promptUser() {
    const questions = [
        {
            type: "input",
            name: "text",
            message: "Enter up to 3 characters for the logo text:",
            validate: input => input.length <= 3 && input.length > 0, // Validate text input
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter text color (color keyword or hex code):",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose the shape for your logo:",
            choices: ["Circle", "Square", "Triangle"], // Available shape choices
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter shape color (color keyword or hex code):",
        },
    ];

    return await inquirer.prompt(questions); // Await user's answers to the questions
}

// Function to create a shape object based on user input
function createShape(shapeType, shapeColor) {
    let shape;
    switch (shapeType.toLowerCase()) {
        case "circle":
            shape = new Circle(); // Create a Circle object
            break;
        case "square":
            shape = new Square(); // Create a Square object
            break;
        case "triangle":
            shape = new Triangle(); // Create a Triangle object
            break;
        default:
            console.error("Invalid shape type.");
            return;
    }
    shape.setColor(shapeColor); // Set the color of the shape
    return shape;
}

// Function to write the SVG image to a file
function writeToFile(fileName, svgString) {
    fs.writeFile(fileName, svgString, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log(`Generated ${fileName}`);
        }
    });
}

// Main function to initialize the logo generation process
async function init() {
    console.log("Welcome to SVG Logo Generator");

    try {
        const answers = await promptUser(); // Prompt the user for input and await their responses
        const shape = createShape(answers.shape, answers.shapeColor); // Create a shape object based on user input

        const svg = new Svg(); // Create an SVG generator object
        svg.setTextElement(answers.text, answers.textColor, answers.shape); // Set text element based on user input
        svg.setShapeElement(shape); // Set the shape element

        // Create a timestamp string in a readable format for the filename
        const timestamp = new Date().toISOString().replace(/[-:.]/g, "").slice(0, 14);

        // Specify the path to the lib folder when setting the fileName
        const fileName = `lib/logo_${timestamp}.svg`; // Generate a unique filename for the SVG

        writeToFile(fileName, svg.render()); // Write the SVG image to a file
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

init(); // Initialize the logo generation process
