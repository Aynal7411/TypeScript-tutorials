export type Employee = {
    id:number;
    name:string;
    birthDate:Date;
    salary:number;
}

export function createEmployee(
{
id,
name,
salary,
birthDate
}:Employee
):Employee{

return{

id,
name,
salary,
birthDate:new Date()

}

}