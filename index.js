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
            name: 'nameManager',
        },
        {
            // prompt user to enter manager's ID
            type: 'input',
            message: "Enter manager's ID:",
            name: 'idManager',
        },
        {
            // prompt user to enter manager's email
            type: 'input',
            message: "Enter manager's email:",
            name: 'emailManager',
        },
        {
            // prompt user to enter manager's office number
            type: 'input',
            message: "Enter manager's office number:",
            name: 'officeNumberManager',
        },
    ])
    // set information about the prompts to the managerInfo
    .then(managerInfo => {
        const {nameManager,idManager,emailManager,officeNumberManager} = managerInfo;
        const manager = new Manager(nameManager,idManager,emailManager,officeNumberManager)
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
            name: 'nameEmployee',
        },
        {
            // prompt user to enter the ID of the employee
            type: 'input',
            message: "Employee ID:",
            name: 'idEmployee',
        },
        {
            // prompt user to enter the email of the employee
            type: 'input',
            message: "Employee E-Mail:",
            name: 'emailEmployee',
        },
        {
            // prompt user to enter the github of the employee
            type: 'input',
            message: "Employee GitHub username:",
            name: 'githubEmployee',
        },
        {
            // prompt user to enter the school of the employee
            type: 'input',
            message: "Employee School of Study:",
            name: 'schoolEmployee',
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
        let {nameEmployee,idEmployee,emailEmployee,githubEmployee,schoolEmployee,confirmEmployee} = employeeInfo;
        let employee
        // if the person chooses to add Engineer
        if (role === "Engineer"){
            employee = new Employee (nameEmployee,idEmployee,emailEmployee,githubEmployee)
            console.log(employee)
        }
        // if the user chooses to add Intern
        else if (role === "Engineer"){
            employee = new Employee (nameEmployee,idEmployee,emailEmployee,schoolEmployee)
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


