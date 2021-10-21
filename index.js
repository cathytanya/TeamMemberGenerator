// List of modules used
const fs = require("fs")
const inquirer = require("inquirer")
// employee sub-classes being pulled for the team members
const Manager = require('./teamMembers/Manager')
const Engineer = require('./teamMembers/Engineer')
const Intern = require('./teamMembers/Intern')
const { emit } = require("process")
// make an array for the entered positions the user will have
const team = []
// prompts for the Manager: Name, ID, Office Number, Email
const addManager = () => {
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
        },
        {
            // prompt user if they want to add employee
            type: 'confirm',
            message: "Would you like to add more team members?",
            name: 'addEmployee',
        }
    ])
    // set information about the prompts to the managerInfo
    .then(managerInfo => {
        const {name,id,email,officeNumber} = managerInfo;
        const manager = new Manager(name,id,email,officeNumber)
        team.push(manager)
        console.log(manager)
    })
}
// prompts for the Employee(choose betwen Intern & Engineer): Name, ID, Email, github
const addEmployee = () => {
    console.log(`
    ========================== 
    ADD EMPLOYEES TO THE TEAM 
    ==========================
    `)
    return inquirer.prompt([
        {
            // prompt user to add either an engineer or an intern
            type: 'list',
            message: "Choose employee's role",
            name: 'role',
            choice:[`Engineer`,`Intern`]
        },
        {
            // prompt user to enter the name of the employee
            type: 'input',
            message: "Employee Name:",
            name: 'name',
        },
        {
            // prompt user to enter the ID of the employee
            type: 'input',
            message: "Employee ID:",
            name: 'id',
        },
        {
            // prompt user to enter the email of the employee
            type: 'input',
            message: "Employee E-Mail:",
            name: 'email',
        },
        {
            // prompt user to enter the github of the employee
            type: 'input',
            message: "Employee GitHub username:",
            name: 'github',
        },
    ])
    // set information about the prompts to the employeeInfo
    .then(employeeInfo => {
        const {name,id,email,github} = employeeInfo;
        const employee = new Employee(name,id,email,github)
        team.push(employee)
        console.log(employee)
    })
}
// function to write the html file 

// adding method to include additional employees
addManager()
addEmployee()

