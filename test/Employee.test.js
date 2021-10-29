// using Employee constructor
const { TestWatcher } = require('@jest/core');
const Employee = require('../teamMembers/Employee');

test('create employee object', ()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name',()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getName()).toEqual(expect.any(String));
});
test('gets id from getId',()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getId()).toEqual(expect.any(Number));
});
test('gets email from getEmail',()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test('get role of employee', ()=>{
    const employee = new Employee('Cathie',30,'caticole81@yahoo.ca');
    expect(employee.getRole()).toEqual("Employee");


});