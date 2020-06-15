const EmployeeFactory = require('./Employees/factories/EmployeeFactory')
const Employee = require('./Employees/entitites/Employee');

var employeeFactory = new EmployeeFactory(); //concreteFactory or keyClassFactory
var employee = new Employee(); // Product

employee = employeeFactory.getEmployee("Jesus","25000","Engineer")
console.log(employee);
employee.greeting()

employee = employeeFactory.getEmployee("Eduardo","100000","Director")
console.log(employee);
employee.greeting()