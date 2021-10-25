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
            message: 'Name of manager?',
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
    ])
    // set information about the prompts to the managerInfo
    .then(managerInfo => {
        const {name,id,email,officeNumber} = managerInfo;
        const manager = new Manager(name,id,email,officeNumber)
        team.push(manager)
        console.log(manager)
        addEmployee()
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
            choices:[`Engineer`,`Intern`]
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
        {
            // prompt user to enter the school of the employee
            type: 'input',
            message: "Employee School of Study:",
            name: 'school',
        },
        {
            // prompt user to enter the school of the employee
            type: 'confirm',
            message: "Add more team members:",
            name: 'confirmEmployee',
            default: false
        },       
    ])
    // set information about the prompts to the employeeInfo
    .then(employeeInfo => {
        let {name,id,email,github,school,confirmEmployee} = employeeInfo;
        let employee
        // if the person chooses to add Engineer
        if (role === "Engineer"){
            employee = new Employee (name,id,email,github)
            console.log(employee)
        }
        // if the user chooses to add Intern
        else if (role === "Intern"){
            employee = new Employee (name,id,email,school)
            console.log(employee)
        }
        // the array list of all the employees
        team.push(employee)
        // if the user wantes to add more employees then go back to the aadEmployee function
        if (confirmEmployee){
            return addEmployee(team)
        }
        // default=user doesnt need to add more team members
        else{
            return team
        }
    })
}
// function to write the html file 
fs.writeFile = data => {
    fs.writeFile("./asset/index.html", data,err => {
        if (err){
            console.log(err)
            return
        }else{
            console.log('The Team Member Profile was successfully created! Open the index.html')
        }
    })
}

// adding method to include additional employees
addManager()




