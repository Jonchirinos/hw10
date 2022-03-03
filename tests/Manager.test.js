const Manager = require("../lib/Manager");

describe("Manager", () => {
    it(`should create new intern object when initialized`, () => {
        const manager = new Manager();
        expect(typeof manager).toBe("object");
    });
    it(`should set name via constructor`, () => {
        const manager = new Manager("Jon", 3, "jonchirinos@gmail.com", "Iowa");
        expect(manager.name).toBe("Jon");
    });
    it(`should return the name when the getName() method is called`, () => {
        const manager = new Manager("Jon", 3, "jonchirinos@gmail.com", "Iowa");
        expect(manager.getName()).toBe("Jon");
    });
    it(`should return the id when the getId() method is called`, () => {
        const manager = new Manager("Jon", 3, "jonchirinos@gmail.com", "Iowa");
        expect(manager.getID()).toBe(3);
    });
    it(`should return the email when the getEmail() method is called`, () => {
        const manager = new Manager("Jon", 3, "jonchirinos@gmail.com", "Iowa");
        expect(manager.getEmail()).toBe("jonchirinos@gmail.com");
    });
    it(`should return the office # when the getOfficeNumber() method is called`, () => {
        const manager = new Manager("Jon", 3, "jonchirinos@gmail.com", "2");
        expect(manager.getOfficeNumber()).toBe("2");
    });
});
