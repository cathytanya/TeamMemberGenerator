//using the manager constructor
const Manager = require('../teamMembers/Manager')
//testing (name,id,email,officeNumber)
describe("Manager",() => {
    it("Should create Manager Object"), () => {
        const manager = new Manager('Colette', 22, 'cathy.tanya@gmail.com', 010)

        expect(manager.officeNumber).toEqual(expect.any(Number))
    }

    it("Should gets the role of employee"), () => {
        const manager = new Manager("Colette", 22, 'cathy.tanya@gmail.com', 010)
        
        expect(manager.getRole()).toEqual("Manager")
    }
})




