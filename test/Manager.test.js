//using the manager constructor
const Manager = require('../teamMembers/Manager')
//testing (name,id,email,officeNumber)
// the manager object is created
test("Should create Manager Object", () => {
    const manager = new Manager('Colette', 22, 'cathy.tanya@gmail.com', 2)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})
// get the role from getRole()
test("Should gets the role of employee", () => {
    const manager = new Manager("Colette", 22, 'cathy.tanya@gmail.com', 2)
    expect(manager.getRole()).toEqual("Manager")
})




