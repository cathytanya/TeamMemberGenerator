//using the Engineer constructor
const Engineer = require('../teamMembers/Engineer')
//creating engineer object
test("Should create Engineer Object", () => {
    const engineer = new Engineer('Colette', 22, 'cathy.tanya@gmail.com', 'cathytanya')
    expect(engineer.github).toEqual(expect.any(String))
})
// gets github from getGithub()
test("Should gets github", () => {
    const engineer = new Engineer("Colette", 22, 'cathy.tanya@gmail.com', 'cathytanya')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})
// gets role from getRole
test("Should gets the role of engineer", () => {
    const engineer = new Engineer("Colette", 22, 'cathy.tanya@gmail.com', 'cathytanya')
    expect(engineer.getRole()).toEqual("Engineer")
})





