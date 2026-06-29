"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
const salary_js_1 = require("./salary.js");
const logger_js_1 = require("./logger.js");
const employee = (0, employee_1.createEmployee)({
    id: 1,
    name: "Aynal",
    salary: 50000,
    birthDate: new Date("2000-01-15")
});
console.log(employee);
const salary = (0, salary_js_1.calculateSalary)(employee.salary, 5000);
console.log(salary);
console.log((0, salary_js_1.tax)(salary));
console.log((0, salary_js_1.totalBonus)(1000, 2000, 3000, 4000));
(0, logger_js_1.logger)("Employee Added");
//# sourceMappingURL=index.js.map