const Employee = require('./Employee')

module.exports = class Director extends Employee {
    
    constructor(name,salary){
        super(name,salary);
    }

    greeting() {
        console.log(`My name is ${this.name}, I am an Director and my salary is ${this.salary}`);
    }

}