// importing the employee contrauctor
const Employee =require('./Employee');
// create the child class Engineer
class Engineer extends Employee{
    // call empolyee constructor
    constructor(name,id,email,github){
        super(name,id,email)
        this.github=github;
    }
    // return github entered
    getGithub(){
        return this.github
    }
    // override the role to manager
    getRole(){
        return "Engineer"
    }
}
// export Engineer
module.exports=Engineer;