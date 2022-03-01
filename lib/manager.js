const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email, github);
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
