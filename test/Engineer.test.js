//using the Engineer constructor
const Engineer = require('../teamMembers/Engineer')
//testing (name,id,email,github)
describe("Engineer",() => {
    test("Should create Engineer Object"), () => {
        const engineer = new Engineer('Colette', 22, 'cathy.tanya@gmail.com', 'cathytanya')

        expect(engineer.github).toEqual(expect.any(String))
    }
    it("Should gets github"), () => {
        const engineer = new Engineer("Colette", 22, 'cathy.tanya@gmail.com', 'cathytanya')
        
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
    }
    it("Should gets the role of engineer"), () => {
        const engineer = new Engineer("Colette", 22, 'cathy.tanya@gmail.com', 'cathytanya')
        
        expect(engineer.getRole()).toEqual("Engineer")
    }
})




