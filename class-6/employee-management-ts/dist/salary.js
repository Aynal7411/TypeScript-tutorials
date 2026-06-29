"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSalary = calculateSalary;
exports.tax = tax;
exports.totalBonus = totalBonus;
function calculateSalary(salary, bonus) {
    return salary + (bonus ?? 0);
}
function tax(salary, taxRate = 10) {
    return salary - (salary * taxRate) / 100;
}
function totalBonus(...bonus) {
    return bonus.reduce((sum, b) => sum + b, 0);
}
//# sourceMappingURL=salary.js.map