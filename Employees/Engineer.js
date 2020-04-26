const Employee = require('./Employee')

module.exports = class Engineer extends Employee {

    constructor(name,salary){
        super(name,salary);
    }

    greeting() {
        console.log(`My name is ${this.name}, I am an Engineer and my salary is ${this.salary}$`);
    }

    test() {
        console.log('This process is OK');
    }

}