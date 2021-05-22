# Team Profile Generator

## Description

The team profile generator creates a layout of a company's employees based on user input from the command line. There are three different types of employees: manager, engineer and intern. A class was created for each type which were all an extension of an employee class. The program will begin by requesting information about the manager (name, ID, email, office number). Once the information is submitted, the user is given the option to add another employee (either engineer or intern) or finish the generator. Each time another employee is added this same prompt comes up until the user has entered all employees and want to create an html page. The user will input the same information for each employee as they did for the manager except instead of an office number, the engineer will prompt for a GitHub username and the intern will prompt for a school name.

There are checks in place for the user input to ensure information is supplied for all the prompts. The email prompt has an additional check to ensure the @ symbol is included in the response. Once all the information is submitted, the employee information is used to create cards using Bootstrap for a responsive HTML layout of the information. The final index.html file is saved in the dist folder.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Questions](#questions)

## Installation

In order to run the program, you can download or clone the program from my GitHub site. In the root directory of the program, ensure all packages are available by typing 'npm init' and 'npm install' in the command line. Then the program should be available to execute with "node index.js".

## Usage

The team profile generator can be used to create a dynamic layout of employee information based on command line prompts. A video of how the program operates can be seen [here](https://drive.google.com/file/d/1IMwOQQogHbe365GF4Zbu3N0u9CbiVGzn/view).

Screenshot showing sample output of team profile:
![Team Profile Screenshot](/img/Screenshot.png "Team Profile Screenshot")

## Testing

Testing was done using Jest. To run the tests type "npm test" in the command line to see the results. Tests were created to ensure each of the four classes properly created an object. Each method within the classes were also tested to ensure proper information was being relayed.

## Questions

The readme generator can be found on the following [GitHub page](https://github.com/kunkelkevin/team-profile).<br />If you have any additional questions, you can email me [here](mailto:kunkelkevin@yahoo.com)
