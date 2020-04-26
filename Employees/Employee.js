module.exports = class Employee {


    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }


    greeting() {
        console.log(`My name is ${this.name}, my salary is ${salary}`);
    }

    
}