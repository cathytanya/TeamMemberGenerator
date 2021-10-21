// importing the employee contrauctor
const Employee =require('./Employee');
// create the child class Intern
class Intern extends Employee{
    // call empolyee constructor
    constructor(name,id,email,school){
        super(name,id,email)
        this.school=school;
    }
    // return school entered
    getSchool(){
        return this.school
    }
    // override the role to intern
    getRole(){
        return "Intern"
    }
}
// export Intern
module.exports=Intern;