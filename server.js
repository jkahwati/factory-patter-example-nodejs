const employeeFactory = require('./EmployeeFactory')


const engineer = employeeFactory.create("Jesus","5000","Engineer")
const director = employeeFactory.create("Eduardo","10000","Director")

console.log(engineer);
console.log(director);
engineer.greeting()
engineer.test()
director.greeting()