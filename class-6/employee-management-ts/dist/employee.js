"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = createEmployee;
function createEmployee({ id, name, salary }) {
    return {
        id,
        name,
        salary,
        birthDate: new Date()
    };
}
//# sourceMappingURL=employee.js.map