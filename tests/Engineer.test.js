const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it(`should create new intern object when initialized`, () => {
        const engineer = new Engineer();
        expect(typeof engineer).toBe("object");
    });
    it(`should set name via constructor`, () => {
        const engineer = new Engineer("Jon", 3, "jonchirinos@gmail.com", "Jchirinos");
        expect(engineer.name).toBe("Jon");
    });
    it(`should return the name when the getName() method is called`, () => {
        const engineer = new Engineer("Jon", 3, "jonchirinos@gmail.com", "Jchirinos");
        expect(engineer.getName()).toBe("Jon");
    });
    it(`should return the id when the getId() method is called`, () => {
        const engineer = new Engineer("Jon", 3, "jonchirinos@gmail.com", "Jchirinos");
        expect(engineer.getID()).toBe(3);
    });
    it(`should return the email when the getEmail() method is called`, () => {
        const engineer = new Engineer("Jon", 3, "jonchirinos@gmail.com", "Jchirinos");
        expect(engineer.getEmail()).toBe("jonchirinos@gmail.com");
    });
    it(`should return the github when the getGithub() method is called`, () => {
        const engineer = new Engineer("Jon", 3, "jonchirinos@gmail.com", "Jchirinos");
        expect(engineer.getGithub()).toBe("Jchirinos");
    });
});
