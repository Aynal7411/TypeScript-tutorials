"use strict";
//TypeScript Simple Types
Object.defineProperty(exports, "__esModule", { value: true });
//Number
let age = 30;
console.log(age);
//String
let Name = "Aynal Haque";
console.log(Name);
//boolean Number
let isActive = true;
console.log(isActive);
//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//Null and Undefined
let villageName = null;
let name = undefined;
console.log(villageName);
console.log(name);
//Symbol
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);
//BigInt
const bigNumberIs = 900999999998778878n;
console.log(bigNumberIs);
//# sourceMappingURL=first.js.map