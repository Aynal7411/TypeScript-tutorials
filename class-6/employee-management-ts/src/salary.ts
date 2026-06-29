export function calculateSalary(

salary:number,

bonus?:number

):number{

return salary+(bonus ?? 0);

}

export function tax(

salary:number,

taxRate:number=10

):number{

return salary-(salary*taxRate)/100;

}

export function totalBonus(

...bonus:number[]

):number{

return bonus.reduce(

(sum,b)=>sum+b,

0

);

}