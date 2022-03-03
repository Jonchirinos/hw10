const Employee = require("../lib/Employee");

describe("Employee", () => {
    it(`should create new intern object when initialized`, () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });
    it(`should set name via constructor`, () => {
        const employee = new Employee("Jon", 3, "jonchirinos@gmail.com", "Employee");
        expect(employee.name).toBe("Jon");
    });
    it(`should return the name when the getName() method is called`, () => {
        const employee = new Employee("Jon", 3, "jonchirinos@gmail.com", "Employee");
        expect(employee.getName()).toBe("Jon");
    });
    it(`should return the id when the getId() method is called`, () => {
        const employee = new Employee("Jon", 3, "jonchirinos@gmail.com", "Employee");
        expect(employee.getID()).toBe(3);
    });
    it(`should return the email when the getEmail() method is called`, () => {
        const employee = new Employee("Jon", 3, "jonchirinos@gmail.com", "Employee");
        expect(employee.getEmail()).toBe("jonchirinos@gmail.com");
    });
    it(`should return the employee when the getRole() method is called`, () => {
        const employee = new Employee("Jon", 3, "jonchirinos@gmail.com", "Employee");
        expect(employee.getRole()).toBe("Employee");
    });
});
