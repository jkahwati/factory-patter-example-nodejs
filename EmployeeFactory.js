const Engineer = require('./Employees/Engineer')
const Director = require('./Employees/Director')


module.exports.create = (name,salary,type) =>  {

    if (type === "Engineer") {
        return new Engineer(name,salary);
    }
    if (type === "Director") {
        return new Director(name,salary);
    }

}

module.exports.greeting = () => {
    console.log("object");
}