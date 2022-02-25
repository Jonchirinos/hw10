const employee = require("./employee");

class manager extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email, github);
        this.officeNumber;
    }
    getRole() {
        return "engineer";
    }
}
module.exports = engineer;
