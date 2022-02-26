const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, getGithub) {
        super(id, name, email);
        this.getGithub = github;
    }
    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}
// export
module.exports = Engineer;
