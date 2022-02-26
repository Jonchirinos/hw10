const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email, github);
        this.officeNumber;
    }
    getRole() {
        return this.role;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;
