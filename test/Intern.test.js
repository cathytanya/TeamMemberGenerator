//using the Intern constructor
const Intern = require('../teamMembers/Intern')
// creating the intern object
test("Should create intern Object", () => {
    const intern = new Intern('Colette', 22, 'cathy.tanya@gmail.com', 'BCS')
    expect(intern.school).toEqual(expect.any(String))
})
// get the school from getSchool()
test("Should gets school", () => {
    const intern = new Intern('Colette', 22, 'cathy.tanya@gmail.com', 'BCS')
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})
// get the role from getRole()
test("Should gets the role of engineer", () => {
    const intern = new Intern('Colette', 22, 'cathy.tanya@gmail.com', 'BCS')
    expect(intern.getRole()).toEqual("Intern")
})
