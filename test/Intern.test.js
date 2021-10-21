//using the Intern constructor
const Intern = require('../teamMembers/Intern')
//testing (name,id,email,school)
describe("Intern",() => {
    it("Should create intern Object"), () => {
        const intern = new Intern('Colette', 22, 'cathy.tanya@gmail.com', 'BCS')

        expect(intern.school).toEqual(expect.any(String))
    }
    it("Should gets school"), () => {
        const intern = new Intern('Colette', 22, 'cathy.tanya@gmail.com', 'BCS')
        
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
    }
    it("Should gets the role of engineer"), () => {
        const intern = new Intern('Colette', 22, 'cathy.tanya@gmail.com', 'BCS')
        
        expect(intern.getRole()).toEqual("Intern")
    }
})
