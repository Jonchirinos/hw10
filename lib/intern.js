const Employee = require("./employee");

class intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email, school);
        this.school = school;
    }
    getRole() {
        return "intern";
    }
}
module.exports = Intern;
