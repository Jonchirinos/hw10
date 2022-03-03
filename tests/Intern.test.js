const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    it(`should create new intern object when initialized`, () => {
        const intern = new Intern();
        expect(typeof intern).toBe("object");
    });
    it(`should set name via constructor`, () => {
        const intern = new Intern("Jon", 14, "jonchirinos@gmail.com", "Iowa");
        expect(intern.name).toBe("Jon");
    });
    it(`should return the name when the getName() method is called`, () => {
        const intern = new Intern("Jon", 14, "jonchirinos@gmail.com", "Iowa");
        expect(intern.getName()).toBe("Jon");
    });
    it(`should return the id when the getId() method is called`, () => {
        const intern = new Intern("Jon", 14, "jonchirinos@gmail.com", "Iowa");
        expect(intern.getID()).toBe(14);
    });
    it(`should return the email when the getEmail() method is called`, () => {
        const intern = new Intern("Jon", 14, "jonchirinos@gmail.com", "Iowa");
        expect(intern.getEmail()).toBe("jonchirinos@gmail.com");
    });
    it(`should return the university when the getSchool() method is called`, () => {
        const intern = new Intern("Jon", 14, "jonchirinos@gmail.com", "Iowa");
        expect(intern.getSchool()).toBe("Iowa");
    });
});
