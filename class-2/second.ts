//i this second class we will discuss about type explicit and type inference

//type explicit
let myName: string = "Aynal haque Milon";

let myAge: number = 35;

console.log(myName);
console.log(myAge);

//type inference

let myName2 = "Aynal haque Milon";
let MyAge2 = 35;

console.log(myName2);
console.log(MyAge2);


//some rules
let data:string
 data= "data of anything that is used as a value"

 console.log(data);

 //Dont use it ,although it is possible but it is not recomended to use it beacuse it ceates bugs
 let data2
  data2 = "data of anything that is used as a value"

  console.log(data2);

  //Function parameters & return type

  function multipy(a:number, b:number):number {

    return a * b;
    

  }

  console.log(multipy(5, 10));


  //in the object literal we can use type explicit and inference

  let person: {name:string, Age:number} = {
    name: "Aynal haque Milon",
    Age: 35
  }

  console.log(person);

  //if we can not final the initial value
 let data3: string | number;

data3 = "Hello";
data3 = 123;

console.log(data3);

//"Confusion আছে?" → Explicit
// "Clear and simple?" → Inference
