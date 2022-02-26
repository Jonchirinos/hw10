const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email, getGithub) {
        super(id, name, email);
        this.getGithub = getGithub;
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.getGithub;
    }
}
// export
module.exports = Engineer;
