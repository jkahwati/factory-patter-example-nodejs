const Director = require("../entitites/Director");
const Employee = require("../entitites/Employee");
const Engineer = require("../entitites/Engineer");

module.exports = class EmployeeFactoryAbstract {

    constructor() {}

    // FactoryMethod
    create(name, salary, type) {}

    getEmployee(name, salary, type) {
        console.log("Getting employee...")
        this.employee = this.create(name, salary, type);
        console.log("Is Employee?",this.employee instanceof Employee)
        console.log("Is Engineer?",this.employee instanceof Engineer)
        console.log("Is Director?",this.employee instanceof Director)
        return this.employee
    }

}