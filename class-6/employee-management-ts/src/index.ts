import {createEmployee} from "./employee";

import {

calculateSalary,

tax,

totalBonus

} from "./salary.js";

import {logger} from "./logger.js";


const employee=createEmployee({

id:1,

name:"Aynal",

salary:50000,
 birthDate: new Date("2000-01-15")

});

console.log(employee);

const salary=calculateSalary(

employee.salary,

5000

);

console.log(salary);

console.log(

tax(salary)

);

console.log(

totalBonus(

1000,

2000,

3000,

4000

)

);

logger("Employee Added");