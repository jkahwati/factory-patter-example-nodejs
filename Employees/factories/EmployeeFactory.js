const Engineer = require('../entitites/Engineer')
const Director = require('../entitites/Director');
const EmployeeFactoryAbstract = require('./EmployeeFactoryAbstract');

//This is a keyCLass factory
module.exports = class EmployeeFactory extends EmployeeFactoryAbstract {

    constructor(){
        super();
    }
 
    //FactoryMethod
    //This override create from super
    create(name, salary, type) {
        switch (type) {
            case "Engineer":
                return new Engineer(name,salary);
            case "Director":
                return new Director(name,salary);
        }

    }
}