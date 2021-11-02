// using Employee constructor
const Employee = require('../teamMembers/Employee');
// employee object is created
test('create employee object', ()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// GET id from employee
test('gets employee name',()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getName()).toEqual(expect.any(String));
});
// GET id from getID()
test('gets id from getId',()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getId()).toEqual(expect.any(Number));
});
// gets email from getEmail()
test('gets email from getEmail',()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// get role from getRole()
test('get role of employee', ()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getRole()).toEqual("Employee");
});