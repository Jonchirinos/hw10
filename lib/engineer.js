const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, getGithub) {
        super(id, name, email);
        this.getGithub = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
// export
module.exports = Engineer;
