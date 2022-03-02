const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;
