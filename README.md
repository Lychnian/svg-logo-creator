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
To see the SVG Logo Creator in action, watch my YouTube walkthrough video that demonstrates how to use the application, including entering responses to prompts and viewing the generated logo in a browser.
YouTube URL: https://youtu.be/yVpkmNZ0MjI


## Screenshots


![Screenshot Shapes js](https://github.com/Lychnian/svg-logo-creator/assets/140586279/fe28665a-5cde-4e6f-9016-f43881411dcd)


![Screenshot shapes test js](https://github.com/Lychnian/svg-logo-creator/assets/140586279/cf8da38c-a642-4209-bd72-85a19d18c1d0)


![Screenshot jest](https://github.com/Lychnian/svg-logo-creator/assets/140586279/400bfc27-fa54-4551-8eb3-04ac15616362)


![Screenshot Test Passed](https://github.com/Lychnian/svg-logo-creator/assets/140586279/353587b1-2790-477d-ab95-8be9c26603ea)


![prompts code](https://github.com/Lychnian/svg-logo-creator/assets/140586279/d1dfeb26-a2a2-4cd0-8003-a4bf77458063)


![Screenshot node index js](https://github.com/Lychnian/svg-logo-creator/assets/140586279/50437e02-84e6-4d82-a1b3-51db99030893)


![Screenshot Prompt Received](https://github.com/Lychnian/svg-logo-creator/assets/140586279/449fe8dc-562d-4ac4-917c-5b0efea9870e)


![Screenshot JSON](https://github.com/Lychnian/svg-logo-creator/assets/140586279/70814eb9-1284-4a4d-a7af-e7748529e928)


![Screenshot Circle Logo](https://github.com/Lychnian/svg-logo-creator/assets/140586279/2a716d60-575c-4fcc-aac3-6a1dd2323222)


![Screenshot Square](https://github.com/Lychnian/svg-logo-creator/assets/140586279/b4d9ed4e-bd0a-4351-9c2a-5a64a63142a7)


![Screenshot Triangle](https://github.com/Lychnian/svg-logo-creator/assets/140586279/19d41a7e-8069-4586-a291-1c6d244a8f62)


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
