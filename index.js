// link to js that will create the html file
const generateHTML = require("./src/generateHTML")
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
const addManager = () => {
    return inquirer.prompt([
        {
            // prompt for manager's name
            type: 'input',
            message: 'Name of Manager?',
            name: 'name',
            validate: inputName =>{
                if (inputName){
                    return true;
                }else{
                    console.log("Please Enter Manager's name")
                    return false;
                }
            }
        },
        {
            // prompt user to enter manager's ID
            type: 'input',
            message: "Enter Manager's ID:",
            name: 'id',
            validate: inputID =>{
                if (inputID){
                    return true;
                }else{
                    console.log("Please Enter Manager's ID")
                    return false;
                }
            }
        },
        {
            // prompt user to enter manager's email
            type: 'input',
            message: "Enter Manager's Email:",
            name: 'email',
            validate: inputEmail =>{
                valid =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)
                if (valid){
                    return true;
                }else{
                    console.log("Please Enter Manager's E-mail")
                    return false;
                }
            }
        },
        {
            // prompt user to enter manager's office number
            type: 'input',
            message: "Enter Manager's Office Number:",
            name: 'officeNumber',
            validate: inputOficeNumber =>{
                if (inputOficeNumber){
                    return true;
                }else{
                    console.log("Please Enter Manager's Office Number")
                    return false;
                }
            }

        },
    ])
    // set information about the prompts to the managerInfo
    .then(inputManager => {
        const {name,id,email,officeNumber} = inputManager;
        const manager = new Manager(name,id,email,officeNumber)
        team.push(manager)
        console.log(manager)
        // addEmployee()
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
            message: "Choose Employee's Role",
            name: 'role',
            choices:[`Engineer`,`Intern`]
        },
        {
            // prompt user to enter the name of the employee
            type: 'input',
            message: "Employee Name:",
            name: 'name',
            validate: inputName =>{
                if (inputName){
                    return true;
                }else{
                    console.log("Please Enter Employee's name")
                    return false;
                }
            }
        },
        {
            // prompt user to enter the ID of the employee
            type: 'input',
            message: "Employee ID:",
            name: 'id',
            validate: inputID =>{
                if (inputID){
                    return true;
                }else{
                    console.log("Please Enter Employee's ID")
                    return false;
                }
            }
        },
        {
            // prompt user to enter the email of the employee
            type: 'input',
            message: "Employee E-Mail:",
            name: 'email',
            validate: inputEmail =>{
                valid =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail)
                if (valid){
                    return true;
                }else{
                    console.log("Please Enter Employee's E-mail")
                    return false;
                }
            }
        },
        {
            // prompt user to enter the github of the employee
            type: 'input',
            message: "Employee GitHub username:",
            name: 'github',
            when: (input) => input.role === "Engineer",
            validate: inputGitHub =>{
                if (inputGitHub){
                    return true;
                }else{
                    console.log("Please Enter Employee's GitHub")
                }
            }
        },
        {
            // prompt user to enter the school of the employee
            type: 'input',
            message: "Employee School of Study:",
            name: 'school',
            when: (input) => input.role === "Intern",
            validate: inputSchool =>{
                if (inputSchool){
                    return true;
                }else{
                    console.log("Please Enter Employee's School")
                }
            }

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
        let {name,id,email,role,github,school,confirmEmployee} = employeeInfo;
        let employee;
        // if the person chooses to add Engineer
        if (role === "Engineer"){
            employee = new Engineer (name,id,email,github)
            console.log(employee)
        }
        // if the user chooses to add Intern
        else if (role === "Intern"){
            employee = new Intern (name,id,email,school)
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
const writeFile = data => {
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
    .then(addEmployee)
    .then(team => generateHTML(team))
    .then(pageHTML => writeFile(pageHTML))
    .catch(err=> console.log(err))




