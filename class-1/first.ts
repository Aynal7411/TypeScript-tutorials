//TypeScript Simple Types

//Number
let age: number =30;

console.log(age);

//String

let Name: string = "Aynal Haque";

console.log(Name);


//boolean Number
let isActive: boolean = true;


console.log(isActive);

//Array
let numbers: number[] = [1,2,3,4,5];
console.log(numbers);

//Null and Undefined
let villageName:null = null;
let name: undefined = undefined;

console.log(villageName);
console.log(name);


//Symbol
const uniqueKey: symbol = Symbol('description');

const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);


//BigInt

const bigNumberIs: bigint = 900999999998778878n;
console.log(bigNumberIs);
