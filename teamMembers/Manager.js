// importing the employee contrauctor
const Employee =require('./Employee');
// create the child class Manager
class Manager extends Employee{
    // call empolyee constructor
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber=officeNumber;
        
    }
    // override the role to manager
    getRole(){
        return "Manager"
    }
}
// export manager
module.exports=Manager;