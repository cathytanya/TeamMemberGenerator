// parent class constructor
class Employee{
    constructor(name,id,email){
        this.name=name;;
        this.id=id;
        this.email=email;
    }
    // return input of name
    getName (){
        return this.name;
    }
    // reeturn input of ID
    getId (){
        return this.id;
    }
    // return input of email
    getEmail (){
        return this.email;
    }
    // return employee type
    getRole (){
        return "Employee";
    }
}
// export
module.exports = Employee;