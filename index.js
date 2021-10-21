// List of modules used
const fs = require("fs")
const inquirer = require("inquirer")
// employee sub-classes being pulled for the team members
const Manager = require('./teamMembers/Manager')
const Engineer = require('./teamMembers/Engineer')
const Intern = require('./teamMembers/Intern')
// make an array for the entered positions the user will have
const team = []
// prompts for the Manager: Name, ID, Office Number, Email
const addManager = () =>{
    return inquirer.prompt([
        {
            // prompt for manager's name
            type: 'input',
            message: 'Who is the manager?',
            name: 'name',
        },
        {
            // prompt user to enter manager's ID
            type: 'input',
            message: "Enter manager's ID:",
            name: 'id',
        },
        {
            // prompt user to enter manager's email
            type: 'input',
            message: "Enter manager's email:",
            name: 'email',
        },
        {
            // prompt user to enter manager's office number
            type: 'input',
            message: "Enter manager's office number:",
            name: 'officeNumber',
        }
    ])
}
// prompts for the Employee(choose betwen Intern & Engineer): Name, ID, Office Number, Email

// function to write the html file 

// adding method to include additional employees