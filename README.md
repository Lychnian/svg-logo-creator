# SVG LOGO CREATOR


## Badges
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## Table of Contents
* [License](#license)
* [Description](#description)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Demo Video](#demo-video)
* [Screenshots](#screenshots)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)
* [Sources](#sources)


## License
This project is licensed under the MIT license.
[License Link](https://opensource.org/licenses/MIT)


## Description
The SVG Logo Creator is a command-line application built in Node.js that empowers users to create simple and customized logos for their projects without the need for professional graphic design services. With this user-friendly tool, users can enter up to three characters of text, select text and shape colors, and choose from various shapes like circles, squares, and triangles. The application then generates an SVG file, which can be opened in a web browser, providing users with a 300x200 pixel logo that matches their input criteria. This tool simplifies the logo creation process and helps users save time and resources, making it an invaluable asset for their projects.


## Features
- Create logos with up to three characters of text.
- Choose from a variety of text colors using color keywords or hexadecimal values.
- Select from three different shapes: circle, triangle, and square.
- Specify the color of the chosen shape using color keywords or hexadecimal values.
- Generates a 300x200 pixel SVG image matching your criteria.
- Generates each logo with a unique timestamped filename to ensure users can create multiple logos without overwriting previous ones.


## Technologies Used
Here's a list of the technologies used in the SVG Logo Creator project:
- Node.js: The project is built using Node.js, which allows for server-side JavaScript execution and provides the runtime environment for the application.
- Inquirer: The Inquirer package is used for collecting user input through the command line. It provides a user-friendly interface for prompting users for input.
- Jest: Jest is a JavaScript testing framework that is used for writing and running unit tests for the project. It ensures the reliability and correctness of the code.
- SVG (Scalable Vector Graphics): SVG is used to generate the logo images. SVG is a widely supported vector graphics format that allows for the creation of scalable and high-quality images.

These technologies work together to create a command-line application that generates SVG logo images based on user input.

  
## Installation
You can install this application using the following steps:

1. clone my repository (github.com/Lychnian/svg-logo-creator) to your local machine by going to your terminal/gitbash
2. go to the directory you wish to clone the repository
3. type the following: git clone https://github.com/Lychnian/svg-logo-creator.git (enter)

  
## Usage
To use the SVG Logo Creator, follow these steps:

1. Open your terminal.
2. Navigate to the project directory.
3. Run the application using the following command:

        node index.js

4. Follow the on-screen prompts to specify the text, text color, shape, and shape color for your logo.
5. Once you've provided all the input, the application will generate an SVG file named logo.svg that is timestamped.
6. Open the logo.svg timestamped file (that was generated and saved in the lib folder of the project directory) in a browser to view your logo.


## Demo Video
To see the SVG Logo Creator in action, watch the walkthrough video that demonstrates how to use the application, including entering responses to prompts and viewing the generated logo in a browser.


## Screenshots


## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/)  
    

## Tests
Unit tests have been implemented using Jest. Before running tests, ensure that you are in the directory where the SVG Logo Creator is located. To run the tests, open your terminal or command prompt, navigate to the SVG Logo Creator directory using the `cd` command, and then run the following command:

        npm test

This command will execute the tests and display the results in your terminal. 


## Questions?
### Reach Me Here: 
[Lychnian](https://github.com/Lychnian)


## Sources
SVG Tutorial - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
